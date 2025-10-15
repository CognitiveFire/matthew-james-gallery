import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'no']
const defaultLocale = 'no'

function getLocale(request: NextRequest): string {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameLocale) return pathnameLocale

  // Check cookies
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().toLowerCase())
      .find((lang) => {
        if (lang.startsWith('no') || lang.startsWith('nb') || lang.startsWith('nn')) return 'no'
        if (lang.startsWith('en')) return 'en'
        return null
      })
    
    if (preferredLocale === 'no') return 'no'
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Early return for any file with extension or known static files
  if (
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images')
  ) {
    return NextResponse.next()
  }

  // Handle root path specifically
  if (pathname === '/') {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}`, request.url)
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 })
    return response
  }

  // Block admin page
  if (pathname.startsWith('/admin')) {
    return new NextResponse(null, { status: 404 })
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to locale-prefixed URL
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  const response = NextResponse.redirect(newUrl)
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 }) // 1 year
  
  return response
}

export const config = {
  matcher: [
    // Only match root path and page routes, exclude all static files
    '/',
    '/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|json|xml|txt)).*)',
  ],
}


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

interface NavigationProps {
  lang: 'en' | 'no'
}

export default function Navigation({ lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navTranslations = {
    en: {
      gallery: 'Home',
      about: 'About',
      shipping: 'Shipping',
      contact: 'Contact',
      title: 'Matthew James Gallery'
    },
    no: {
      gallery: 'Hjem',
      about: 'Om',
      shipping: 'Frakt',
      contact: 'Kontakt',
      title: 'Matthew James Galleri'
    }
  }

  const t = navTranslations[lang]

  const navItems = [
    { name: t.gallery, href: `/${lang}` },
    { name: t.about, href: `/${lang}/about` },
    { name: t.shipping, href: `/${lang}/shipping` },
    { name: t.contact, href: `/${lang}/contact` },
  ]

  const switchLanguage = (newLang: 'en' | 'no') => {
    const currentPath = pathname.replace(/^\/(en|no)/, '')
    router.push(`/${newLang}${currentPath || ''}`)
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-gray/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="https://i.ibb.co/TMRnRpwL/mj-light.png"
              alt="Matthew James Gallery"
              width={112}
              height={30}
              className="h-7 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-sans text-sm font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-charcoal border-b-2 border-charcoal'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-warm-gray/20 pl-8">
              <Globe className="w-4 h-4 text-warm-gray" />
              <button
                onClick={() => switchLanguage(lang === 'en' ? 'no' : 'en')}
                className="font-sans text-sm font-medium text-warm-gray hover:text-charcoal transition-colors"
              >
                {lang === 'en' ? 'NO' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-charcoal"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-gray/20 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-sans text-base font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-charcoal'
                      : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  switchLanguage(lang === 'en' ? 'no' : 'en')
                  setIsMenuOpen(false)
                }}
                className="font-sans text-base font-medium text-warm-gray hover:text-charcoal transition-colors flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'en' ? 'Norsk' : 'English'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

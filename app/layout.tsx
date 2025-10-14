import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://matthewjamesgallery.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://matthewjamesgallery.com" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}

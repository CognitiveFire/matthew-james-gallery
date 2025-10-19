'use client'

import Link from 'next/link'
import { useState } from 'react'

interface ChristmasBannerProps {
  lang: 'en' | 'no'
}

export default function ChristmasBanner({ lang }: ChristmasBannerProps) {
  const [imageError, setImageError] = useState(false)

  const imageUrl = lang === 'no' 
    ? "https://i.ibb.co/WW0spNY9/1.png"
    : "https://i.ibb.co/k2X4WVXW/2.png"

  const altText = lang === 'no' 
    ? 'Gi en unik julegave - Original kunst, laget spesielt for dem. Bestillinger nå åpne.'
    : 'Give a one-of-a-kind Christmas gift - Original art, created just for them. Commissions now open.'

  return (
    <section className="py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Link href={`/${lang}/contact`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 bg-gray-100 min-h-[200px] flex items-center justify-center">
              {!imageError ? (
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full h-auto object-cover"
                  onError={() => setImageError(true)}
                  style={{ display: 'block' }}
                />
              ) : (
                <div className="text-center p-8 bg-gradient-to-r from-red-50 to-green-50 border-2 border-red-200 rounded-lg">
                  <div className="text-3xl mb-4">🎄</div>
                  <div className="text-2xl font-serif text-charcoal mb-4 font-bold">
                    {lang === 'no' ? 'Julebestillinger Åpne!' : 'Christmas Commissions Open!'}
                  </div>
                  <div className="text-lg text-warm-gray mb-6 max-w-md mx-auto">
                    {lang === 'no' 
                      ? 'Gi en unik julegave - Original kunst, laget spesielt for dem'
                      : 'Give a one-of-a-kind Christmas gift - Original art, created just for them'
                    }
                  </div>
                  <div className="inline-block bg-charcoal text-cream px-6 py-3 rounded-lg font-medium hover:bg-warm-gray transition-colors">
                    {lang === 'no' ? 'Bestill nå' : 'Commission Now'}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

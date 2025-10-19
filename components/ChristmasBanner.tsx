'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ChristmasBannerProps {
  lang: 'en' | 'no'
}

export default function ChristmasBanner({ lang }: ChristmasBannerProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

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
                <Image
                  src={imageUrl}
                  alt={altText}
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="text-2xl font-serif text-charcoal mb-4">
                    {lang === 'no' ? '🎄 Julebestillinger Åpne!' : '🎄 Christmas Commissions Open!'}
                  </div>
                  <div className="text-lg text-warm-gray mb-4">
                    {lang === 'no' 
                      ? 'Gi en unik julegave - Original kunst, laget spesielt for dem'
                      : 'Give a one-of-a-kind Christmas gift - Original art, created just for them'
                    }
                  </div>
                  <div className="text-sm text-charcoal font-medium">
                    {lang === 'no' ? 'Klikk for å bestille' : 'Click to commission'}
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

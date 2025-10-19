'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ChristmasBannerProps {
  lang: 'en' | 'no'
}

export default function ChristmasBanner({ lang }: ChristmasBannerProps) {
  return (
    <section className="py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Link href={`/${lang}/contact`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              {/* Fallback img tag for debugging */}
              <img
                src={lang === 'no' 
                  ? "https://i.ibb.co/bgXqqrq3/Give-a-one-of-a-kind-Christmas-gift-Original-art-created-just-for-them-Commissions-now-open-1.png"
                  : "https://i.ibb.co/4nNzQ1v8/Give-a-one-of-a-kind-Christmas-gift-Original-art-created-just-for-them-Commissions-now-open.png"
                }
                alt={lang === 'no' 
                  ? 'Gi en unik julegave - Original kunst, laget spesielt for dem. Bestillinger nå åpne.'
                  : 'Give a one-of-a-kind Christmas gift - Original art, created just for them. Commissions now open.'
                }
                className="w-full h-auto object-cover"
                style={{ display: 'block' }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

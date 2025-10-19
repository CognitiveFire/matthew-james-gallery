'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ChristmasBannerProps {
  lang: 'en' | 'no'
}

export default function ChristmasBanner({ lang }: ChristmasBannerProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Link href={`/${lang}/contact`} className="block group">
            <div className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 ${
              !imageLoaded ? 'bg-gray-200 animate-pulse' : ''
            }`}>
              <Image
                src={lang === 'no' 
                  ? "https://i.ibb.co/bgXqqrq3/Give-a-one-of-a-kind-Christmas-gift-Original-art-created-just-for-them-Commissions-now-open-1.png"
                  : "https://i.ibb.co/4nNzQ1v8/Give-a-one-of-a-kind-Christmas-gift-Original-art-created-just-for-them-Commissions-now-open.png"
                }
                alt={lang === 'no' 
                  ? 'Gi en unik julegave - Original kunst, laget spesielt for dem. Bestillinger nå åpne.'
                  : 'Give a one-of-a-kind Christmas gift - Original art, created just for them. Commissions now open.'
                }
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
                onLoad={() => setImageLoaded(true)}
                priority={false}
                loading="eager"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import StatusBadge from '@/components/StatusBadge'
import { Artwork } from '@/types/artwork'

interface ArtworkImageProps {
  artwork: Artwork
  title: string
}

export default function ArtworkImage({ artwork, title }: ArtworkImageProps) {
  const [currentImage, setCurrentImage] = useState<'main' | 'second'>('main')
  
  const displayImage = currentImage === 'main' ? artwork.imageUrl : artwork.secondImageUrl
  const hasSecondImage = !!artwork.secondImageUrl

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <Image
          src={displayImage || artwork.imageUrl}
          alt={title}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          unoptimized
        />
        <div className="absolute top-6 right-6">
          <StatusBadge available={artwork.available} size="md" />
        </div>
      </div>

      {/* Image Toggle Buttons */}
      {hasSecondImage && (
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentImage('main')}
            className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-300 ${
              currentImage === 'main'
                ? 'bg-charcoal text-cream'
                : 'bg-gray-200 text-charcoal hover:bg-gray-300'
            }`}
          >
            Main View
          </button>
          <button
            onClick={() => setCurrentImage('second')}
            className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-300 ${
              currentImage === 'second'
                ? 'bg-charcoal text-cream'
                : 'bg-gray-200 text-charcoal hover:bg-gray-300'
            }`}
          >
            Alternative View
          </button>
        </div>
      )}
    </div>
  )
}

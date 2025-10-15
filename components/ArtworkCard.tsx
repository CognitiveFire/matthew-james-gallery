'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import LikeButton from '@/components/LikeButton'
import SocialShare from '@/components/SocialShare'
import StatusBadge from '@/components/StatusBadge'
import { Artwork } from '@/types/artwork'
import { getLocalizedArtwork } from '@/lib/artwork-utils'

interface ArtworkCardProps {
  artwork: Artwork
  lang: 'en' | 'no'
}

export default function ArtworkCard({ artwork, lang }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const localizedArtwork = getLocalizedArtwork(artwork, lang)
  
  // Use second image on hover if available, otherwise use main image
  const displayImage = isHovered && artwork.secondImageUrl ? artwork.secondImageUrl : artwork.imageUrl

  return (
    <div 
      className="artwork-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/${lang}/artwork/${artwork.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <Image
            src={displayImage}
            alt={localizedArtwork.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <StatusBadge available={artwork.available} size="sm" />
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-medium text-charcoal">
            {localizedArtwork.title}
          </h3>
          <SocialShare 
            artworkId={artwork.id}
            title={localizedArtwork.title}
            imageUrl={artwork.imageUrl}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="font-sans text-sm text-warm-gray mb-4 line-clamp-2">
          {localizedArtwork.shortDescription}
        </p>
        <div className="flex justify-between items-center mb-3">
          <span className="font-sans text-sm text-warm-gray">
            {artwork.dimensions}
          </span>
          <span className="font-serif text-lg font-medium text-charcoal">
            {artwork.price.toLocaleString()} {lang === 'no' ? 'NOK' : 'NOK'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <LikeButton 
            artworkId={artwork.id}
            initialLikes={artwork.likes}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <Link 
            href={`/${lang}/artwork/${artwork.id}`}
            className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors duration-300"
          >
            {lang === 'no' ? 'Se detaljer' : 'View Details'} →
          </Link>
        </div>
      </div>
    </div>
  )
}

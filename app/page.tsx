'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAllArtworks } from '@/data/artwork'
import { Eye } from 'lucide-react'
import LikeButton from '@/components/LikeButton'
import SocialShare from '@/components/SocialShare'
import StatusBadge from '@/components/StatusBadge'
import { useState, useEffect } from 'react'
import { Artwork } from '@/types/artwork'

export default function HomePage() {
  const [artworks, setArtworks] = useState<Artwork[]>(getAllArtworks())

  useEffect(() => {
    // Load artworks from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gallery-artworks')
      if (saved) {
        setArtworks(JSON.parse(saved))
      }
      // Clear localStorage to force refresh with new data
      localStorage.removeItem('gallery-artworks')
    }
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal mb-6 leading-tight">
              Matthew James Gallery
            </h1>
                <p className="font-sans text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
                  Modern paintings with a sense of humour.<br />
                  A mix of bold colour, character, and the occasional awkward moment. Snapshots of people and places caught somewhere between truth and imagination.
                </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {artworks.sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((artwork) => (
              <div key={artwork.id} className="artwork-card group">
                <Link href={`/artwork/${artwork.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <Image
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      {artwork.title}
                    </h3>
                    <SocialShare 
                      artworkId={artwork.id}
                      title={artwork.title}
                      imageUrl={artwork.imageUrl}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="font-sans text-sm text-warm-gray mb-4 line-clamp-2">
                    {artwork.shortDescription}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-sans text-sm text-warm-gray">
                      {artwork.dimensions}
                    </span>
                    <span className="font-serif text-lg font-medium text-charcoal">
                      {artwork.price.toLocaleString()} NOK
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <LikeButton 
                      artworkId={artwork.id}
                      initialLikes={artwork.likes}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <Link 
                      href={`/artwork/${artwork.id}`}
                      className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-16 border-t border-warm-gray/20">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              Interested in a piece?
            </h3>
            <p className="font-sans text-warm-gray mb-8 max-w-2xl mx-auto">
              Contact us to inquire about availability, pricing, or to arrange a viewing.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

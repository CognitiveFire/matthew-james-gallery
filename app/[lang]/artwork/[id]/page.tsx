import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getArtworkById } from '@/data/artwork'
import { getLocalizedArtwork } from '@/lib/artwork-utils'
import { generateArtworkStructuredData, generateBreadcrumbStructuredData } from '@/lib/structured-data'
import { ArrowLeft, Calendar, Palette, Ruler } from 'lucide-react'
import LikeButton from '@/components/LikeButton'
import SocialShare from '@/components/SocialShare'
import StatusBadge from '@/components/StatusBadge'

interface ArtworkPageProps {
  params: {
    id: string
    lang: 'en' | 'no'
  }
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const { id, lang } = params
  const artwork = getArtworkById(id)

  if (!artwork) {
    notFound()
    return null
  }

  const localizedArtwork = getLocalizedArtwork(artwork, lang)

  const breadcrumbItems = [
    { name: lang === 'no' ? 'Hjem' : 'Home', url: `/${lang}` },
    { name: localizedArtwork.title, url: `/${lang}/artwork/${artwork.id}` }
  ]

  const artworkStructuredData = generateArtworkStructuredData(artwork, lang)
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems, lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    <div className="pt-20">
      {/* Back Navigation */}
      <div className="py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href={`/${lang}`} 
            className="inline-flex items-center space-x-2 font-sans text-warm-gray hover:text-charcoal transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Gallery</span>
          </Link>
        </div>
      </div>

      {/* Artwork Details */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
              <Image
                src={artwork.imageUrl}
                alt={localizedArtwork.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              <div className="absolute top-6 right-6">
                <StatusBadge available={artwork.available} size="md" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
                    {localizedArtwork.title}
                  </h1>
                  <SocialShare 
                    artworkId={artwork.id}
                    title={localizedArtwork.title}
                    imageUrl={artwork.imageUrl}
                    className="ml-4"
                  />
                </div>
                <p className="font-sans text-lg text-warm-gray leading-relaxed mb-6">
                  {localizedArtwork.description}
                </p>
                <div className="flex items-center space-x-6">
                  <LikeButton 
                    artworkId={artwork.id}
                    initialLikes={artwork.likes}
                  />
                </div>
              </div>

              {/* Artwork Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Palette className="w-5 h-5 text-warm-gray" />
                  <span className="font-sans text-charcoal">{artwork.materials}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Ruler className="w-5 h-5 text-warm-gray" />
                  <span className="font-sans text-charcoal">{artwork.dimensions}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="w-5 h-5 text-warm-gray" />
                  <p className="font-sans text-charcoal">{artwork.year}</p>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-warm-gray/20 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-lg text-warm-gray">Price</span>
                  <span className="font-serif text-3xl font-medium text-charcoal">
                    {artwork.price.toLocaleString()} NOK
                  </span>
                </div>
                <div className="flex justify-end mb-6">
                  <StatusBadge available={artwork.available} size="lg" />
                </div>

                {artwork.available ? (
                  <div className="space-y-4">
                    <Link href={`/${lang}/contact`} className="btn-primary w-full text-center block">
                      Inquire About Purchase
                    </Link>
                    <Link href={`/${lang}/shipping`} className="btn-secondary w-full text-center block">
                      Shipping Information
                    </Link>
                  </div>
                ) : (
                  <p className="font-sans text-center text-warm-gray text-lg py-4">
                    This artwork is currently sold.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
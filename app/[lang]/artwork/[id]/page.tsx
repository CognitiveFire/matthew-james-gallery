import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getArtworkById } from '@/data/artwork'
import { getLocalizedArtwork } from '@/lib/artwork-utils'
import { generateArtworkStructuredData, generateBreadcrumbStructuredData } from '@/lib/structured-data'
import { ArrowLeft, Calendar, Palette, Ruler } from 'lucide-react'
import LikeButton from '@/components/LikeButton'
import SocialShare from '@/components/SocialShare'
import StatusBadge from '@/components/StatusBadge'
import DiscountBadge from '@/components/DiscountBadge'
import ArtworkImage from '@/components/ArtworkImage'

interface ArtworkPageProps {
  params: {
    id: string
    lang: 'en' | 'no'
  }
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { id, lang } = params
  const artwork = getArtworkById(id)

  if (!artwork) {
    return {
      title: 'Artwork Not Found',
      description: 'The requested artwork could not be found.'
    }
  }

  const localizedArtwork = getLocalizedArtwork(artwork, lang)
  const galleryName = lang === 'no' ? 'Matthew James Galleri' : 'Matthew James Gallery'
  
  const title = `${localizedArtwork.title} | ${galleryName}`
  const description = localizedArtwork.shortDescription
  const url = `https://matthewjamesgallery.com/${lang}/artwork/${id}`

  return {
    title,
    description,
    keywords: [
      localizedArtwork.title,
      'Matthew James',
      'art gallery',
      'Bergen Norway',
      'contemporary art',
      'acrylic painting',
      artwork.materials,
      artwork.year.toString(),
      lang === 'no' ? 'norsk kunst' : 'Norwegian art'
    ],
    authors: [{ name: 'Matthew James', url: 'https://matthewjamesgallery.com' }],
    creator: 'Matthew James',
    publisher: galleryName,
    openGraph: {
      type: 'website',
      locale: lang === 'no' ? 'nb_NO' : 'en_US',
      alternateLocale: lang === 'no' ? 'en_US' : 'nb_NO',
      url,
      title,
      description,
      siteName: galleryName,
      images: [
        {
          url: artwork.imageUrl,
          width: 1200,
          height: 1500,
          alt: `${localizedArtwork.title} - ${galleryName}`
        },
        ...(artwork.secondImageUrl ? [{
          url: artwork.secondImageUrl,
          width: 1200,
          height: 1500,
          alt: `${localizedArtwork.title} - Alternative View - ${galleryName}`
        }] : [])
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [artwork.imageUrl],
      creator: '@matthewjamesart',
      site: '@matthewjamesart',
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `https://matthewjamesgallery.com/en/artwork/${id}`,
        'nb-NO': `https://matthewjamesgallery.com/no/artwork/${id}`,
      }
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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
            <ArtworkImage 
              artwork={artwork} 
              title={localizedArtwork.title} 
            />

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
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-lg text-warm-gray">Price</span>
                    <DiscountBadge size="md" />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-3xl font-medium text-charcoal">
                      {artwork.price.toLocaleString()} NOK
                    </div>
                    <div className="font-serif text-lg text-warm-gray line-through">
                      {Math.round(artwork.price / 0.6).toLocaleString()} NOK
                    </div>
                  </div>
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
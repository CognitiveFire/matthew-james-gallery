import Link from 'next/link'
import { getAllArtworks } from '@/data/artwork'
import { generateOrganizationStructuredData } from '@/lib/structured-data'
import { getDictionary } from '@/lib/dictionaries'
import ArtworkCard from '@/components/ArtworkCard'

interface HomePageProps {
  params: { lang: 'en' | 'no' }
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = params
  const artworks = getAllArtworks()
  const dict = await getDictionary(lang)
  
  if (!dict || !dict.home) {
    console.error('Dictionary or home section is undefined:', { dict, lang })
    return <div>Loading...</div>
  }
  
  const t = dict.home

  const organizationData = generateOrganizationStructuredData(lang)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-light text-charcoal mb-6 leading-tight">
              {t.title}
            </h1>
                <p className="font-sans text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
                  {t.subtitle}
                </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-8 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {artworks.sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((artwork) => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                lang={lang} 
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-16 border-t border-warm-gray/20">
            <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
              {t.interestedTitle}
            </h3>
            <p className="font-sans text-warm-gray mb-8 max-w-2xl mx-auto">
              {t.interestedText}
            </p>
            <Link href={`/${lang}/contact`} className="btn-primary inline-block">
              {t.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

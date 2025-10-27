import Link from 'next/link'
import { getAllArtworks } from '@/data/artwork'
import { generateOrganizationStructuredData } from '@/lib/structured-data'
import { getDictionary } from '@/lib/dictionaries'
import FilteredGallery from '@/components/FilteredGallery'
import ChristmasBanner from '@/components/ChristmasBanner'

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
          <FilteredGallery artworks={artworks} lang={lang} />

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

          {/* Social Sharing */}
          <div className="text-center mt-12 pt-8 border-t border-warm-gray/10">
            <h4 className="font-serif text-lg font-light text-charcoal mb-4">
              {lang === 'no' ? 'Del galleriet' : 'Share the Gallery'}
            </h4>
            <p className="font-sans text-sm text-warm-gray mb-6 max-w-xl mx-auto">
              {lang === 'no' 
                ? 'Hjelp oss å spre ordet om Matthew James Galleri på sosiale medier'
                : 'Help us spread the word about Matthew James Gallery on social media'
              }
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://matthewjamesgallery.com/${lang}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="font-sans text-sm">Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(lang === 'no' ? 'Sjekk ut Matthew James Galleri - Moderne kunst fra Bergen! 🎨' : 'Check out Matthew James Gallery - Modern art from Bergen! 🎨')}&url=${encodeURIComponent(`https://matthewjamesgallery.com/${lang}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="font-sans text-sm">Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://matthewjamesgallery.com/${lang}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Commissions Banner */}
      <ChristmasBanner lang={lang} />
    </div>
    </>
  )
}

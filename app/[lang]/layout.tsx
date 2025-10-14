import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import { getDictionary } from '@/lib/dictionaries'

export async function generateMetadata({ params }: { params: { lang: 'en' | 'no' } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  const title = params.lang === 'no' ? 'Matthew James Galleri' : 'Matthew James Gallery'
  const description = params.lang === 'no' 
    ? 'Moderne malerier med en sans for det absurde. Dristige farger møter eksentriske verdener med liten respekt for reglene. Engelsk kunstner bosatt i Bergen, Norge.'
    : 'Modern paintings with a sense of the absurd. Bold colours mix with eccentric worlds with little concern for the rules. English artist based in Bergen, Norway.'

  const keywords = params.lang === 'no'
    ? ['kunst Bergen', 'galleri Bergen', 'moderne kunst Norge', 'ekspresjonisme', 'Matthew James', 'norsk kunstgalleri', 'akrylmaleri', 'samtidskunst', 'kunstutstilling Bergen', 'kjøpe kunst Bergen']
    : ['art gallery Bergen', 'Norwegian art', 'modern art Norway', 'expressionism', 'Matthew James', 'contemporary art', 'acrylic paintings', 'buy art Bergen', 'art exhibition Bergen', 'English artist Norway']

  return {
    metadataBase: new URL('https://matthewjamesgallery.com'),
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    keywords,
    authors: [{ name: 'Matthew James', url: 'https://matthewjamesgallery.com' }],
    creator: 'Matthew James',
    publisher: 'Matthew James Gallery',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: params.lang === 'no' ? 'nb_NO' : 'en_US',
      alternateLocale: params.lang === 'no' ? 'en_US' : 'nb_NO',
      url: `https://matthewjamesgallery.com/${params.lang}`,
      title,
      description,
      siteName: title,
      images: [
        {
          url: 'https://i.ibb.co/2Yd8zqy1/profile.png',
          width: 1200,
          height: 630,
          alt: params.lang === 'no' ? 'Matthew James Galleri - Bergen, Norge' : 'Matthew James Gallery - Bergen, Norway'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://i.ibb.co/2Yd8zqy1/profile.png'],
      creator: '@matthewjamesart',
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
    alternates: {
      canonical: `https://matthewjamesgallery.com/${params.lang}`,
      languages: {
        'en': 'https://matthewjamesgallery.com/en',
        'nb-NO': 'https://matthewjamesgallery.com/no',
      }
    },
    verification: {
      google: 'aedlMUsrADyyfXGdFfXIpcywvj2e8JnMj8-W0DKSNqI',
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'no' }]
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'no' }
}) {
  return (
    <>
      <Navigation lang={params.lang} />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}


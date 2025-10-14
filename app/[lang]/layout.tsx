import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import { getDictionary } from '@/lib/dictionaries'

export async function generateMetadata({ params }: { params: { lang: 'en' | 'no' } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  const title = params.lang === 'no' ? 'Matthew James Galleri' : 'Matthew James Gallery'
  const description = params.lang === 'no' 
    ? 'Moderne malerier med en sans for det absurde. Dristige farger møter eksentriske verdener med liten respekt for reglene.'
    : 'Modern paintings with a sense of the absurd. Bold colours mix with eccentric worlds with little concern for the rules.'

  return {
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description,
    keywords: params.lang === 'no'
      ? ['kunst', 'galleri', 'Bergen', 'Norge', 'moderne kunst', 'ekspresjonisme', 'Matthew James']
      : ['art', 'gallery', 'Bergen', 'Norway', 'modern art', 'expressionism', 'Matthew James'],
    authors: [{ name: 'Matthew James' }],
    creator: 'Matthew James',
    openGraph: {
      type: 'website',
      locale: params.lang === 'no' ? 'nb_NO' : 'en_US',
      alternateLocale: params.lang === 'no' ? 'en_US' : 'nb_NO',
      url: 'https://matthewjamesgallery.com',
      title,
      description,
      siteName: title,
      images: [
        {
          url: 'https://i.ibb.co/2Yd8zqy1/profile.png',
          width: 1200,
          height: 630,
          alt: 'Matthew James Gallery'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://i.ibb.co/2Yd8zqy1/profile.png'],
    },
    robots: {
      index: true,
      follow: true,
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


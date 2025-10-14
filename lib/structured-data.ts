import { Artwork } from '@/types/artwork'

export function generateArtworkStructuredData(artwork: Artwork, lang: 'en' | 'no') {
  const baseUrl = 'https://matthewjamesgallery.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    description: artwork.description,
    image: artwork.imageUrl,
    creator: {
      '@type': 'Person',
      name: 'Matthew James',
      jobTitle: lang === 'no' ? 'Kunstner' : 'Artist',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bergen',
        addressCountry: 'NO'
      }
    },
    artMedium: artwork.materials,
    artworkSurface: 'canvas',
    width: {
      '@type': 'Distance',
      name: artwork.dimensions.split('×')[0].trim()
    },
    height: {
      '@type': 'Distance',
      name: artwork.dimensions.split('×')[1]?.trim() || artwork.dimensions
    },
    dateCreated: artwork.year.toString(),
    offers: {
      '@type': 'Offer',
      price: artwork.price,
      priceCurrency: 'NOK',
      availability: artwork.available 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/SoldOut',
      url: `${baseUrl}/${lang}/artwork/${artwork.id}`
    },
    inLanguage: lang === 'no' ? 'nb-NO' : 'en-US'
  }
}

export function generateOrganizationStructuredData(lang: 'en' | 'no') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    name: lang === 'no' ? 'Matthew James Galleri' : 'Matthew James Gallery',
    description: lang === 'no' 
      ? 'Moderne malerier med en sans for det absurde. Dristige farger møter eksentriske verdener.'
      : 'Modern paintings with a sense of the absurd. Bold colours mix with eccentric worlds.',
    url: 'https://matthewjamesgallery.com',
    logo: 'https://matthewjamesgallery.com/images/logo.png',
    image: 'https://i.ibb.co/2Yd8zqy1/profile.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergen',
      addressCountry: 'NO'
    },
    founder: {
      '@type': 'Person',
      name: 'Matthew James',
      nationality: 'British',
      jobTitle: lang === 'no' ? 'Kunstner' : 'Artist',
      description: lang === 'no'
        ? 'Engelsk kunstner bosatt i Bergen, Norge'
        : 'English artist based in Bergen, Norway'
    },
    sameAs: [
      'https://instagram.com/matthewjamesgallery',
      'https://facebook.com/matthewjamesgallery'
    ]
  }
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>,
  lang: 'en' | 'no'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://matthewjamesgallery.com${item.url}`
    }))
  }
}


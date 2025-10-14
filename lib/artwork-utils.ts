import { Artwork } from '@/types/artwork'

export function getLocalizedArtwork(artwork: Artwork, lang: 'en' | 'no'): Artwork {
  if (!artwork.translations) {
    return artwork
  }

  const translation = artwork.translations[lang]
  
  return {
    ...artwork,
    title: translation.title,
    description: translation.description,
    shortDescription: translation.shortDescription,
  }
}


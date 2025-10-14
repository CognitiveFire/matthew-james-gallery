export interface ArtworkTranslations {
  en: {
    title: string
    description: string
    shortDescription: string
  }
  no: {
    title: string
    description: string
    shortDescription: string
  }
}

export interface Artwork {
  id: string
  title: string
  description: string
  shortDescription: string
  translations?: ArtworkTranslations
  materials: string
  price: number
  imageUrl: string
  dimensions: string
  year: number
  available: boolean
  featured: boolean
  likes: number
  isLiked?: boolean
}

export interface ArtworkFormData {
  title: string
  description: string
  shortDescription: string
  materials: string
  price: number
  imageUrl: string
  dimensions: string
  year: number
  available: boolean
  featured: boolean
  likes: number
}

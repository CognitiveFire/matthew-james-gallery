export interface Artwork {
  id: string
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

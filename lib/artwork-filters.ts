import { Artwork } from '@/types/artwork'

export interface FilterCriteria {
  status: 'all' | 'available' | 'sold'
  size: 'all' | 'large' | 'small'
}

export const filterArtworks = (artworks: Artwork[], filters: FilterCriteria): Artwork[] => {
  return artworks.filter(artwork => {
    // Status filter
    if (filters.status !== 'all') {
      if (filters.status === 'available' && !artwork.available) return false
      if (filters.status === 'sold' && artwork.available) return false
    }

    // Size filter
    if (filters.size !== 'all') {
      // Extract numeric value from dimensions (e.g., "150 x 120cm" -> 150)
      const dimensions = artwork.dimensions.toLowerCase()
      const largestDimension = Math.max(
        ...dimensions.match(/\d+/g)?.map(Number) || [0]
      )
      
      if (filters.size === 'large' && largestDimension < 100) return false
      if (filters.size === 'small' && largestDimension >= 100) return false
    }

    return true
  })
}

export const getFilterCounts = (artworks: Artwork[]) => {
  const counts = {
    total: artworks.length,
    available: artworks.filter(a => a.available).length,
    sold: artworks.filter(a => !a.available).length,
    large: artworks.filter(a => {
      const dimensions = a.dimensions.toLowerCase()
      const largestDimension = Math.max(
        ...dimensions.match(/\d+/g)?.map(Number) || [0]
      )
      return largestDimension >= 100
    }).length,
    small: artworks.filter(a => {
      const dimensions = a.dimensions.toLowerCase()
      const largestDimension = Math.max(
        ...dimensions.match(/\d+/g)?.map(Number) || [0]
      )
      return largestDimension < 100
    }).length
  }

  return counts
}

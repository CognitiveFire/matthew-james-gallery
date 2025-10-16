'use client'

import { useState, useEffect } from 'react'
import { Artwork } from '@/types/artwork'
import ArtworkCard from '@/components/ArtworkCard'
import ArtworkFilter from '@/components/ArtworkFilter'
import { filterArtworks, getFilterCounts, FilterCriteria } from '@/lib/artwork-filters'

interface FilteredGalleryProps {
  artworks: Artwork[]
  lang: 'en' | 'no'
}

export default function FilteredGallery({ artworks, lang }: FilteredGalleryProps) {
  const [filteredArtworks, setFilteredArtworks] = useState(artworks)
  const [filters, setFilters] = useState<FilterCriteria>({
    status: 'all',
    size: 'all'
  })
  const [filterCounts, setFilterCounts] = useState(getFilterCounts(artworks))

  useEffect(() => {
    const filtered = filterArtworks(artworks, filters)
    setFilteredArtworks(filtered)
  }, [artworks, filters])

  const handleFilterChange = (newFilters: FilterCriteria) => {
    setFilters(newFilters)
  }

  const translations = {
    en: {
      showing: 'Showing',
      of: 'of',
      artworks: 'artworks',
      noResults: 'No artworks match your current filters.',
      tryAdjusting: 'Try adjusting your filter criteria to see more results.'
    },
    no: {
      showing: 'Viser',
      of: 'av',
      artworks: 'kunstverk',
      noResults: 'Ingen kunstverk matcher dine nåværende filtre.',
      tryAdjusting: 'Prøv å justere filterkriteriene for å se flere resultater.'
    }
  }

  const t = translations[lang]

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <ArtworkFilter onFilterChange={handleFilterChange} lang={lang} />
          
          {/* Results Counter */}
          <div className="text-sm text-warm-gray">
            {t.showing} <span className="font-medium text-charcoal">{filteredArtworks.length}</span> {t.of} <span className="font-medium text-charcoal">{artworks.length}</span> {t.artworks}
          </div>
        </div>

        {/* Filter Summary */}
        {(filters.status !== 'all' || filters.size !== 'all') && (
          <div className="text-sm text-warm-gray">
            {filters.status !== 'all' && (
              <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs mr-2">
                {filters.status === 'available' ? (lang === 'no' ? 'Til Salgs' : 'For Sale') : (lang === 'no' ? 'Solgt' : 'Sold')}
              </span>
            )}
            {filters.size !== 'all' && (
              <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs">
                {filters.size === 'large' ? (lang === 'no' ? 'Stor' : 'Large') : (lang === 'no' ? 'Liten' : 'Small')}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Artwork Grid */}
      {filteredArtworks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredArtworks.sort((a, b) => parseInt(b.id) - parseInt(a.id)).map((artwork) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              lang={lang} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
              {t.noResults}
            </h3>
            <p className="font-sans text-warm-gray">
              {t.tryAdjusting}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

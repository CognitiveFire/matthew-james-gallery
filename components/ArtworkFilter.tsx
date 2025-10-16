'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { FilterCriteria } from '@/lib/artwork-filters'

interface ArtworkFilterProps {
  onFilterChange: (filters: FilterCriteria) => void
  lang: 'en' | 'no'
}

export default function ArtworkFilter({ onFilterChange, lang }: ArtworkFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    status: 'all' as 'all' | 'available' | 'sold',
    size: 'all' as 'all' | 'large' | 'small'
  })

  const translations = {
    en: {
      filter: 'Filter',
      status: 'Status',
      size: 'Size',
      all: 'All',
      available: 'For Sale',
      sold: 'Sold',
      large: 'Large (100cm+)',
      small: 'Small (<100cm)',
      clear: 'Clear Filters',
      apply: 'Apply Filters'
    },
    no: {
      filter: 'Filtrer',
      status: 'Status',
      size: 'Størrelse',
      all: 'Alle',
      available: 'Til Salgs',
      sold: 'Solgt',
      large: 'Stor (100cm+)',
      small: 'Liten (<100cm)',
      clear: 'Fjern Filtre',
      apply: 'Bruk Filtre'
    }
  }

  const t = translations[lang]

  const handleFilterChange = (type: 'status' | 'size', value: string) => {
    const newFilters = { ...filters, [type]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters: FilterCriteria = { status: 'all', size: 'all' }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters = filters.status !== 'all' || filters.size !== 'all'

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-warm-gray/30 rounded-lg hover:bg-gray-50 transition-colors duration-300"
      >
        <Filter className="w-4 h-4 text-charcoal" />
        <span className="font-sans text-sm font-medium text-charcoal">
          {t.filter}
        </span>
        {hasActiveFilters && (
          <div className="w-2 h-2 bg-accent rounded-full"></div>
        )}
      </button>

      {/* Filter Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-warm-gray/30 rounded-lg shadow-lg z-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-lg font-medium text-charcoal">
              {t.filter}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded transition-colors duration-300"
            >
              <X className="w-4 h-4 text-warm-gray" />
            </button>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <label className="block font-sans text-sm font-medium text-charcoal mb-3">
              {t.status}
            </label>
            <div className="space-y-2">
              {[
                { value: 'all', label: t.all },
                { value: 'available', label: t.available },
                { value: 'sold', label: t.sold }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value={option.value}
                    checked={filters.status === option.value}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-4 h-4 text-accent border-warm-gray/30 focus:ring-accent focus:ring-2"
                  />
                  <span className="font-sans text-sm text-charcoal">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <label className="block font-sans text-sm font-medium text-charcoal mb-3">
              {t.size}
            </label>
            <div className="space-y-2">
              {[
                { value: 'all', label: t.all },
                { value: 'large', label: t.large },
                { value: 'small', label: t.small }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={option.value}
                    checked={filters.size === option.value}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                    className="w-4 h-4 text-accent border-warm-gray/30 focus:ring-accent focus:ring-2"
                  />
                  <span className="font-sans text-sm text-charcoal">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={clearFilters}
              className="flex-1 px-4 py-2 border border-warm-gray/30 rounded-lg font-sans text-sm font-medium text-warm-gray hover:bg-gray-50 transition-colors duration-300"
            >
              {t.clear}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 bg-charcoal text-cream rounded-lg font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.apply}
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

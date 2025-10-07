'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Edit, Plus, Eye, Trash2, Save, X } from 'lucide-react'
import { getAllArtworks, getArtworkById } from '@/data/artwork'
import { Artwork } from '@/types/artwork'
import StatusBadge from '@/components/StatusBadge'

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>(getAllArtworks())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [artworks])

  const handleEdit = (id: string) => {
    const artwork = artworks.find(a => a.id === id) || getArtworkById(id)
    if (artwork) {
      setEditingArtwork({ ...artwork })
      setEditingId(id)
      setIsAddingNew(false)
    }
  }

  const handleAddNew = () => {
    const newArtwork: Artwork = {
      id: (artworks.length + 1).toString(),
      title: '',
      description: '',
      shortDescription: '',
      materials: '',
      price: 0,
      imageUrl: '',
      dimensions: '',
      year: new Date().getFullYear(),
      available: true,
      featured: false,
      likes: 0,
    }
    setEditingArtwork(newArtwork)
    setEditingId(null)
    setIsAddingNew(true)
  }

  const handleSave = () => {
    if (!editingArtwork) return

    let updatedArtworks: Artwork[]
    if (isAddingNew) {
      updatedArtworks = [...artworks, editingArtwork]
    } else {
      updatedArtworks = artworks.map(artwork => 
        artwork.id === editingArtwork.id ? editingArtwork : artwork
      )
    }

    setArtworks(updatedArtworks)
    
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('gallery-artworks', JSON.stringify(updatedArtworks))
    }

    setEditingArtwork(null)
    setEditingId(null)
    setIsAddingNew(false)
  }

  const handleCancel = () => {
    setEditingArtwork(null)
    setEditingId(null)
    setIsAddingNew(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      const updatedArtworks = artworks.filter(artwork => artwork.id !== id)
      setArtworks(updatedArtworks)
      
      // Save to localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('gallery-artworks', JSON.stringify(updatedArtworks))
      }
    }
  }

  const handleInputChange = (field: keyof Artwork, value: string | number | boolean) => {
    if (editingArtwork) {
      setEditingArtwork({
        ...editingArtwork,
        [field]: value,
      })
    }
  }

  // Always render - removed hydration check temporarily

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
                Admin Panel
              </h1>
              <p className="font-sans text-lg text-warm-gray">
                Manage your artwork collection
              </p>
            </div>
            <Link href="/" className="btn-secondary">
              <Eye className="w-4 h-4 mr-2" />
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Add New Button */}
          <div className="mb-8">
            <button onClick={handleAddNew} className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add New Artwork
            </button>
          </div>

          {/* Edit Form */}
          {(editingArtwork || isAddingNew) && (
            <div className="bg-white border border-warm-gray/20 p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl font-medium text-charcoal">
                  {isAddingNew ? 'Add New Artwork' : 'Edit Artwork'}
                </h2>
                <div className="flex space-x-4">
                  <button onClick={handleSave} className="btn-primary">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button onClick={handleCancel} className="btn-secondary">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={editingArtwork?.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="input-field"
                    placeholder="Artwork title"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    value={editingArtwork?.price || ''}
                    onChange={(e) => handleInputChange('price', Number(e.target.value))}
                    className="input-field"
                    placeholder="Price in USD"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Materials *
                  </label>
                  <input
                    type="text"
                    value={editingArtwork?.materials || ''}
                    onChange={(e) => handleInputChange('materials', e.target.value)}
                    className="input-field"
                    placeholder="Oil on canvas, etc."
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Dimensions *
                  </label>
                  <input
                    type="text"
                    value={editingArtwork?.dimensions || ''}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    className="input-field"
                    placeholder="120cm × 80cm"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    value={editingArtwork?.year || ''}
                    onChange={(e) => handleInputChange('year', Number(e.target.value))}
                    className="input-field"
                    placeholder="2024"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Initial Likes
                  </label>
                  <input
                    type="number"
                    value={editingArtwork?.likes || 0}
                    onChange={(e) => handleInputChange('likes', Number(e.target.value))}
                    className="input-field"
                    placeholder="0"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    value={editingArtwork?.imageUrl || ''}
                    onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                    className="input-field"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Short Description *
                  </label>
                  <input
                    type="text"
                    value={editingArtwork?.shortDescription || ''}
                    onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                    className="input-field"
                    placeholder="One-line description for gallery display..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-sans text-sm font-medium text-charcoal mb-2">
                    Full Description *
                  </label>
                  <textarea
                    rows={4}
                    value={editingArtwork?.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="input-field resize-none"
                    placeholder="Detailed description of the artwork..."
                  />
                </div>

                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingArtwork?.available || false}
                      onChange={(e) => handleInputChange('available', e.target.checked)}
                      className="w-4 h-4 text-charcoal border-warm-gray rounded focus:ring-charcoal"
                    />
                    <span className="font-sans text-sm text-charcoal">Available for purchase</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={editingArtwork?.featured || false}
                      onChange={(e) => handleInputChange('featured', e.target.checked)}
                      className="w-4 h-4 text-charcoal border-warm-gray rounded focus:ring-charcoal"
                    />
                    <span className="font-sans text-sm text-charcoal">Featured artwork</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Artworks List */}
          <div className="space-y-6">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="bg-white border border-warm-gray/20 p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="font-serif text-xl font-medium text-charcoal">
                        {artwork.title}
                      </h3>
                      {artwork.featured && (
                        <span className="bg-accent text-white px-2 py-1 text-xs font-medium">
                          Featured
                        </span>
                      )}
                      <StatusBadge available={artwork.available} size="sm" />
                    </div>
                    <p className="font-sans text-warm-gray mb-3 line-clamp-2">
                      {artwork.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-warm-gray">
                      <span>{artwork.materials}</span>
                      <span>{artwork.dimensions}</span>
                      <span>{artwork.year}</span>
                      <span>❤️ {artwork.likes}</span>
                      <span className="font-medium text-charcoal">${artwork.price.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-6">
                    <Link href={`/artwork/${artwork.id}`} className="p-2 text-warm-gray hover:text-charcoal transition-colors">
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button 
                      onClick={() => handleEdit(artwork.id)}
                      className="p-2 text-warm-gray hover:text-charcoal transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(artwork.id)}
                      className="p-2 text-warm-gray hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

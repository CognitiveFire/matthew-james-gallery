'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

interface LikeButtonProps {
  artworkId: string
  initialLikes: number
  className?: string
}

export default function LikeButton({ artworkId, initialLikes, className = '' }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user has liked this artwork before
    if (typeof window !== 'undefined') {
      const likedArtworks = JSON.parse(localStorage.getItem('likedArtworks') || '[]')
      setIsLiked(likedArtworks.includes(artworkId))
    }
  }, [artworkId])

  // Don't render anything on the server to avoid hydration mismatch
  if (!isClient) {
    return (
      <button
        className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${className}`}
        disabled
      >
        <Heart className="w-5 h-5 text-warm-gray" />
        <span className="font-sans text-sm text-charcoal">{initialLikes}</span>
      </button>
    )
  }

  const handleLike = () => {
    if (typeof window === 'undefined') return
    
    const likedArtworks = JSON.parse(localStorage.getItem('likedArtworks') || '[]')
    
    if (isLiked) {
      // Unlike
      const newLikedArtworks = likedArtworks.filter((id: string) => id !== artworkId)
      localStorage.setItem('likedArtworks', JSON.stringify(newLikedArtworks))
      setLikes(prev => Math.max(0, prev - 1))
      setIsLiked(false)
    } else {
      // Like
      const newLikedArtworks = [...likedArtworks, artworkId]
      localStorage.setItem('likedArtworks', JSON.stringify(newLikedArtworks))
      setLikes(prev => prev + 1)
      setIsLiked(true)
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${className}`}
      aria-label={isLiked ? 'Unlike this artwork' : 'Like this artwork'}
    >
      <Heart
        className={`w-5 h-5 transition-colors duration-300 ${
          isLiked ? 'text-red-500 fill-red-500' : 'text-warm-gray hover:text-red-400'
        }`}
      />
      <span className="font-sans text-sm text-charcoal">{likes}</span>
    </button>
  )
}

'use client'

import { Share2, Facebook, Twitter, Instagram, Mail, Copy, Linkedin, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

interface SocialShareProps {
  artworkId: string
  title: string
  imageUrl: string
  className?: string
}

export default function SocialShare({ artworkId, title, imageUrl, className = '' }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setCanNativeShare(!!navigator.share)
  }, [])

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const currentLang = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en'
  const artworkUrl = `${baseUrl}/${currentLang}/artwork/${artworkId}`
  
  const shareText = currentLang === 'no' 
    ? `Sjekk ut "${title}" - Vakkert kunstverk fra Matthew James Galleri! 🎨`
    : `Check out "${title}" - Beautiful artwork from Matthew James Gallery! 🎨`
  
  const shareUrl = encodeURIComponent(artworkUrl)
  const shareTitle = encodeURIComponent(shareText)
  const shareImage = encodeURIComponent(imageUrl)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
    instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
    pinterest: `https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${shareImage}&description=${shareTitle}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(artworkUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          text: shareText,
          url: artworkUrl,
        })
        setIsOpen(false)
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      handleCopyLink()
      return
    }

    if (platform === 'instagram') {
      // Instagram doesn't support direct URL sharing, so we'll copy the link
      handleCopyLink()
      return
    }

    const url = shareLinks[platform as keyof typeof shareLinks]
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
    }
    setIsOpen(false)
  }

  // Don't render interactive elements on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className={`relative ${className}`}>
        <button
          className="flex items-center space-x-2 p-2 text-warm-gray transition-colors duration-300"
          disabled
        >
          <Share2 className="w-5 h-5" />
          <span className="font-sans text-sm">Share</span>
        </button>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 text-warm-gray hover:text-charcoal transition-colors duration-300"
        aria-label="Share this artwork"
      >
        <Share2 className="w-5 h-5" />
        <span className="font-sans text-sm">Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-warm-gray/20 rounded-lg shadow-lg py-2 z-50 min-w-[200px]">
          {canNativeShare && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 text-charcoal" />
              <span className="font-sans text-sm text-charcoal">Share</span>
            </button>
          )}
          
          {canNativeShare && <div className="border-t border-warm-gray/20 my-2"></div>}
          
          <button
            onClick={() => handleShare('facebook')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
            <span className="font-sans text-sm text-charcoal">Facebook</span>
          </button>

          <button
            onClick={() => handleShare('twitter')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Twitter className="w-4 h-4 text-blue-400" />
            <span className="font-sans text-sm text-charcoal">Twitter</span>
          </button>

          <button
            onClick={() => handleShare('linkedin')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Linkedin className="w-4 h-4 text-blue-700" />
            <span className="font-sans text-sm text-charcoal">LinkedIn</span>
          </button>

          <button
            onClick={() => handleShare('whatsapp')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span className="font-sans text-sm text-charcoal">WhatsApp</span>
          </button>

          <button
            onClick={() => handleShare('pinterest')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="font-sans text-sm text-charcoal">Pinterest</span>
          </button>

          <button
            onClick={() => handleShare('copy')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            {copied ? (
              <>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-sans text-sm text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-warm-gray" />
                <span className="font-sans text-sm text-charcoal">Copy Link</span>
              </>
            )}
          </button>

          <div className="border-t border-warm-gray/20 my-2"></div>

          <button
            onClick={() => handleShare('instagram')}
            className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span className="font-sans text-sm text-charcoal">Instagram</span>
            <span className="font-sans text-xs text-warm-gray">(Copies link)</span>
          </button>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

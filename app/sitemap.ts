import { MetadataRoute } from 'next'
import { getAllArtworks } from '@/data/artwork'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matthewjamesgallery.com'
  const artworks = getAllArtworks()

  // Static pages for both languages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          no: `${baseUrl}/no`,
        },
      },
    },
    {
      url: `${baseUrl}/no`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          no: `${baseUrl}/no/about`,
        },
      },
    },
    {
      url: `${baseUrl}/no/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          no: `${baseUrl}/no/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/no/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/shipping`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/en/shipping`,
          no: `${baseUrl}/no/shipping`,
        },
      },
    },
    {
      url: `${baseUrl}/no/shipping`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Artwork pages for both languages
  const artworkPages: MetadataRoute.Sitemap = artworks.flatMap((artwork) => [
    {
      url: `${baseUrl}/en/artwork/${artwork.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/artwork/${artwork.id}`,
          no: `${baseUrl}/no/artwork/${artwork.id}`,
        },
      },
    },
    {
      url: `${baseUrl}/no/artwork/${artwork.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ])

  return [...staticPages, ...artworkPages]
}


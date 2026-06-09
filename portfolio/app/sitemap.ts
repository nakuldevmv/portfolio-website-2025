import { MetadataRoute } from 'next'
import { getArticleLastModified, getDevToArticles } from '@/app/lib/devto'

const SITE_URL = 'https://www.nakuldev.me'
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getDevToArticles()

  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [OG_IMAGE_URL],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [OG_IMAGE_URL],
    },
  ]

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: getArticleLastModified(article),
    changeFrequency: 'monthly',
    priority: 0.75,
    images: [OG_IMAGE_URL],
  }))

  return [...corePages, ...blogPages]
}

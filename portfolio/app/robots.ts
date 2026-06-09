import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/gym'],
    },
    sitemap: 'https://www.nakuldev.me/sitemap.xml',
  }
}

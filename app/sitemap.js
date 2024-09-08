export default function sitemap() {
  return [
    {
      url: 'https://callha.com',
      lastModified: new Date(),
      image:'https://callha.com/favicon.ico',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://callha.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://callha.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
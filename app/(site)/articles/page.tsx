import { ArticleList } from 'components/global/ArticleList'
import { ArticlesPayload } from 'schemas/index'

import { sanityClient } from '../../../lib/sanity.client'

async function fetchArticles(): Promise<ArticlesPayload[]> {
  const client = sanityClient()
  if (!client) {
    throw new Error('Sanity client is not configured properly.')
  }

  // Use the sanityClient to fetch articles
  const articles = await client.fetch(
    `*[_type == "article"] | order(date desc) {
    title,
    slug,
    image,
    layout,
    category,
    author,
    excerpt,
    tags,
    scene,
    description,
    content
  }`
  )

  return articles
}

export default async function ArticlesPage() {
  const articles = await fetchArticles()

  return (
    <div className="h-screen w-full">
      <ArticleList articles={articles} />
    </div>
  )
}

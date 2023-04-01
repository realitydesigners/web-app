'use client'

import { usePreview } from 'lib/sanity.preview'
import { articleBySlugQuery } from 'lib/sanity.queries'
import type { ArticlesPayload } from 'types'

import { ArticlesPage } from '../articles/ArticlesPage'

export function ArticlesPreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const articles: ArticlesPayload = usePreview(token, articleBySlugQuery, {
    slug: slug,
  })

  return <ArticlesPage data={articles} />
}

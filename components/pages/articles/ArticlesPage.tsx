import { Header } from 'components/global/Header'
import Tags from 'components/global/Tags'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'schemas/index'

import { DarkLayout } from '../../global/DarkLayout'
import { LightLayout } from '../../global/LightLayout'

export function ArticlesPage({ data }: { data: ArticlesPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
    description = [],
    slug,
    tags = [],
    excerpt,
    layout,
  } = data || {}

  switch (layout) {
    case 'light':
      return <LightLayout data={data} />
    case 'dark':
      return <DarkLayout data={data} />
    default:
      // Default layout if no layout is specified
      return <LightLayout data={data} />
  }
}

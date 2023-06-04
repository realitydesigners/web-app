import type { Image, PortableTextBlock } from 'sanity'

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]

  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  ogImage?: Image
}

export interface ArticlesPayload {
  title?: string
  slug?: string
  image?: Image
  layout?: string
  category?: string
  author?: string
  excerpt?: string
  tags?: string[]
  scene?: PortableTextBlock[]
  description?: PortableTextBlock[]
}

export interface AuthorPayload {
  name?: string
  picture?: Image
  slug?: string
  tags?: string
}

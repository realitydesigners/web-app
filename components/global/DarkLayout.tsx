// DarkLayout.tsx
import { ArticlePortableText } from 'components/global/CustomPortableText'
import { Header } from 'components/global/Header'
import Tags from 'components/global/Tags'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'schemas/index'

export function DarkLayout({ data }: { data: ArticlesPayload }) {
  const { title, description = [], slug, tags = [], excerpt } = data || {}

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="pt-40">
        <div className="">
          <h1 className="mb-4 font-hyeon text-4xl font-bold uppercase leading-none lg:text-6xl">
            {title}
          </h1>
          <p className="font-hyeon text-2xl leading-tight lg:text-2xl">
            {excerpt}
          </p>
        </div>
      </div>
      <ArticlePortableText value={description} />
    </div>
  )
}

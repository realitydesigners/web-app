// LightLayout.tsx
import { ArticlePortableText } from 'components/global/CustomPortableText'
import { Header } from 'components/global/Header'
import Tags from 'components/global/Tags'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'schemas/index'

export function LightLayout({ data }: { data: ArticlesPayload }) {
  const { title, description = [], slug, tags = [], excerpt } = data || {}

  return (
    <div className="relative z-10 min-h-screen w-screen bg-gray-100 text-black">
      <div className="pt-40 ">
        <div className="flex flex-col" id="ArticleHeading">
          <h1 className="mb-4 font-hyeon text-4xl font-bold uppercase leading-none lg:text-6xl">
            {title}
          </h1>
          <p className="font-hyeon text-2xl leading-tight text-black lg:text-2xl">
            {excerpt}
          </p>
          <Tags tags={tags} />
        </div>
        <ArticlePortableText value={description} />
      </div>
    </div>
  )
}

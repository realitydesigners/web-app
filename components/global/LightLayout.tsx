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
    <div className="relative z-10 min-h-screen w-screen bg-white text-black">
      <div className="p-5 pt-40 lg:p-32">
        <div className="flex flex-col" id="ArticleHeading">
          <h1 className="font-dm mb-4 text-5xl font-bold uppercase tracking-wide lg:text-8xl">
            {title}
          </h1>
          <p className="text-md mb-4 w-full font-mono lg:w-2/3 lg:text-xl">
            {excerpt}
          </p>
          <Tags tags={tags} />
        </div>
        <ArticlePortableText
          paragraphClasses="font-mono text-xl text-black lg:text-2xl"
          value={description}
        />
      </div>
    </div>
  )
}

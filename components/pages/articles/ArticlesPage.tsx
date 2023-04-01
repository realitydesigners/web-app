import { CustomPortableText } from 'components/global/CustomPortableText'
import { Header } from 'components/global/Header'
import ImageBox from 'components/global/ImageBox'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'types'

export function ArticlesPage({ data }: { data: ArticlesPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { client, title, scene, description, slug, tags, excerpt } = data || {}

  return (
    <div className="min-h-screen w-screen bg-black">
      <div className=" p-4 lg:p-20">
        <div className="flex flex-col" id="ArticleHeading">
          <h1 className="mb-4 font-mono text-5xl font-bold uppercase text-white lg:text-8xl">
            {title}
          </h1>
          <p className="mb-6 font-mono text-lg text-gray-600 lg:text-xl">
            {excerpt}
          </p>
        </div>
        {
          <CustomPortableText
            paragraphClasses="font-mono text-white text-xl lg:text-2xl "
            value={description}
          />
        }
      </div>
    </div>
  )
}

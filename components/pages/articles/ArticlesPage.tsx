import { CustomPortableText } from 'components/global/CustomPortableText'
import { Header } from 'components/global/Header'
import ImageBox from 'components/global/ImageBox'
import Tags from 'components/global/Tags'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'types'

export function ArticlesPage({ data }: { data: ArticlesPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, description, slug, tags, excerpt } = data || {}

  return (
    <div className="min-h-screen w-screen bg-black">
      <div className=" p-5 lg:p-32">
        <div className="flex flex-col" id="ArticleHeading">
          <h1 className="mb-4 font-mono text-5xl font-bold uppercase text-white lg:text-8xl">
            {title}
          </h1>
          <p className="text-md  mb-4 w-full font-mono text-gray-600 lg:w-2/3 lg:text-xl">
            {excerpt}
          </p>
          <Tags tags={tags} />
        </div>
        {
          <CustomPortableText
            paragraphClasses="font-mono text-white text-xl lg:text-2xl"
            value={description}
          />
        }
      </div>
    </div>
  )
}
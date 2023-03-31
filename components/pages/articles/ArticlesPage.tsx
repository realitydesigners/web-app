import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { ArticlesPayload } from 'types'

export function ArticlesPage({ data }: { data: ArticlesPayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { client, title, scene, description, slug, tags } = data || {}

  return (
    <div className="h-screen w-screen bg-black">
      <div className="">
        {/* Description */}
        {<body></body> && (
          <CustomPortableText
            paragraphClasses="font-mono text-white text-xl "
            value={description}
          />
        )}
        {/* Workaround: scroll to top on route change */}
      </div>
    </div>
  )
}

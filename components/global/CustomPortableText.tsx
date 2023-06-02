import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

import { urlFor } from '../../lib/urlFor'

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)

  const imageUrl = urlBuilder()
    .image(value)
    .width(isInline ? 100 : 800)
    .fit('max')
    .auto('format')
    .url()

  const imageClassName = value.className || ''

  return (
    <div>
      <div className={imageClassName}>
        <Image
          src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit('max')
            .url()}
          alt={value.alt || ''}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
      h1: ({ children }) => {
        return (
          <h1 className="my-4 font-mono text-6xl font-bold uppercase text-white lg:text-8xl">
            {children}
          </h1>
        )
      },
      h2: ({ children }) => {
        return (
          <h2
            className={`my-4 font-mono text-4xl font-bold uppercase lg:text-6xl ${paragraphClasses}`}
          >
            {children}
          </h2>
        )
      },
      h3: ({ children }) => {
        return (
          <h3 className="my-4 font-mono text-2xl font-bold uppercase text-white lg:text-3xl">
            {children}
          </h3>
        )
      },
      ol: ({ children }) => {
        return (
          <ol className="list-inside list-decimal text-4xl text-white">
            {children}
          </ol>
        )
      },
      li: ({ children }) => {
        return <li className="my-2 text-white">{children}</li>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ImageComponent,
    },
  }

  return <PortableText components={components} value={value} />
}

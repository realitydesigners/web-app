import { PortableText, PortableTextComponents } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'
import { PortableTextBlock } from 'sanity'

import { urlFor } from '../../lib/urlFor'

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)

  const imageClassName = value.className || ''

  return (
    <div>
      <div className={imageClassName}>
        <Image
          src={urlFor(value).fit('max').url()}
          alt={value.alt || ''}
          width={2000}
          height={2000}
        />
      </div>
    </div>
  )
}

const iFrame = ({ value }) => {
  const { url, width, height } = value

  return (
    <div className="iframe-container">
      <iframe src={url} width={width} height={height} allowFullScreen></iframe>
    </div>
  )
}
const SplineViewer = ({ value }) => {
  const { url } = value

  return (
    <div
      className="h-40 w-full"
      dangerouslySetInnerHTML={{
        __html: `
    <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
    <spline-viewer url="${url}"></spline-viewer>
  `,
      }}
    ></div>
  )
}

export function ArticlePortableText({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return (
          <div className="align-center flex w-full flex-row justify-center">
            <p className="w-10/12 font-hyeon text-xl leading-tight lg:text-2xl">
              {children}
            </p>
          </div>
        )
      },
      h1: ({ children }) => {
        return (
          <h1 className="mb-4 font-hyeon text-4xl font-bold uppercase leading-none lg:text-6xl">
            {children}
          </h1>
        )
      },
      h2: ({ children }) => {
        return (
          <h2
            className={`my-4 font-mono text-4xl font-bold uppercase leading-none lg:text-6xl `}
          >
            {children}
          </h2>
        )
      },
      h3: ({ children }) => {
        return (
          <h3 className="font-hyeon text-2xl leading-tight lg:text-2xl">
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
      blockquote: ({ children }) => (
        <div className="align-center flex  w-full flex-row justify-center p-8">
          <blockquote className="w-10/12">
            <p className="pl-1 font-hyeon text-3xl font-bold">{children}</p>
          </blockquote>
        </div>
      ),
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
      iframe: iFrame,
      spline: SplineViewer,
    },
  }

  return <PortableText components={components} value={value} />
}

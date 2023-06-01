import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Image, PortableTextBlock } from 'sanity'

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
          <h2 className="my-4 font-mono text-4xl font-bold uppercase text-white lg:text-6xl">
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
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string }
      }) => {
        return (
          <div className="my-4">
            {value?.caption && (
              <div className="font-sans text-sm text-gray-600">
                {value.caption}
              </div>
            )}
          </div>
        )
      },
    },
  }

  return <PortableText components={components} value={value} />
}

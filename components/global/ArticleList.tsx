'use client'

import { CustomPortableText } from 'components/global/CustomPortableText'
import Image from 'next/image'
import Link from 'next/link'
import { createClient, groq } from 'next-sanity'
import React from 'react'
import author from 'schemas/author'

const clientConfig = {
  projectId: 'fovvfda4',
  dataset: 'production',
  useCdn: false,
}

interface ArticleListProps {
  query: string
}

export function ArticleList({ query }: ArticleListProps) {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    const client = createClient(clientConfig)

    client
      .fetch(groq`${query}`)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles)
      })
      .catch((error) => {
        console.error('Error fetching articles:', error)
      })
  }, [query])

  return (
    <div className="h-full w-full">
      {articles.map((article: any) => {
        return (
          <div key={article._id}>
            <Link href={`/articles/${article.slug}`}>
              <div className="mb-1 bg-black  p-4">
                <h2 className="font-mono text-xl uppercase text-white">
                  {article.title}
                </h2>
                <p className="mb-4  w-full font-mono text-sm text-gray-600 lg:w-2/3 lg:text-xl">
                  {article.excerpt}
                </p>
                <div>
                  {article.author && article.author.picture && (
                    <>
                      <Link href={`/authors/${article.author.slug.current}`}>
                        {article.author.name}
                      </Link>
                    </>
                  )}
                </div>

                <Image
                  src={article.image}
                  alt={article.alt}
                  width={300}
                  height={300}
                />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

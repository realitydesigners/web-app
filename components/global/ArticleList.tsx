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
              <div className="group mb-1 flex p-4">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={200}
                  height={200}
                  className="h-40 w-40 transform rounded-lg object-cover transition-all group-hover:scale-105 group-hover:shadow-lg"
                />
                <div className="flex w-full flex-col bg-black p-4">
                  <h2 className="font-mono text-xl uppercase text-slate-200 transition-colors duration-300 group-hover:text-white group-hover:underline">
                    {article.title}
                  </h2>
                  <p
                    className="mb-4 w-full overflow-hidden overflow-ellipsis font-mono text-sm text-gray-600 lg:w-2/3 lg:text-xl"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: '4',
                    }}
                  >
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
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

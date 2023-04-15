'use client'

import Image from 'next/image'
import Link from 'next/link'
import { createClient, groq } from 'next-sanity'
import React from 'react'

import ClientSideRoute from './ClientSideRoute'

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
    <div className="w-ful h-full pt-20">
      {articles.map((article: any) => (
        <ClientSideRoute
          route={`/articles/${article.slug.current}`}
          key={article._id}
        >
          <div className="group mb-1 flex p-4">
            <Image
              src={article.image}
              alt={article.alt}
              width={200}
              height={100}
              className="h-32 w-24 transform rounded-lg object-cover transition-all group-hover:scale-105 group-hover:shadow-lg"
            />
            <div className="flex w-full flex-col pl-4">
              <div>
                {article.category && (
                  <>
                    <Link
                      href={`/authors/${article.category.slug.current}`}
                      className="font-dm text-xs uppercase tracking-widest text-gray-500"
                    >
                      {article.category.name}
                    </Link>
                  </>
                )}
              </div>

              <h2 className="font-dm mb-2 text-xl font-bold uppercase tracking-wide text-slate-200 transition-colors duration-300 group-hover:text-white group-hover:underline">
                {article.title}
              </h2>
              <p
                className="mb-4 w-full overflow-hidden overflow-ellipsis font-mono text-xs leading-5  text-gray-400 lg:w-2/3 lg:text-xl"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: '3',
                }}
              >
                {article.excerpt}
              </p>
            </div>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  )
}

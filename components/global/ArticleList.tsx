// ArticleList.tsx
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ArticlesPayload } from 'schemas/index'

import { urlFor } from '../../lib/urlFor' // Update path if needed

interface ArticleItemProps {
  article: ArticlesPayload & { slug?: { current?: string } }
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug?.current}`}>
      <div className=" mb-8 w-full p-6">
        {article.image && (
          <div className="relative mb-4 aspect-square w-full ">
            <Image
              src={urlFor(article.image).url() || ''}
              alt={article.title || 'Article image'}
              width={2000}
              height={2000}
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
        )}
        <h2 className="mb-4 font-hyeon text-4xl uppercase leading-none text-white">
          {article.title}
        </h2>
        <p className="xtext-lg  font-hyeon leading-tight text-gray-600">
          {article.excerpt}
        </p>
      </div>
    </Link>
  )
}

interface ArticleListProps {
  articles: ArticlesPayload[]
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  )
}

export { ArticleItem, ArticleList }

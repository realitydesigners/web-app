// ArticleList.tsx
import Image from 'next/image'
import { FC } from 'react'
import { ArticlesPayload } from 'schemas/index'

import { urlFor } from '../../lib/urlFor' // Update path if needed

interface ArticleItemProps {
  article: ArticlesPayload
}

const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  return (
    <div>
      <h2 className="text-lg text-white">{article.title}</h2>

      <p className="text-sm text-gray-600">{article.excerpt}</p>

      {article.image && (
        <Image
          src={urlFor(article.image).url() || ''}
          alt={article.title || 'Article image'}
          width={500} // replace with your desired image width
          height={300} // replace with your desired image height
          objectFit="cover"
        />
      )}
    </div>
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

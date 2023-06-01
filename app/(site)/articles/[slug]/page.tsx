import { ArticlesPage } from 'components/pages/articles/ArticlesPage'
import { ArticlesPreview } from 'components/pages/articles/ArticlesPreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getArticleBySlug } from 'lib/sanity.client'
import { notFound } from 'next/navigation'

//example page with no data, only loading another component that contains page configuration
export default async function ArticleSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getArticleBySlug({ slug: params.slug })

  if (!data) {
    notFound()
  }

  return (
    <>
      <ArticlesPage data={data} />
    </>
  )
}

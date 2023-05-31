import { ArticlesPage } from 'components/pages/articles/ArticlesPage'
import { ArticlesPreview } from 'components/pages/articles/ArticlesPreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getArticleBySlug } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import { notFound } from 'next/navigation'

//example page with no data, only loading another component that contains page configuration
export default async function ArticleSlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const token = getPreviewToken()
  const data = await getArticleBySlug({ slug: params.slug })

  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <PreviewSuspense
          fallback={
            <PreviewWrapper>
              {data ? (
                <ArticlesPage data={data} />
              ) : (
                /* Render something else when data is undefined */
                <div>Loading...</div>
              )}
            </PreviewWrapper>
          }
        >
          <ArticlesPreview token={token} slug={params.slug} />
        </PreviewSuspense>
      ) : data ? (
        <ArticlesPage data={data} />
      ) : (
        /* Render something else when data is undefined */
        <div>Loading...</div>
      )}
    </>
  )
}

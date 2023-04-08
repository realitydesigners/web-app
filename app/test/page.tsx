import { ArticleList } from 'components/global/ArticleList'

const query = `*[_type=="article"]
[0..4]
{
   _id,
  name,
  title,
  excerpt,
  slug,
  "slug": slug.current,
  "image": image.asset->url,
  "alt": image.alt,
  description,
  author,
  category,
}
{...,author->{...}}
{...,category->{...}}
`

export default function Test() {
  return (
    <div className="h-full w-full">
      <div className="w-full ">
        <ArticleList query={query} />
      </div>
    </div>
  )
}

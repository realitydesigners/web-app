import { ArticleList } from 'components/global/ArticleList'
import { ArticleMain } from 'components/global/ArticleMain'
import Navbar from 'components/global/Navbar'
import Head from 'next/head'

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
const query1 = `*[_type=="article"]
[0..2]
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
    <>
      <Head>
        <title>REALITY DESIGNERS | Building Worlds Inside Minds</title>
        <meta name="description" content="My website description"></meta>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <Navbar />
      <div className="h-full w-full">
        <div className=" w-full">
          <ArticleMain query={query1} />
          <ArticleList query={query} />
        </div>
      </div>
    </>
  )
}
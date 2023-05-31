'use client'

import { Analytics } from '@vercel/analytics/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { notFound } from 'next/navigation'

const Stars = dynamic<{}>(
  () => import('../components/global/Stars').then((mod) => mod.default),
  { ssr: false }
)

const Logo = dynamic<{}>(
  () => import('../components/global/Logo').then((mod) => mod.default),
  { ssr: false }
)

export default function IndexRoute() {
  return (
    <>
      <Head>
        <title>REALITY DESIGNERS | Building Worlds Inside Minds</title>
        <meta name="description" content="My website description"></meta>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>

      <main className="bg-black">
        <div className="fixed z-0 h-screen w-screen">
          {' '}
          <Stars />
        </div>
        <div className="relative flex h-screen w-screen">
          <div className="absolute z-0 h-full w-full">
            <Logo />
          </div>
        </div>
        <div className="flex h-screen w-screen items-center justify-center ">
          <div className="relative z-10 flex h-4/5 w-11/12 bg-white"></div>
        </div>
      </main>
      <Analytics />
    </>
  )
}

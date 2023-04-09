'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Navbar from 'components/global/Navbar'
import { HomePagePreview } from 'components/pages/home/HomePagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getHomePage } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { notFound } from 'next/navigation'

import Three from '../../components/global/Three'

const Stars = dynamic<{}>(
  () => import('../../components/global/Stars').then((mod) => mod.default),
  { ssr: false }
)

const Logo = dynamic<{}>(
  () => import('../../components/global/Logo').then((mod) => mod.default),
  { ssr: false }
)

export default function IndexRoute() {
  return (
    <>
      <Head>
        <title>REALITY DESIGNERS | Building Worlds Inside Minds</title>
        <meta name="description" content="My website description"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className="bg-black">
        <div className="fixed z-0 h-screen w-screen">
          {' '}
          <Stars />
        </div>
        <div className="relative flex h-screen w-screen">
          <div className="absolute z-0 h-full w-full">
            <Canvas>
              <Three />
            </Canvas>
          </div>
        </div>
      </main>
    </>
  )
}

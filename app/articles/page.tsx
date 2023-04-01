'use client'

import dynamic from 'next/dynamic'

const Stars = dynamic<{}>(
  () => import('../../components/global/Stars').then((mod) => mod.default),
  { ssr: false }
)

export default function ArticlesPage() {
  return (
    <div>
      <div className="min-h-screen w-screen bg-black">
        <div className="fixed z-0 h-screen w-screen">
          {' '}
          <Stars />
        </div>

        <h1 className="font-mono text-xl text-white">ArticlesPage</h1>
      </div>
    </div>
  )
}

import 'tailwindcss/tailwind.css'
import '../../globals.css'

import {
  DM_Mono,
  Do_Hyeon,
  IBM_Plex_Mono,
  Inter,
  PT_Serif,
} from '@next/font/google'
import Navbar from 'components/global/Navbar'
import dynamic from 'next/dynamic'

const dm = DM_Mono({
  variable: '--font-dm',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const hyeon = Do_Hyeon({
  variable: '--font-hyeon',
  subsets: ['latin'],
  weight: ['400'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hyeon.variable}`}>
      <body className="">
        {' '}
        <Navbar />
        {children}
      </body>
    </html>
  )
}

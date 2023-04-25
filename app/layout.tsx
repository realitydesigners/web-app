import 'tailwindcss/tailwind.css'
import './globals.css'

import { DM_Mono, Do_Hyeon, IBM_Plex_Mono, Inter } from '@next/font/google'
import Navbar from 'components/global/Navbar'

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
})

const dm = DM_Mono({
  variable: '--font-dm',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const hyeon = Do_Hyeon({
  variable: '--font-hyeon',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${hyeon.variable} ${dm.variable}`}
    >
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

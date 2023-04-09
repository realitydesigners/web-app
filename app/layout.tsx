import 'tailwindcss/tailwind.css'

import {
  DM_Mono,
  Do_Hyeon,
  IBM_Plex_Mono,
  Inter,
  PT_Serif,
} from '@next/font/google'
import Navbar from 'components/global/Navbar'

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

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
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable}  ${hyeon.variable} ${dm.variable}`}
    >
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

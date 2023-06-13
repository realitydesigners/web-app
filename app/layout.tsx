import 'tailwindcss/tailwind.css'
import './globals.css'

import { DM_Mono, Do_Hyeon } from '@next/font/google'

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
    <html lang="en" className={`${hyeon.variable}`}>
      <body className="bg-black">{children}</body>
    </html>
  )
}

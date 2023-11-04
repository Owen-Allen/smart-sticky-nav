import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Clucker",
  description: "",
  icons: "/chicken.png",
};


import Nav from '@/components/nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-400`}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}

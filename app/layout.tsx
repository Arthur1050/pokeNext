import SideMenu from '@/components/organisms/SideMenu/SideMenu'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Providers from './providers'
import Header from '@/components/organisms/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokenext',
  description: 'Tenha uma pokedex na tela do seu computador.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.StrictMode>
    <html lang="en">
          <body className={inter.className}>
            <Providers>
              <Header />
              <SideMenu />
              {children}
            </Providers>
          </body>
    </html>
    </React.StrictMode>
  )
}

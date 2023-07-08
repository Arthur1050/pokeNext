'use client'
import SideMenu from '@/components/organisms/SideMenu/SideMenu'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <SideMenu />
        {children}
        <aside></aside>
      </body>
    </html>
    </React.StrictMode>
  )
}
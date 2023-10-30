import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quotable Quotes',
  description: 'Random quotes from historical figures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='forest'>
      <body>{children}</body>
    </html>
  )
}

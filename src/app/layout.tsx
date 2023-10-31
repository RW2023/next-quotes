import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Historical Black Thought Leaders',
  description: 'Random quotes from historical black figures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='halloween'>
      <body>{children}</body>
    </html>
  )
}

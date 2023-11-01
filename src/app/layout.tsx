//src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


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
    <html lang="en" data-theme="halloween">
      <body className="mt-5">
        <Navbar />
        {children}
        </body>
        <Footer />
    </html>
  );
}

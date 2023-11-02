// src/app/layout.tsx
import { NextPage } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import ogImage from '/og.png'; 

interface Metadata {
  title: string;
  description: string;
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

// Your metadata object is also good, keep it as is
export const metadata: Metadata = {
  title: 'Historical Black Thought Leaders',
  description: 'Random quotes from historical black figures',
  images: [
    { src: ogImage.src, width: 1200, height: 630, alt: 'OG Image Alt Text' },
  ],
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" data-theme="halloween">
      <Head>
        {/* The following meta tags are streamlined using the metadata object */}
        <meta property="og:image" content={metadata.images[0].src} />
        <meta
          property="og:image:width"
          content={metadata.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.images[0].height.toString()}
        />
        <meta property="og:image:alt" content={metadata.images[0].alt} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className="mt-5">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
};

export default RootLayout;

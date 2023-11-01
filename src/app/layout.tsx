// src/app/layout.tsx
import { NextPage } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Historical Black Thought Leaders',
  description: 'Random quotes from historical black figures',
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" data-theme="halloween">
      <body className="mt-5">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
};

export default RootLayout;

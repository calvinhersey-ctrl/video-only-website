import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyStoreCTA from '@/components/StickyStoreCTA';

export const metadata: Metadata = {
  title: {
    default: 'Video Only — West Coast TV & Audio Experts Since 1982',
    template: '%s | Video Only',
  },
  description: 'The West Coast\'s premier home electronics retailer since 1982. Compare TVs, soundbars, and audio equipment from Samsung, LG, Sony, and TCL. 16 stores in Washington, Oregon, and California.',
  openGraph: {
    type: 'website',
    siteName: 'Video Only',
    title: 'Video Only — West Coast TV & Audio Experts Since 1982',
    description: 'Compare TVs, soundbars, and audio equipment. 16 showrooms in WA, OR, and CA.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pb-16 md:pb-0">
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyStoreCTA />
      </body>
    </html>
  );
}

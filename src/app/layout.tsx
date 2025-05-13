// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Windowshop.ai | Crafting Digital Experiences for Entrepreneurs',
  description: 'Windowshop.ai builds innovative mobile and web apps for entrepreneurs. Our flagship product, CrossPromote.ai, helps businesses 100x their marketing efforts.',
  keywords: 'digital apps, entrepreneur tools, cross promotion, web development, mobile apps, marketing platform',
  authors: [{ name: 'Windowshop.ai' }],
  openGraph: {
    title: 'Windowshop.ai | Crafting Digital Experiences',
    description: 'We build innovative mobile and web apps used by entrepreneurs globally. Check out CrossPromote.ai - 100x your marketing efforts.',
    url: 'https://windowshop.ai',
    siteName: 'Windowshop.ai',
    images: [
      {
        url: 'https://windowshop.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Windowshop.ai - Crafting Digital Experiences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windowshop.ai | Crafting Digital Experiences',
    description: 'We build innovative mobile and web apps used by entrepreneurs globally. Check out CrossPromote.ai - 100x your marketing efforts.',
    images: ['https://windowshop.ai/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://windowshop.ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Windowshop.ai",
              "url": "https://windowshop.ai",
              "logo": "https://windowshop.ai/logo.png",
              "description": "We build innovative mobile and web apps for entrepreneurs.",
              "email": "hello@windowshop.ai",
              "sameAs": [
                "https://twitter.com/windowshopai",
                "https://linkedin.com/company/windowshopai"
              ],
              "brand": [
                {
                  "@type": "Brand",
                  "name": "CrossPromote.ai",
                  "description": "A cross-promotion platform for intelligent entrepreneurs"
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

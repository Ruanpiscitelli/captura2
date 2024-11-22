import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Providers } from '@/components/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ruan Piscitelli | Marketing Digital',
    template: '%s | Ruan Piscitelli'
  },
  description: 'Estratégias práticas e insights de marketing digital toda semana por Ruan Piscitelli.',
  metadataBase: new URL('https://ruanpiscitelli.com'),
  openGraph: {
    title: 'Ruan Piscitelli | Marketing Digital',
    description: 'Estratégias práticas e insights de marketing digital toda semana por Ruan Piscitelli.',
    url: 'https://ruanpiscitelli.com',
    siteName: 'Ruan Piscitelli',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://ruanpiscitelli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruan Piscitelli - Marketing Digital'
      }
    ]
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
  twitter: {
    card: 'summary_large_image',
    title: 'Ruan Piscitelli | Marketing Digital',
    description: 'Estratégias práticas e insights de marketing digital toda semana.',
    creator: '@ruanpiscitelli',
  },
  alternates: {
    canonical: 'https://ruanpiscitelli.com',
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  verification: {
    google: 'your-google-site-verification', // You'll need to add this later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
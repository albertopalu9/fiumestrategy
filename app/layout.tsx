import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fiume | Venture Studio & Advisory',
  description: 'We advise, build, and implement. A venture studio that works with founders and organisations to turn ambitious ideas into real businesses.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Fiume | Venture Studio & Advisory',
    description: 'We advise, build, and implement. A studio that works with founders and organisations to turn ambitious ideas into real businesses.',
    siteName: 'Fiume',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiume | Venture Studio & Advisory',
    description: 'We advise, build, and implement. A studio that works with founders and organisations to turn ambitious ideas into real businesses.',
  },
}

export const viewport: Viewport = {
  themeColor: '#000D18',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable}`} style={{ height: "100%", overflow: "hidden" }}>
      <body className="font-sans antialiased" style={{ height: "100%", overflow: "hidden" }}>
        {children}
      </body>
    </html>
  )
}

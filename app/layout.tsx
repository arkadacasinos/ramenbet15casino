import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope', display: 'swap' })
const title = 'Ramenbet — ясный гид: официальный сайт, зеркало и спокойная игра в казино онлайн'
const description = 'Ramenbet и Раменбет: как проверить официальный сайт, разобраться с зеркалом и условиями казино. Понятный гид для игроков: безопасность аккаунта, правила бонусов, лимиты и ответственная игра без спешки'

export const metadata: Metadata = {
  metadataBase: new URL('https://ramenbet15casino.vercel.app'),
  title,
  description,
  applicationName: 'Ramenbet Guide',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: { title, description, url: '/', siteName: 'Ramenbet Guide', type: 'website', locale: 'ru_RU', images: [{ url: '/images/ramen-lounge.webp', width: 900, height: 600, alt: 'Независимый гид по Ramenbet' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ramen-lounge.webp'] },
  category: 'Информационный обзор',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#101827',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`bg-background ${manrope.variable}`}>
      <head></head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

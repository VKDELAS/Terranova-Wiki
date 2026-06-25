import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cinzel, JetBrains_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LanguageProvider } from '@/lib/i18n'
import { EmberField } from '@/components/ember-field'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})
const pressStart = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'TerraNova Wiki — Ancient dragons, lost empires and untamed nature',
  description:
    'The community wiki for TerraNova, a Minecraft Bedrock addon by KyuuDesperation. Creatures, biomes, items, lore and changelog.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-dark-32x32.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon-dark-32x32.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0C0E10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${jetbrainsMono.variable} ${pressStart.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="site-bg" aria-hidden="true">
          <span />
        </div>
        <EmberField />
        <LanguageProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

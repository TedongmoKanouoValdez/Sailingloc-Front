import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import Script from 'next/script';
import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import ClientLayout from '@/components/pages/ClientLayout';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import GlobalLoader from '@/components/GlobalLoader';
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['location bateau', 'voiliers', 'SailingLoc', 'particuliers'],
  alternates: {
    canonical: 'https://dsp-dev-o23-g1.vercel.app',
  },
  openGraph: {
    title: 'SailingLoc',
    description:
      'Naviguez vers de nouveaux horizons avec SailingLoc - la plateforme de location de bateaux entre particuliers.',
    url: 'https://dsp-dev-o23-g1.vercel.app',
    siteName: 'SailingLoc',
    images: [
      {
        url: 'https://dsp-dev-o23-g1.vercel.app/favicon.png',
        width: 1200,
        height: 630,
        alt: 'SailingLoc - Location de bateaux entre particuliers',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SailingLoc - Location de bateaux entre particuliers" />
        <meta
          name="twitter:description"
          content="Naviguez vers de nouveaux horizons avec SailingLoc. Trouvez et louez des bateaux facilement."
        />
        <meta name="twitter:image" content="https://dsp-dev-o23-g1.vercel.app/favicon.png" />
        <meta name="twitter:site" content="@SailingLoc" />
        <meta name="twitter:creator" content="@SailingLoc" />

        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SailingLoc',
              url: 'https://dsp-dev-o23-g1.vercel.app',
            }),
          }}
        />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZR45M71VSG`}
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-ZR45M71VSG');
            `,
          }}
        />
      </head>
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <GlobalLoader>
            <CookieConsentProvider>
              <ClientLayout>
                {children}
                <CookieBanner />
              </ClientLayout>
            </CookieConsentProvider>
          </GlobalLoader>
        </Providers>
      </body>
    </html>
  );
}

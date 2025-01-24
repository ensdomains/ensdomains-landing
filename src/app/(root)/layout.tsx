import '~/styles/global.css'

import { clsx } from 'clsx'
import { inter, ebGaramond, ABCMonumentGrotesk, ABCMonumentGroteskMono, ABCMonumentGroteskSemiMono, ABCMarist } from 'fonts'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Language } from '~/i18n/settings'
import { dir } from 'i18next'
import { useTranslation } from '~/i18n/useTranslation'
import { PageProps } from '~/utils/types'
import { Navbar } from '~/components/Navbar/Navbar'
import { Footer } from '~/components/Footer/Footer'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import ogImage from 'public/og-image.png'

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata({
    title: {
      template: '%s | ENS',
      default: 'ENS',
    },
    description: t('seo.description'),
    path: '/',
  }, undefined, {
    openGraph: {
      images: [
        {
          url: new URL(ogImage.src, BASE_URL).toString(),
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  })
}

export const viewport = {
  themeColor: '#0080bc',
}

export default async function RootLayout({ children, params: { lang = 'en' } }: { children: ReactNode, params: { lang?: Language } }) {
  const { t } = await useTranslation(lang, 'translation')

  const footerItems = [
    {
      title: t('footer.community'),
      entries: [
        { title: t('footer.feedback'), link: 'https://docs.google.com/forms/d/e/1FAIpQLSfDzIszteoaqiayxUCpFLK1AgigoASHIPcsxFg8PZoS6R6Uzw/viewform?usp=sf_link' },
        {
          title: t('footer.discord'),
          link: 'https://chat.ens.domains',
        },
        {
          title: t('footer.twitter'),
          link: 'https://x.com/ensdomains',
        },
        {
          title: t('footer.github'),
          link: 'https://github.com/ensdomains',
        },
        {
          title: t('footer.youtube'),
          link: 'https://youtube.com/ensdomains',
        },
        {
          title: t('footer.forums'),
          link: 'https://discuss.ens.domains',
        },
      ],
    },
    {
      title: t('footer.help'),
      entries: [
        {
          title: t('footer.support'),
          link: 'https://support.ens.domains',
        },
        { title: t('footer.contact'), link: 'mailto:support@ens.domains' },
      ],
    },
    {
      title: t('footer.ens'),
      entries: [
        { title: t('footer.privacy-policy'), link: 'https://app.ens.domains/legal/privacy-policy' },
        { title: t('footer.tou'), link: 'https://app.ens.domains/legal/terms-of-use' },
        {
          title: t('footer.bugs'),
          link: 'https://immunefi.com/bug-bounty/ens/',
        },
        {
          title: t('footer.brand'),
          link: '/brand',
        },
      ],
    },
  ]

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={clsx(
        inter.variable,
        ebGaramond.variable,
        ABCMonumentGrotesk.variable,
        ABCMonumentGroteskMono.variable,
        ABCMonumentGroteskSemiMono.variable,
        ABCMarist.variable,
      )}
    >
      <head>
        <script defer data-domain="ens.domains" src="https://plausible.io/js/script.js"></script>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <main>
          <Navbar
            links={{
              developers: t('nav.developers'),
              ecosystem: t('nav.ecosystem'),
              governance: t('nav.governance'),
              blog: t('nav.blog'),
              roadmap: t('nav.roadmap'),
              launch: t('nav.launch'),
            }}
            lang={lang}
          />
          {children}
          <Footer footerItems={footerItems} copyrightNotice={t('footer.ltd')} />
        </main>
      </body>
    </html>
  )
}

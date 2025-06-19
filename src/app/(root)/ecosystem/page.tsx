import { clsx } from 'clsx'
import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { EcosystemList } from '~/components/features/ecosystem/EcosystemList'
import { Header } from '~/components/layout/Header/Header'
import { ColorCards } from '~/components/ui/cards/ColorCards/ColorCards'
import { LinkList } from '~/components/ui/navigation/LinkList/LinkList'
import { SmallLinkList } from '~/components/ui/navigation/SmallLinkList/SmallLinkList'
import { useTranslation } from '~/i18n/useTranslation'
import ui from '~/styles/ui.module.css'
import type { PageProps } from '~/utils/types'
import styles from './page.module.css'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return {
    title: `${t('ecosystem.hero.tag')} | ENS`,
    description: t('ecosystem.hero.text'),
  }
}

export default async function Ecosystem(props: PageProps) {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return (
    <div
      style={
        {
          '--page-text': 'var(--ens-blue)',
          '--page-bg': 'var(--ens-light-blue)',
          '--page-text-hover': 'var(--ens-hover-blue)',
          '--page-bg-hover': 'var(--ens-hover-light-blue)',
        } as CSSProperties
      }
    >
      <Header
        tag={t('ecosystem.hero.tag')}
        title={t('ecosystem.hero.title')}
        description={t('ecosystem.hero.text')}
        subtitle={t('ecosystem.hero.subtitle')}
        cta={[
          [
            t('ecosystem.hero.cta1'),
            'https://blog.ens.domains/post/beginners-guide-to-ethereum-and-ens',
          ],
          [t('ecosystem.hero.cta2'), 'https://docs.ens.domains'],
        ]}
      >
        <EcosystemList />
      </Header>
      <section className={ui.page}>
        <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
          <h2>{t('ecosystem.integration.title')}</h2>
          <LinkList
            links={[
              {
                title: t('ecosystem.integration.foundation.title'),
                href: '',
                description: t('ecosystem.integration.foundation.description'),
              },
              {
                title: t('ecosystem.integration.trust.title'),
                href: '',
                description: t('ecosystem.integration.trust.description'),
              },
              {
                title: t('ecosystem.integration.resources.title'),
                href: '',
                description: t('ecosystem.integration.resources.description'),
              },
            ]}
          />
        </div>

        <div className={clsx(ui.flex, ui['flex-col'], styles.partnersSection)}>
          <div className={clsx(ui.flex, ui['flex-col'], ui['h3-section'])}>
            <h3>{t('ecosystem.partner.title')}</h3>
            <p className={ui['max-w-text']}>
              {t('ecosystem.partner.description')}
            </p>
          </div>
          <ColorCards
            cards={[
              {
                title: 'Business Development',
                description:
                  'Speak with our Business Development team to chat about a partnership opportunity.',
                color: 'ens-blue',
                link: 'mailto:support@ens.domains',
              },
            ]}
          />
        </div>

        <div>
          <h4 className={styles.h4}>Featured Partners</h4>
          <SmallLinkList
            links={[
              { title: 'Coinbase', href: 'https://www.coinbase.com' },
              { title: 'Base', href: 'https://www.base.org' },
              { title: 'Uniswap', href: 'https://uniswap.org' },
              { title: 'Brave', href: 'https://brave.com' },
              { title: 'GoDaddy', href: 'https://www.godaddy.com' },
              { title: 'Optimism', href: 'https://www.optimism.io' },
              { title: 'Ethereum', href: 'https://ethereum.org' },
              { title: 'Phantom', href: 'https://phantom.app' },
              { title: 'Farcaster', href: 'https://www.farcaster.xyz' },
              { title: 'Etherscan', href: 'https://etherscan.io' },
              { title: 'Metamask', href: 'https://metamask.io' },
              { title: 'Rainbow', href: 'https://rainbow.me' },
              { title: 'Arbitrum', href: 'https://arbitrum.io' },
              { title: '3DNS', href: 'https://3dns.box' },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

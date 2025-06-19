import { clsx } from 'clsx'
import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { HeroContent } from '~/components/features/developers/header/HeroContent'
import { Header } from '~/components/layout/Header/Header'
import { StatsCounter } from '~/components/shared/animations/StatsCounter/StatsCounter'
import { SectionWithPreview } from '~/components/ui/layout/SectionWithPreview/SectionWithPreview'
import { TwoCol } from '~/components/ui/layout/TwoCol/TwoCol'
import { ResponsiveImage } from '~/components/ui/media/ResponsiveImage/ResponsiveImage'
import { LinkList } from '~/components/ui/navigation/LinkList/LinkList'
import { useTranslation } from '~/i18n/useTranslation'
import stats from '~/stats/grants.json'
import ui from '~/styles/ui.module.css'
import type { PageProps } from '~/utils/types'
import styles from './page.module.css'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return {
    title: `${t('developers.hero.tag')} | ENS`,
    description: t('developers.hero.text'),
  }
}

export default async function Developers(props: PageProps) {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return (
    <div
      style={
        {
          '--page-text': 'var(--ens-magenta)',
          '--page-bg': 'var(--ens-light-magenta)',
          '--page-text-hover': 'var(--ens-hover-magenta)',
        } as CSSProperties
      }
    >
      <Header
        tag={t('developers.hero.tag')}
        title={t('developers.hero.title')}
        description={t('developers.hero.text')}
        cta={[
          [t('developers.hero.cta1'), 'https://docs.ens.domains'],
          [t('developers.hero.cta2'), 'https://github.com/ensdomains'],
        ]}
      >
        <HeroContent />
      </Header>

      <section className={clsx(ui.page)}>
        <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
          <h2>{t('developers.resources.title')}</h2>
          <LinkList
            links={[
              {
                title: 'CCIP Read',
                href: 'https://docs.ens.domains/ccip',
                description: t('developers.resources.ccip-read.description'),
              },
              {
                title: 'Unruggable Gateway',
                href: 'https://gateway-docs.unruggable.com',
                description: t(
                  'developers.resources.unruggable-gateway.description',
                ),
              },
              {
                title: 'Thorin',
                href: 'https://thorin.ens.domains',
                description: t('developers.resources.thorin.description'),
              },
              {
                title: t('developers.resources.tg.title'),
                href: 'https://t.me/+z1hIGCrQZ0czYTkx',
                description: t('developers.resources.tg.description'),
              },
            ]}
          />
        </div>
        <div>
          <TwoCol
            cols={[
              {
                tag: t('developers.resources.quickstart.tag'),
                title: t('developers.resources.quickstart.title'),
                description: t('developers.resources.quickstart.description'),
                href: 'https://docs.ens.domains/web/quickstart',
                button: t('developers.resources.quickstart.tag'),
              },
              {
                tag: t('developers.resources.pro.tag'),
                title: t('developers.resources.pro.title'),
                description: t('developers.resources.pro.description'),
                button: t('developers.resources.pro.tag'),
                href: 'https://docs.ens.domains/contracts',
              },
            ]}
          />
        </div>
        <SectionWithPreview
          title={t('developers.extra.grants.title')}
          text={t('developers.extra.grants.text')}
          cta={[
            {
              text: t('developers.extra.grants.cta.view'),
              url: 'https://ensgrants.xyz/rounds',
              buttonVariant: 'primary',
            },
            {
              text: t('developers.extra.grants.cta.apply'),
              url: 'https://ensgrants.xyz',
              buttonVariant: 'secondary',
            },
          ]}
        >
          <StatsCounter
            stats={stats}
            captions={{
              eth: t('developers.extra.grants.stat.eth'),
              proposals: t('developers.extra.grants.stat.proposals'),
              voters: t('developers.extra.grants.stat.voters'),
            }}
          />
        </SectionWithPreview>
        <SectionWithPreview
          title={t('developers.extra.bounty.title')}
          text={t('developers.extra.bounty.text')}
          cta={[
            {
              text: t('developers.extra.bounty.cta.learn'),
              url: 'https://immunefi.com/bug-bounty/ens',
              buttonVariant: 'primary',
            },
          ]}
        >
          <StatsCounter
            stats={{ bounty: 250_000 }}
            captions={{ bounty: '' }}
            className={styles.counter}
          >
            <ResponsiveImage
              className={styles.folders}
              sources={{
                desktop: '/assets/developers/folders.svg',
                tablet: '/assets/developers/folders-tablet.svg',
                mobile: '/assets/developers/folders-mobile.svg',
              }}
              sourceProps={{
                desktop: { width: 418, height: 233 },
                tablet: { width: 281, height: 156 },
                mobile: { width: 316, height: 176 },
              }}
              alt=""
            />
          </StatsCounter>
        </SectionWithPreview>
      </section>
    </div>
  )
}

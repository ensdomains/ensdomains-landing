import { readdir } from 'node:fs/promises'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { ExternalLink } from 'react-external-link'
import { AssetDownloadButton } from '~/components/features/brand/AssetDownloadButton'
import { BrandColor } from '~/components/features/brand/BrandColor'
import { LinkList } from '~/components/ui/navigation/LinkList/LinkList'
import { useTranslation } from '~/i18n/useTranslation'
import ui from '~/styles/ui.module.css'
import type { BrandColorObject, PageProps } from '~/utils/types'
import styles from './page.module.css'

const common = './public/assets/brand'

const primaryPalette: BrandColorObject[] = [
  {
    name: 'ENS Blue',
    hex: '#0080BC',
    RGB: '0, 128, 188',
    textColor: 'white',
    CMYK: '84%, 41%, 5%, 0%',
  },
  {
    name: 'Light Blue',
    hex: '#CEE1E8',
    RGB: '206, 255, 232',
    textColor: 'black',
    CMYK: '18%, 4%, 6%, 0%',
  },
  {
    name: 'Dark Blue',
    hex: '#011A25',
    RGB: '1, 26, 37',
    textColor: 'white',
    CMYK: '88%, 71%, 59%, 72%',
  },
  {
    name: 'White',
    hex: '#f6f6f6',
    RGB: '255, 255, 255',
    textColor: 'black',
    CMYK: '2%, 2%, 2%, 0%',
  },
]

const extendedPalette: BrandColorObject[] = [
  {
    name: 'Green',
    hex: '#007C23',
    RGB: '44, 24, 172',
    CMYK: '88%, 26%, 100%, 15%',
    textColor: 'white',
  },
  {
    name: 'Magenta',
    hex: '#F53293',
    RGB: '218, 94, 204',
    CMYK: '0%, 92%, 1%, 0%',
    textColor: 'white',
  },
  {
    name: 'Yellow',
    hex: '#FFF72F',
    RGB: '240, 223, 19',
    CMYK: '4%, 0%, 87%, 0%',
    textColor: 'black',
  },
  {
    name: 'Dark Brown',
    hex: '#674D49',
    RGB: '103, 77,  73',
    CMYK: '50%, 63%, 61%, 34%',
    textColor: 'white',
  },
  {
    name: 'Light Green',
    hex: '#C5DDCC',
    RGB: '197, 221, 204',
    CMYK: '23%, 3%, 22%, 0%',
    textColor: 'black',
  },
  {
    name: 'Light Magenta',
    hex: '#F2C4DA',
    RGB: '242, 196, 218',
    CMYK: '2%, 27%, 1%, 0%',
    textColor: 'black',
  },
  {
    name: 'Light Yellow',
    hex: '#F8F6D6',
    RGB: '248, 246, 214',
    CMYK: '3%, 1%, 19%, 0%',
    textColor: 'black',
  },
  {
    name: 'Midnight Blue',
    hex: '#093C52',
    RGB: '9, 60, 82',
    CMYK: '89%, 27%, 0%, 68%',
    textColor: 'white',
  },
  {
    name: 'Gray',
    hex: '#4A5C63',
    RGB: '74, 92, 99',
    CMYK: '26%, 7%, 0%, 61%',
    textColor: 'white',
  },
  {
    name: 'Gray 3',
    hex: '#C4C7C8',
    RGB: '196, 199, 200',
    CMYK: '2%, 0%, 0%, 22%',
    textColor: 'black',
  },
  {
    name: 'Gray 2',
    hex: '#E5E5E5',
    RGB: '229, 229, 229',
    CMYK: '9%, 6%, 7%, 0%',
    textColor: 'black',
  },
]

const filesToPaths = (files: string[], dir: string) =>
  files
    .filter((x) => x.endsWith('.svg'))
    .map((x) => `${common.replace('./public', '')}/${dir}/${x}`)
const filenameToVariantName = (file: string) =>
  file.slice(file.lastIndexOf('-') + 1, file.indexOf('.svg')).replace('_', ' ')

const getStaticProps = async () => {
  const logoFiles = filesToPaths(await readdir(`${common}/logo`), 'logo')
  const markLogoFiles = filesToPaths(await readdir(`${common}/mark`), 'mark')

  const logos = Object.fromEntries(
    logoFiles.map((file) => [filenameToVariantName(file), file]),
  )
  const markLogos = Object.fromEntries(
    markLogoFiles.map((file) => [filenameToVariantName(file), file]),
  )

  return { logos, markLogos }
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return {
    title: `${t('brand.header.title')} | ENS`,
    description: t('brand.header.description'),
  }
}

export default async function Brand(props: PageProps) {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  const { markLogos, logos } = await getStaticProps()

  return (
    <div className={clsx(ui.page)}>
      <header className={clsx(ui.flex, ui['flex-col'], styles.headerLayout)}>
        <h1>{t('brand.header.title')}</h1>
        <div className={styles.headerContent}>
          <ul className={styles.linkList}>
            <li>
              <a href="#symbol">{t('brand.links.symbols')}</a>
            </li>
            <li>
              <a href="#palettes">{t('brand.links.palettes')}</a>
            </li>
            <li>
              <a href="#guidelines">{t('brand.links.guidelines')}</a>
            </li>
          </ul>
          <p className={ui['max-w-text']}>{t('brand.header.description')}</p>
        </div>
      </header>
      <section className={clsx(ui.flex, ui['flex-col'], styles.content)}>
        <div
          className={clsx(ui.flex, ui['flex-col'], styles.sectionDescription)}
        >
          <h4>{t('brand.assets.title')}</h4>
          <p className={ui['max-w-text']}>{t('brand.assets.description')}</p>
        </div>
        <div className={styles.assetsDescription}>
          <a
            download
            href="/assets/brand/mark.zip"
            className={styles.downloadButton}
          >
            {t('brand.button')}
          </a>
          <h5 id="symbol" className={styles.contentTitle}>
            {t('brand.assets.symbol.title')}
          </h5>
          <p className={ui['max-w-text']}>
            {t('brand.assets.symbol.description')}
          </p>
        </div>
        <div className={styles.assetGrid}>
          {Object.entries(markLogos).map(([name, url]) => (
            <figure key={url}>
              <img src={url} alt="" height={230} width={201} />
              <AssetDownloadButton
                links={[
                  { title: 'PNG', url: url.replace('svg', 'png') },
                  { title: 'SVG', url },
                ]}
              />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
        <div className={clsx(styles.assetGrid, styles.blueprint)}>
          <div>
            <img
              src="/assets/brand/logo-blueprint.svg"
              alt="Logo Blueprint"
              width={358}
              height={358}
            />
          </div>
          <div>
            <h5 className={styles.contentTitle}>
              {t('brand.assets.space.title')}
            </h5>
            <p className={ui['max-w-text']}>
              {t('brand.assets.space.description')}
            </p>
          </div>
        </div>
        <div className={clsx(styles.assetGrid, styles.blueprint)}>
          <figure>
            <img
              src="/assets/brand/token-icon.svg"
              alt="Logo Blueprint"
              width={358}
              height={358}
            />
            <AssetDownloadButton
              links={[
                { title: 'SVG', url: '/assets/brand/token-icon.svg' },
                { title: 'PNG', url: '/assets/brand/token-icon.png' },
              ]}
            />
          </figure>
          <div>
            <h5 className={styles.contentTitle}>
              {t('brand.assets.token.title')}
            </h5>
            <p className={ui['max-w-text']}>
              {t('brand.assets.token.description')}
            </p>
          </div>
        </div>
        <div
          id="lockup"
          className={clsx(ui.flex, ui['flex-col'], styles.content)}
        >
          <div className={styles.assetsDescription}>
            <a
              download
              href="/assets/brand/mark.zip"
              className={styles.downloadButton}
            >
              {t('brand.button')}
            </a>
            <h5 className={styles.contentTitle}>
              {t('brand.assets.lockup.title')}
            </h5>
            <p className={ui['max-w-text']}>
              {t('brand.assets.lockup.description')}
            </p>
          </div>
          <div className={styles.assetGrid}>
            {Object.entries(logos).map(([name, url]) => (
              <figure key={url}>
                <img src={url} alt="" height={230} width={201} />
                <AssetDownloadButton
                  links={[
                    { title: 'PNG', url: url.replace('svg', 'png') },
                    { title: 'SVG', url },
                  ]}
                />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
          <div className={clsx(styles.assetGrid, styles.blueprint)}>
            <div>
              <img
                src="/assets/brand/logo-text-blueprint.svg"
                alt="Logo with text blueprint"
                width={358}
                height={358}
              />
            </div>
            <div>
              <h5 className={styles.contentTitle}>
                {t('brand.assets.space.title')}
              </h5>
              <p className={ui['max-w-text']}>
                {t('brand.assets.space.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={clsx(ui.flex, ui['flex-col'], styles.content)}
        id="palettes"
      >
        <div
          className={clsx(ui.flex, ui['flex-col'], styles.sectionDescription)}
        >
          <h4>{t('brand.assets.palette.title')}</h4>
          <p className={ui['max-w-text']}>
            {t('brand.assets.palette.description')}
          </p>
        </div>
        <div className={styles.assetsDescription}>
          <h5 className={styles.contentTitle}>
            {t('brand.assets.palette.primary.title')}
          </h5>
          <p className={ui['max-w-text']}>
            {t('brand.assets.palette.primary.description')}
          </p>
        </div>
        <div className={styles.colorGrid}>
          {primaryPalette.map((color) => (
            <BrandColor {...color} key={color.name} />
          ))}
        </div>
        <div className={styles.assetsDescription}>
          <h5 className={styles.contentTitle}>
            {t('brand.assets.palette.secondary.title')}
          </h5>
          <p className={ui['max-w-text']}>
            {t('brand.assets.palette.secondary.description')}
          </p>
        </div>
        <div className={styles.colorGrid}>
          {extendedPalette.map((color) => (
            <BrandColor {...color} key={color.name} />
          ))}
        </div>
      </section>

      <section id="guidelines">
        <LinkList
          links={[
            {
              title: t('brand.assets.guidelines.title'),
              description: (
                <div className={styles.guidelines}>
                  <div>{t('brand.assets.guidelines.description')}</div>
                  <ExternalLink
                    className={ui.button}
                    href="/assets/brand/ENS Brand Guidelines.pdf"
                  >
                    {t('brand.assets.guidelines.button')}
                  </ExternalLink>
                </div>
              ),
            },
            {
              title: t('brand.extra.partnerships.title'),
              description: (
                <>
                  {t('brand.extra.partnerships.description')}
                  <ul>
                    <li>{t('brand.extra.partnerships.list.1')}</li>
                    <li>{t('brand.extra.partnerships.list.2')}</li>
                    <li>{t('brand.extra.partnerships.list.3')}</li>
                  </ul>
                  {t('brand.extra.partnerships.extra')}
                </>
              ),
            },
            {
              title: t('brand.extra.ecosystem.title'),
              description: (
                <>
                  {t('brand.extra.ecosystem.description')}
                  <ul>
                    <li>{t('brand.extra.ecosystem.list.1')}</li>
                    <li>{t('brand.extra.ecosystem.list.2')}</li>
                  </ul>
                  {t('brand.extra.ecosystem.extra')}
                </>
              ),
            },
          ]}
        />
      </section>
    </div>
  )
}

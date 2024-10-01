import { clsx } from 'clsx';
import { readdir } from 'node:fs/promises';
import { useTranslation } from '~/i18n/useTranslation';
import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { BrandColorObject, PageProps } from '~/utils/types';
import { AssetDownloadButton } from '~/components/brand/AssetDownloadButton';
import type { Metadata } from 'next';
import { LinkList } from '~/components/LinkList/LinkList';
import { BrandColor } from '~/components/brand/BrandColor';

const common = './public/assets/brand';

const colors: BrandColorObject[] = [
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
];

const filesToPaths = (files: string[], dir: string) => files.filter(x => x.endsWith('.svg')).map(x => `${common.replace('./public', '')}/${dir}/${x}`);
const filenameToVariantName = (file: string) => file.slice(file.lastIndexOf('-') + 1, file.indexOf('.svg')).replace('_', ' ');

const getStaticProps = async () => {
    const logoFiles = filesToPaths(await readdir(`${common}/logo`), 'logo');
    const markLogoFiles = filesToPaths(await readdir(`${common}/mark`), 'mark');

    const logos = Object.fromEntries(logoFiles.map(file => ([filenameToVariantName(file), file])));
    const markLogos = Object.fromEntries(markLogoFiles.map(file => ([filenameToVariantName(file), file])));

    return { logos, markLogos };
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { t } = await useTranslation(params.lang, 'translation');

    return {
        title: `${t('brand.header.title')} | ENS`,
        description: t('brand.header.description'),
    };
};

export default async function Brand({ params }: PageProps) {
    const { t } = await useTranslation(params.lang, 'translation');

    const { markLogos, logos } = await getStaticProps();

    return (
        <div className={clsx(ui.page)}>
            <header className={clsx(ui.flex, ui['flex-col'], styles.headerLayout)}>
                <h1>{t('brand.header.title')}</h1>
                <div className={styles.headerContent}>
                    <ul className={styles.linkList}>
                        <li><a href="#symbol">{t('brand.assets.symbol.title')}</a></li>
                        <li><a href="#lockup">{t('brand.assets.lockup.title')}</a></li>
                        <li><a href="#guidelines">{t('brand.assets.guidelines.title')}</a></li>
                    </ul>
                    <p className={ui['max-w-text']}>{t('brand.header.description')}</p>

                </div>
            </header>
            <section className={clsx(ui.flex, ui['flex-col'], styles.content)}>
                <div className={clsx(ui.flex, ui['flex-col'], styles.sectionDescription)}>
                    <h4>{t('brand.assets.title')}</h4>
                    <p className={ui['max-w-text']}>{t('brand.assets.description')}</p>
                </div>
                <div className={styles.assetsDescription}>
                    <a download href="/assets/brand/mark.zip" className={styles.downloadButton}>{t('brand.button')}</a>
                    <h5 id="symbol" className={styles.contentTitle}>{t('brand.assets.symbol.title')}</h5>
                    <p className={ui['max-w-text']}>{t('brand.assets.symbol.description')}</p>
                </div>
                <div className={styles.assetGrid}>
                    {Object.entries(markLogos).map(([name, url]) => (
                        <figure key={url}>
                            <img src={url} alt="" height={230} width={201} />
                            <AssetDownloadButton links={[
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
                        <img src="/assets/brand/logo-blueprint.svg" alt="Logo Blueprint" width={358} height={358} />
                    </div>
                    <div>
                        <h5 className={styles.contentTitle}>{t('brand.assets.space.title')}</h5>
                        <p className={ui['max-w-text']}>{t('brand.assets.space.description')}</p>
                    </div>
                </div>
                <div id="lockup" className={clsx(ui.flex, ui['flex-col'], styles.content)}>
                    <div className={styles.assetsDescription}>
                        <a download href="/assets/brand/mark.zip" className={styles.downloadButton}>{t('brand.button')}</a>
                        <h5 className={styles.contentTitle}>{t('brand.assets.lockup.title')}</h5>
                        <p className={ui['max-w-text']}>{t('brand.assets.lockup.description')}</p>
                    </div>
                    <div className={styles.assetGrid}>
                        {Object.entries(logos).map(([name, url]) => (
                            <figure key={url}>
                                <img src={url} alt="" height={230} width={201} />
                                <AssetDownloadButton links={[
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
                            <img src="/assets/brand/logo-text-blueprint.svg" alt="Logo with text blueprint" width={358} height={358} />
                        </div>
                        <div>
                            <h5 className={styles.contentTitle}>{t('brand.assets.space.title')}</h5>
                            <p className={ui['max-w-text']}>{t('brand.assets.space.description')}</p>
                        </div>
                    </div>
                    <div className={clsx(styles.assetGrid, styles.blueprint)}>
                        <figure>
                            <img src="/assets/brand/token-icon.svg" alt="Logo Blueprint" width={358} height={358} />
                            <AssetDownloadButton links={[
                                { title: 'SVG', url: '/assets/brand/token-icon.svg' },
                            ]}
                            />
                        </figure>
                        <div>
                            <h5 className={styles.contentTitle}>{t('brand.assets.token.title')}</h5>
                            <p className={ui['max-w-text']}>{t('brand.assets.token.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={clsx(ui.flex, ui['flex-col'], styles.content)}>
                <div className={clsx(ui.flex, ui['flex-col'], styles.sectionDescription)}>
                    <h4>{t('brand.assets.palette.title')}</h4>
                    <p className={ui['max-w-text']}>{t('brand.assets.palette.description')}</p>
                </div>
                <div className={styles.assetsDescription}>
                    <h5 className={styles.contentTitle}>{t('brand.assets.palette.primary.title')}</h5>
                    <p className={ui['max-w-text']}>{t('brand.assets.palette.primary.description')}</p>
                </div>
                <div className={styles.colorGrid}>
                    {colors.map(color => <BrandColor {...color} key={color.name} />)}
                </div>
            </section>

            <section id="guidelines">
                <LinkList links={[
                    {
                        title: t('brand.assets.guidelines.title'),
                        description: t('brand.assets.guidelines.description'),
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
                            </>),
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
                            </>),
                    },
                ]}
                />
            </section>
        </div>
    );
}

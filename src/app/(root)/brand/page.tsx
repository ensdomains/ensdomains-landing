import { clsx } from 'clsx';
import { readdir } from 'node:fs/promises';
import { useTranslation } from '~/i18n/useTranslation';
import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { PageProps } from '~/utils/types';
import { AssetDownloadButton } from '~/components/brand/AssetDownloadButton';
import type { Metadata } from 'next';
import { LinkList } from '~/components/LinkList/LinkList';

const common = './public/assets/brand';

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
    };
};

export default async function Brand({ params }: PageProps) {
    const { t } = await useTranslation(params.lang, 'translation');

    const { markLogos, logos } = await getStaticProps();

    return (
        <>
            <div className={ui.page}>
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
                </section>
                <section id="lockup" className={clsx(ui.flex, ui['flex-col'], styles.content)}>
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

        </>
    );
}

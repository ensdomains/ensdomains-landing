import { clsx } from 'clsx';
import { readdir } from 'node:fs/promises';
import { useTranslation } from '~/i18n/useTranslation';
import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { PageProps } from '~/utils/types';

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

export default async function Brand({ params }: PageProps) {
    const { t } = await useTranslation(params.lang, 'translation');

    const { markLogos } = await getStaticProps();

    return (
        <>
            <div className={ui.page}>
                <header className={clsx(ui.flex, ui['flex-col'], styles.headerLayout)}>
                    <h1>{t('brand.header.title')}</h1>
                    <div className={styles.headerContent}>
                        <ul className={styles.linkList}>
                            <li>{t('brand.assets.symbol.title')}</li>
                            <li>{t('brand.assets.lockup.title')}</li>
                            <li>{t('brand.assets.guidelines.title')}</li>
                        </ul>
                        <p className={ui['max-w-text']}>{t('brand.header.description')}</p>

                    </div>
                </header>
                <section>
                    <div className={clsx(ui.flex, ui['flex-col'], styles.content)}>
                        <div className={clsx(ui.flex, ui['flex-col'], styles.sectionDescription)}>
                            <h4>{t('brand.assets.title')}</h4>
                            <p className={ui['max-w-text']}>{t('brand.assets.description')}</p>
                        </div>
                        <div className={styles.assetsDescription}>
                            <button className={styles.downloadButton}>{t('brand.button')}</button>
                            <h5 className={styles.contentTitle}>{t('brand.assets.symbol.title')}</h5>
                            <p className={ui['max-w-text']}>{t('brand.assets.symbol.description')}</p>
                        </div>
                        <div className={styles.assetGrid}>
                            {Object.entries(markLogos).map(([name, logo]) => (
                                <figure key={logo}>
                                    <img src={logo} alt="" height={230} width={201} />
                                    <a download href={logo}>Download</a>
                                    <figcaption>{name}</figcaption>
                                </figure>
                            ))}
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

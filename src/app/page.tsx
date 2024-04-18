import clsx from 'clsx';

import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../i18n/useTranslation';
import ui from '../styles/ui.module.css';
import styles from './page.module.css';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <main>
            <header
                className={clsx(
                    ui['flex'],
                    ui['flex-center'],
                    ui['flex-col'],
                    styles.header
                )}
            >
                <h1 className={styles.h1}>{t('home.hero.title')}</h1>
                <p className={styles.p}>{t('home.hero.text')}</p>
            </header>
            <LanguageSwitcher />
        </main>
    );
}

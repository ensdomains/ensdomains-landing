'use client';

import Link from 'next/link';

import { languageNames, languages } from '../../i18n/settings';
import { useCurrentLanguage } from '../../i18n/useTranslation';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
    const lang = useCurrentLanguage();

    return (
        <details className={styles.details}>
            <summary className={styles.summary}>{lang}</summary>
            <ul className={styles.dropdown}>
                {languages.map((lang) => (
                    <li>
                        <Link
                            key={lang}
                            href={`/${lang}`}
                            className={styles.language}
                        >
                            {languageNames[lang]} ({lang.toUpperCase()})
                        </Link>
                    </li>
                ))}
            </ul>
        </details>
    );
};

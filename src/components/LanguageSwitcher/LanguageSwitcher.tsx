'use client';

import Link from 'next/link';
import { FC } from 'react';

import { Language, languageNames, languages } from '../../i18n/settings';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher: FC<{ lang: Language }> = ({ lang }) => {
    return (
        <details className={styles.details}>
            <summary className={styles.summary}>
                <span className={styles.currentLanguage}>{lang}</span>
            </summary>
            <ul className={styles.dropdown}>
                {languages.map((language) => (
                    <li>
                        <Link
                            key={language}
                            href={language === 'en' ? '/' : `/${language}`}
                            className={styles.language}
                        >
                            {languageNames[language]} ({language.toUpperCase()})
                        </Link>
                    </li>
                ))}
            </ul>
        </details>
    );
};

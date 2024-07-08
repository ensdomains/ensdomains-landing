'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { getLangPrefix } from '~/i18n/langPrefix';
import { Language, languageNames, languages } from '~/i18n/settings';

import styles from './LanguageSwitcher.module.css';
import { clsx } from 'clsx';

export const LanguageSwitcher: FC<{ lang: Language }> = ({ lang }) => {
    const path = usePathname();

    return (
        <details className={styles.details}>
            <summary className={styles.summary}>
                <span className={styles.currentLanguage}>
                    <span className={styles.currentLanguageName}>{languageNames[lang]}</span>
                    <span className={styles.currentLanguageShort}>{lang}</span>
                </span>
            </summary>
            <ul className={styles.dropdown}>
                {languages.map((language) => {
                    const languagePrefix = getLangPrefix(language);
                    const oldLanguagePrefix = getLangPrefix(lang);
                    const url
                        = path.replace(oldLanguagePrefix, languagePrefix) || '/';

                    return (
                        <li key={language}>
                            <Link
                                key={language}
                                href={url}
                                className={styles.language}
                            >
                                {languageNames[language]}
                                {' '}
                                (
                                {language.toUpperCase()}
                                )
                                <div className={clsx(styles.indicator, language === lang && styles.currentIndicator)} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </details>
    );
};

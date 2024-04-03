import Link from 'next/link';

import { languages } from '../../settings';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
    return (
        <div>
            {languages.map((lang) => (
                <Link key={lang} href={`/${lang}`} className={styles.language}>
                    {lang}
                </Link>
            ))}
        </div>
    );
};

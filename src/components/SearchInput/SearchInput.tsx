import { clsx } from 'clsx';
import { TFunction } from 'i18next';

import ui from '~/styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchInput = ({ t }: { t: TFunction<string, string> }) => {
    const router = useRouter();

    const [initial, setInitial] = useState(true);

    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                ui['flex-center'],
                styles.container,
            )}
        >
            <span className={styles.caption}>
                {t('home.hero.inputCaption')}
            </span>
            <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
            <div
                className={clsx(
                    ui.flex,
                    ui['flex-col'],
                    styles.searchboxContainer,
                )}
            >
                <div className={styles.inputContainer}>
                    <input
                        defaultValue=".eth"
                        onFocus={(e) => {
                            if (initial) e.currentTarget.setSelectionRange(0, 0);
                            setInitial(false);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                router.push(`https://ens.app/${e.currentTarget.value}`);
                            }
                        }}
                        className={styles.input}
                        placeholder="name"
                    />
                    <SearchIcon className={styles.icon} />
                </div>
                <span className={styles.status}>Name is available.</span>
            </div>
        </div>
    );
};

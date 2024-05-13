import clsx from 'clsx';
import { TFunction } from 'i18next';

import ui from '../../styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';

export const SearchInput = ({ t }: { t: TFunction<string, string> }) => {
    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                ui['flex-center'],
                styles.container,
                ui['w-page'],
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
                    <input className={styles.input} placeholder="name" />
                    <SearchIcon className={styles.icon} />
                </div>
                <span className={styles.status}>Name is available.</span>
            </div>
        </div>
    );
};

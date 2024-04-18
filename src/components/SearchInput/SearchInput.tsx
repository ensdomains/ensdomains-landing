import clsx from 'clsx';

import ui from '../../styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';

export const SearchInput = () => {
    return (
        <div className={clsx(ui.flex, ui['flex-col'], styles.container)}>
            <div className={styles.inputContainer}>
                <input className={styles.input} placeholder="name" />
                <SearchIcon className={styles.icon} />
            </div>
            <span className={styles.status}>Name is available.</span>
        </div>
    );
};

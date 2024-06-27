'use client';

import { clsx } from 'clsx';

import ui from '~/styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';
import { useRouter } from 'next/navigation';

export const SearchInput = ({ caption, placeholder }: { caption: string; placeholder: string }) => {
    const router = useRouter();

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
                {caption}
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

                        onSubmit={(e) => {
                            // if (e.key === 'Enter') {
                            router.push(`https://ens.app/${e.currentTarget.value}`);
                            // }
                        }}
                        className={styles.input}
                        placeholder={placeholder}
                    />
                    <SearchIcon className={styles.icon} />
                </div>
            </div>
        </div>
    );
};

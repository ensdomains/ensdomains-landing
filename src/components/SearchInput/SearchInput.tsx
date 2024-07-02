'use client';

import { clsx } from 'clsx';

import ui from '~/styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';
import { CSSProperties, useState } from 'react';

export const SearchInput = ({ caption, placeholder }: { caption: string; placeholder: string }) => {
    const [value, setValue] = useState('');

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
                <form
                    method="GET"
                    onSubmit={(e) => {
                        e.preventDefault();

                        if (e.currentTarget.reportValidity()) {
                            const fd = new FormData(e.currentTarget);

                            location.assign(`https://ens.app/${fd.get('ens')}.eth`);
                        }
                    }}
                    className={styles.inputContainer}
                >
                    <input
                        onChange={e => setValue(e.currentTarget.value)}
                        name="ens"
                        className={styles.input}
                        placeholder={placeholder}
                        required
                        minLength={3}
                    />
                    <span style={{ '--left': `${value.length}ch`, 'display': value === '' ? 'none' : 'block' } as CSSProperties} className={styles.inputSuffix}>.eth</span>
                    <button type="submit" className={styles.icon}>
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

'use client';

import { clsx } from 'clsx';

import ui from '~/styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';
import { CSSProperties, useEffect, useState } from 'react';
import { useDebounce } from '~/utils/useDebounce';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
});

export const SearchInput = ({ caption, placeholder }: { caption: string; placeholder: string }) => {
    const [value, setValue] = useState('');
    const [isEnsAvailable, setEnsAvailable] = useState(false);

    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedValue) {
            publicClient.getEnsAddress({ name: `${debouncedValue}.eth` }).then((address) => {
                setEnsAvailable(address === null);
            });
        }
    }, [debouncedValue]);

    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                ui['flex-center'],
                styles.container,
            )}
        >
            <div className={styles.captionContainer}>
                <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
                <span className={styles.caption}>
                    {caption}
                </span>
                <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
            </div>
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
                    className={clsx(styles.inputContainer, 'plausible-event-name=search')}
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
                    {isEnsAvailable
                        ? <span>available</span>
                        : (
                                <button type="submit" className={styles.icon}>
                                    <SearchIcon />
                                </button>
                            )}
                </form>
            </div>
        </div>
    );
};

'use client';

import { clsx } from 'clsx';

import ui from '~/styles/ui.module.css';
import { SearchIcon } from '../icons';
import styles from './SearchInput.module.css';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/utils/useDebounce';
import { http } from 'viem';
import { mainnet } from 'viem/chains';
import { createEnsPublicClient } from '@ensdomains/ensjs';

const publicClient = createEnsPublicClient({
    chain: mainnet,
    transport: http(),
});

export const SearchInput = ({ caption, placeholder }: { caption: string; placeholder: string }) => {
    const [value, setValue] = useState('');
    const [isEnsAvailable, setEnsAvailable] = useState(false);
    const [isBoxAvailable, setBoxAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedValue.length > 2) {
            setIsLoading(true);

            publicClient.getAvailable({ name: `${debouncedValue}.eth` }).then((available) => {
                setEnsAvailable(available);

                fetch(`https://dotbox-worker.ens-cf.workers.dev/search?domain=${debouncedValue}.box`)
                    .then(res => res.json())
                    .then((json) => {
                        setBoxAvailable(json.data.available);
                        setIsLoading(false);
                    }).catch((err) => {
                        console.error(err);
                        setIsLoading(false);
                    });
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
                        value={value}
                        className={styles.input}
                        placeholder={placeholder}
                        required
                        minLength={3}
                    />
                    {isLoading
                        ? (
                                <button type="button" disabled className={clsx(styles.icon, styles.spinner)}>
                                    <img src="/assets/spinner.svg" alt="" />
                                </button>
                            )
                        : (
                                value === ''
                                    ? (
                                            <button type="submit" className={styles.icon}>
                                                <SearchIcon />
                                            </button>
                                        )
                                    : (
                                            <div className={styles.tlds}>
                                                <a href={`https://app.ens.domains/name/${value}.eth`}>
                                                    <span>.eth</span>
                                                    <span>{isEnsAvailable ? 'Register' : 'View'}</span>
                                                </a>
                                                <a>
                                                    <span>.box</span>
                                                    <span>{isBoxAvailable ? 'Register' : 'View'}</span>
                                                </a>
                                            </div>
                                        )
                            )}
                </form>
            </div>
        </div>
    );
};

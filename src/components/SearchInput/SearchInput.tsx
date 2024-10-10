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

export const SearchInput = ({
    caption, placeholder,
    viewText,
    registerText,
    invalidText,
}: {
    caption: string;
    placeholder: string;
    viewText: string;
    invalidText: string;
    registerText: string;
}) => {
    const [value, setValue] = useState('');
    const [isEnsAvailable, setEnsAvailable] = useState(false);
    const [isBoxAvailable, setBoxAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);

    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedValue.length > 1) {
            setIsInvalid(false);
            setIsLoading(true);

            if (debouncedValue.includes('#')) { // special case - URL hash
                setIsInvalid(true);
                setIsLoading(false);
            }
            else {
                fetch(`https://dotbox-worker.ens-cf.workers.dev/search?domain=${debouncedValue}.box`)
                    .then(res => res.json())
                    .then((json) => {
                        if (json.data.status === 'INVALID_DOMAIN') {
                            setIsLoading(false);
                            setIsInvalid(true);
                        }
                        else {
                            setBoxAvailable(json.data.available);
                            publicClient.getAvailable({ name: `${debouncedValue}.eth` }).then((available) => {
                                setEnsAvailable(available);
                                setIsLoading(false);
                            }).catch((err) => {
                                console.error(err);
                                setIsInvalid(true);
                            });
                        }
                    }).catch((err) => {
                        console.error(err);
                        setIsInvalid(true);
                        setIsLoading(false);
                    });
            }
        }
        else {
            setIsInvalid(true);
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
                        className={clsx(styles.input, isInvalid && styles['input-invalid'])}
                        placeholder={placeholder}
                        required
                        minLength={2}
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
                                                {isInvalid
                                                    ? <span className={styles.invalid}>{invalidText}</span>
                                                    : (
                                                            <>
                                                                {debouncedValue.length > 2
                                                                    ? (
                                                                            <a href={`https://app.ens.domains/name/${debouncedValue}.eth`}>
                                                                                <span>.eth</span>
                                                                                <span>{isEnsAvailable ? registerText : viewText}</span>
                                                                            </a>
                                                                        )
                                                                    : null}
                                                                <a href={`https://app.ens.domains/name/${debouncedValue}.box`}>
                                                                    <span>.box</span>
                                                                    <span>{isBoxAvailable ? registerText : viewText}</span>
                                                                </a>
                                                            </>
                                                        )}
                                            </div>
                                        )
                            )}
                </form>
            </div>
        </div>
    );
};

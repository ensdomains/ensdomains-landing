'use client';

import { clsx } from 'clsx';
import { TFunction } from 'i18next';

import { ArrowDownIcon, SwapIcon } from '~/components/icons';
import ui from '~/styles/ui.module.css';
import { useIntersectionObserver } from '~/utils/useIntersectionObserver';

import styles from './DappsAnimation.module.css';

export const DappsAnimation = ({ t }: { t: TFunction }) => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 1,
    });

    return (
        <div
            ref={ref}
            className={clsx(
                styles.grid,
                ui.flex,
                ui['flex-row'],
                ui['flex-center']
            )}
        >
            <div
                className={clsx(
                    styles.fnd,
                    ui.flex,
                    ui['flex-col'],
                    ui['flex-center'],
                    isIntersecting && styles.animating
                )}
            >
                <div className={styles.fndBg}></div>
                <div className={clsx(styles.pfp, styles.fndPfp)}></div>
                <div className={clsx(styles.name, styles.fndName)}>
                    placeholder.eth
                </div>
                <div className={styles.fndLine}></div>
                <div
                    className={clsx(ui.flex, ui['flex-row'], styles.fndGallery)}
                >
                    <img
                        className={styles.img}
                        src="/assets/fnd-1.png"
                        alt=""
                    />
                    <img
                        className={styles.img}
                        src="/assets/fnd-2.png"
                        alt=""
                    />
                    <img
                        className={styles.img}
                        src="/assets/fnd-3.png"
                        alt=""
                    />
                </div>
            </div>
            <div
                className={clsx(
                    ui.flex,
                    ui['flex-col'],
                    ui['flex-center'],
                    styles.swap,
                    isIntersecting && styles.animating
                )}
            >
                <div
                    className={clsx(ui.flex, ui['flex-row'], styles.swapHeader)}
                >
                    <span className={styles.swapTitle}>Swap</span>
                    <div
                        className={clsx(
                            ui.flex,
                            ui['flex-row'],
                            ui['flex-center'],
                            styles.name,
                            styles.swapName
                        )}
                    >
                        <div
                            className={clsx(styles.pfp, styles.swapNamePfp)}
                        ></div>
                        <div>placeholder.eth</div>
                    </div>
                </div>
                <div
                    className={clsx(
                        ui.flex,
                        ui['flex-center'],
                        ui['flex-col'],
                        styles.swapContainer
                    )}
                >
                    <span className={styles.swapValue}>3,333.50</span>
                    <div
                        className={clsx(
                            ui.flex,
                            ui['flex-row'],
                            styles.swapCurrencyToggle
                        )}
                    >
                        <div className={styles.swapIndicator}></div>
                        <span className={styles.swapCurrency}>USDC</span>
                        <ArrowDownIcon />
                    </div>
                </div>

                <div
                    className={clsx(
                        ui.flex,
                        ui['flex-col'],
                        styles.swapContainer,
                        styles.swapResult
                    )}
                >
                    <SwapIcon className={styles.swapIcon} />
                    <span className={styles.swapValue}>1.000</span>
                    <div
                        className={clsx(
                            ui.flex,
                            ui['flex-row'],
                            styles.swapCurrencyResultToggle
                        )}
                    >
                        <div className={styles.swapIndicator}></div>
                        <span className={styles.swapCurrency}>ETH</span>
                        <ArrowDownIcon />
                    </div>
                    <button className={styles.swapButton}>
                        {t('home.features.consistent.swapButton')}
                    </button>
                </div>
            </div>
            <img
                src="/assets/farcaster.svg"
                alt=""
                height={341}
                className={clsx(
                    styles.farcaster,
                    isIntersecting && styles.animating
                )}
            />
        </div>
    );
};

'use client';

import { clsx } from 'clsx';
import { TFunction } from 'i18next';

import {
    ArrowDownIcon,
    FarcastCommentIcon,
    FarcastLikeIcon,
    FarcastRecastIcon,
    SwapIcon,
} from '~/components/icons';
import ui from '~/styles/ui.module.css';
import { useIntersectionObserver } from '~/utils/useIntersectionObserver';

import { CrossFadeImage } from '../CrossFadeImage/CrossFadeImage';
import styles from './DappsAnimation.module.css';

const sources: { src: string; alt: string }[] = [
    'domico.eth',
    'luc.eth',
    'nick.eth',
].map((name) => ({ alt: name, src: `/assets/${name}.png` }));

const FarcasterPost = () => (
    <div className={clsx(ui.flex, ui['flex-col'], styles.farcasterPost)}>
        <div
            className={clsx(
                ui.flex,
                ui['flex-row'],
                styles.farcasterPostAuthor
            )}
        >
            <span>katiewav</span>
            <span className={styles.farcasterPostAuthorHandle}>@katiewav</span>
        </div>
        <div className={styles.farcasterPostContent}>
            How can we create a better ecosystem for Ethereum Name Service?
        </div>
        <div
            className={clsx(
                ui.flex,
                ui['flex-row'],
                styles.farcasterPostButtons
            )}
        >
            <button>
                <FarcastCommentIcon
                    className={styles.farcasterPostButtonsIcon}
                />{' '}
                12
            </button>
            <button>
                <FarcastRecastIcon
                    className={styles.farcasterPostButtonsIcon}
                />{' '}
                44
            </button>
            <button>
                <FarcastLikeIcon className={styles.farcasterPostButtonsIcon} />{' '}
                193
            </button>
        </div>
    </div>
);

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
                <CrossFadeImage
                    duration={1500}
                    className={clsx(styles.pfp, styles.fndPfp)}
                    {...{ sources }}
                >
                    {({ alt }) => (
                        <div className={clsx(styles.name, styles.fndName)}>
                            {alt}
                        </div>
                    )}
                </CrossFadeImage>

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
                            styles.name,
                            styles.swapName
                        )}
                    >
                        <CrossFadeImage
                            duration={1500}
                            className={clsx(styles.pfp, styles.swapNamePfp)}
                            {...{ sources }}
                        >
                            {({ alt }) => <div>{alt}</div>}
                        </CrossFadeImage>
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
                        <ArrowDownIcon className={styles.swapCurrencyIcon} />
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
                        <ArrowDownIcon className={styles.swapCurrencyIcon} />
                    </div>
                    <button className={styles.swapButton}>
                        {t('home.features.consistent.swapButton')}
                    </button>
                </div>
            </div>
            <div
                className={clsx(
                    styles.farcaster,
                    isIntersecting && styles.animating
                )}
            >
                <div className={clsx(styles.farcasterTitle)}>
                    <CrossFadeImage
                        duration={1500}
                        className={styles.farcasterPfp}
                        {...{ sources }}
                    />
                    <div className={styles.farcasterTitleText}>
                        {t('home.features.farcaster.title')}
                    </div>
                </div>
                <div
                    className={clsx(
                        ui.flex,
                        ui['flex-row'],
                        styles.farcasterStories
                    )}
                >
                    <img
                        src="/assets/stories-1.png"
                        alt=""
                        height={32}
                        width={32}
                    />
                    <img
                        src="/assets/stories-2.png"
                        alt=""
                        height={32}
                        width={32}
                    />
                    <img
                        src="/assets/stories-3.png"
                        alt=""
                        height={32}
                        width={32}
                    />
                    <img
                        src="/assets/stories-4.png"
                        alt=""
                        height={32}
                        width={32}
                    />
                </div>
                <div className={clsx(ui.flex, ui['flex-col'])}>
                    <FarcasterPost />
                    <FarcasterPost />
                    <FarcasterPost />
                </div>
                <div
                    className={clsx(
                        ui.flex,
                        ui['flex-row'],
                        styles.farcasterMenu
                    )}
                >
                    <button>
                        <img
                            src="/assets/home.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </button>
                    <button>
                        <img
                            src="/assets/search.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </button>
                    <button>
                        <img
                            src="/assets/plus.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </button>
                    <button>
                        <img
                            src="/assets/bell.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </button>
                    <button>
                        <img
                            src="/assets/group.svg"
                            height={16}
                            width={16}
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

'use client';

import { clsx } from 'clsx';

import { ArrowUpRightIcon } from '~/components/icons';
import ui from '~/styles/ui.module.css';
import { useIntersectionObserver } from '~/utils/useIntersectionObserver';

import styles from './OwnershipAnimation.module.css';

export const OwnershipAnimation = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.75,
    });

    return (
        <div
            ref={ref}
            className={clsx(ui.flex, ui['flex-row'], styles.container)}
        >
            <div className={clsx(ui.flex, ui['flex-col'], styles.name)}>
                <div className={styles.nameText}>steph-kang.eth</div>
                <span className={styles.wallet}>Hot Wallet</span>
            </div>
            <div className={clsx(ui.flex, ui['flex-col'])}>
                <ArrowUpRightIcon
                    className={clsx(
                        styles.upArrow,
                        isIntersecting && styles.animating
                    )}
                />
                <ArrowUpRightIcon
                    className={clsx(
                        styles.downArrow,
                        isIntersecting && styles.animating
                    )}
                />
            </div>
            <div className={clsx(ui.flex, ui['flex-col'], styles.name)}>
                <div className={styles.nameText}>steph-kang.eth</div>
                <span className={styles.wallet}>Cold Wallet</span>
            </div>
        </div>
    );
};

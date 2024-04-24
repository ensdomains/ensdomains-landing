import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import ui from '../../styles/ui.module.css';
import { useEventListener } from '../../utils/useEventListener';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import styles from './DappsAnimation.module.css';

export const DappsAnimation = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 1,
    });

    const fndProfile = useRef<HTMLDivElement>();
    const [isAnimating, setIsAnimating] = useState(true);

    useEventListener(
        'transitionend',
        () => {
            if (isIntersecting) {
                setTimeout(() => {
                    setIsAnimating(false);
                }, 1000);
            }
        },
        fndProfile
    );

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
                    ui['flex-center']
                )}
            >
                <div className={styles.fndBg}></div>
                <div className={styles.fndPfp}></div>
                <div
                    className={clsx(
                        styles.fndName,
                        isIntersecting && isAnimating && styles.animating
                    )}
                >
                    placeholder.eth
                </div>
                <div className={styles.fndLine}></div>
                <div
                    className={clsx(ui.flex, ui['flex-row'], styles.fndGallery)}
                >
                    <img
                        src="/assets/fnd-1.png"
                        width={170}
                        height={74}
                        alt=""
                    />
                    <img
                        src="/assets/fnd-2.png"
                        width={170}
                        height={74}
                        alt=""
                    />
                    <img
                        src="/assets/fnd-3.png"
                        width={170}
                        height={74}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.swap}>
                <div className={styles.header}>
                    <span>Swap</span>
                    <div>
                        <div></div>
                        <div>placeholder.eth</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import clsx from 'clsx';

import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import styles from './MessageAnimation.module.css';

export const MessageAnimation = () => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.75,
    });

    return (
        <div className={styles.container} ref={ref}>
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src="/assets/msg-1.svg"
                width={537}
                height={116}
                alt="What's your crypto address so I can pay you?"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src="/assets/msg-2.svg"
                width={537}
                height={116}
                alt="What's your crypto address so I can pay you?"
            />
        </div>
    );
};

import clsx from 'clsx';

import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import { Dimension } from '../../utils/useMq';
import styles from './MessageAnimation.module.css';

export const MessageAnimation = ({ mq }: { mq: Dimension }) => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.75,
    });

    const isTablet = mq === 'tablet';

    return (
        <div className={styles.container} ref={ref}>
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/${isTablet ? 'tablet/' : ''}msg-1.svg`}
                width={537}
                height={116}
                alt="What's your crypto address so I can pay you?"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/${isTablet ? 'tablet/' : ''}msg-2.svg`}
                width={633}
                height={89}
                alt="0x0b08dA7068b73A579Bd5E8a8290ff8afd37bc32A"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/${isTablet ? 'tablet/' : ''}msg-3.svg`}
                width={306}
                height={88}
                alt="Wow. Go to ens.app"
            />
            <img
                className={clsx(
                    styles.box,
                    isIntersecting ? styles.animating : undefined
                )}
                src={`/assets/${isTablet ? 'tablet/' : ''}msg-4.svg`}
                width={436}
                height={116}
                alt="This is so much simpler! Send to mynewname.eth"
            />
        </div>
    );
};

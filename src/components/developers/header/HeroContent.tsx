import { AnimatedSquare } from '~/components/AnimatedSquare/AnimatedSquare';
import styles from './HeroContent.module.css';

export const HeroContent = () => {
    return (
        <>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img
                        src="/assets/developers/magenta-element.svg"
                        height={390}
                        width={284}
                        alt=""
                    />
                    <AnimatedSquare
                        data-name="right-top"
                        className={styles['animated-square']}
                    />
                    <AnimatedSquare
                        data-name="right-bottom"
                        className={styles['animated-square']}
                    />
                </div>
            </div>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img
                        src="/assets/developers/left.svg"
                        height={390}
                        width={284}
                        alt=""
                    />
                    <AnimatedSquare
                        data-name="left-top"
                        className={styles['animated-square']}
                    />
                    <AnimatedSquare
                        data-name="left-bottom"
                        className={styles['animated-square']}
                    />
                </div>
            </div>
        </>
    );
};

import { AnimatedSquare } from '~/components/AnimatedSquare/AnimatedSquare';
import styles from './HeroContent.module.css';

export const HeroContent = () => {
    return (
        <>
            <div className={styles['position-container']}>
                <img src="/assets/developers/dark-magenta-element.svg" height={400} width={400} alt="" />

            </div>
            <div className={styles['position-container']}>
                <img src="/assets/developers/magenta-element.svg" height={390} width={284} alt="" />
            </div>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img src="/assets/developers/left.svg" height={390} width={284} alt="" />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
        </>

    );
};

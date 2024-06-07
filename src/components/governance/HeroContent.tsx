import { AnimatedSquare } from '~/components/AnimatedSquare/AnimatedSquare';
import styles from './HeroContent.module.css';

export const HeroContent = () => {
    return (
        <>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img src="/assets/governance/left-desktop.svg" height={922} width={354} alt="" />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img src="/assets/governance/right-desktop.svg" height={673} width={354} alt="" />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
        </>

    );
};

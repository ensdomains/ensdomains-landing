import { AnimatedSquare } from '~/components/AnimatedSquare/AnimatedSquare';
import styles from './HeroContent.module.css';
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

export const HeroContent = () => {
    return (
        <>
            <div className={styles['position-container']} data-name="turn-left">
                <div className={styles['animation-container']}>
                    <ResponsiveImage
                        sources={{
                            desktop: '/assets/governance/diagonal-left.svg',
                            mobile: '/assets/governance/diagonal-left-tablet.svg',
                        }}
                        sourceProps={{
                            desktop: { height: 200, width: 200 },
                            mobile: { height: 135, width: 135 },
                        }}
                    />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>

            </div>
            <div className={styles['position-container']} data-name="turn-right">
                <div className={styles['animation-container']}>
                    <ResponsiveImage
                        sources={{
                            desktop: '/assets/governance/diagonal-right.svg',
                            mobile: '/assets/governance/diagonal-right-tablet.svg',
                        }}
                        sourceProps={{
                            desktop: { height: 200, width: 200 },
                            mobile: { height: 135, width: 135 },
                        }}
                    />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
            <div className={styles['position-container']} data-name="light-diag-top">
                <div className={styles['animation-container']}>
                    <img
                        src="/assets/governance/light-diagonal.svg"
                        height={400}
                        width={400}
                        alt=""
                    />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
            <div className={styles['position-container']} data-name="light-diag-bottom">
                <div className={styles['animation-container']}>
                    <img
                        src="/assets/governance/light-diagonal.svg"
                        height={400}
                        width={400}
                        alt=""
                    />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
        </>

    );
};

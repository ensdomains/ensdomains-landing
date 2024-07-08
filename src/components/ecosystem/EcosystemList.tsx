import { clsx } from 'clsx';
import ui from '~/styles/ui.module.css';
import styles from './EcosystemList.module.css';
import { AnimatedSquare } from '../AnimatedSquare/AnimatedSquare';

export const EcosystemList = () => {
    return (
        <>
            <div className={clsx(ui.flex, ui['flex-row'], styles.container)}>
                <div>
                    <img src="/assets/logos/coinbase.svg" height={60} width={60} alt="Coinbase" />
                </div>
                <div>
                    <img src="/assets/logos/godaddy.svg" height={33} width={29} alt="GoDaddy" />
                </div>
                <div>
                    <img src="/assets/logos/brave.svg" height={29} width={24} alt="Brave" />
                </div>
                <div>
                    <img src="/assets/logos/farcaster.svg" height={60} width={60} alt="Farcaster" />
                </div>
            </div>
            <div className={styles['position-container']}>
                <div className={styles['animation-container']}>
                    <img src="/assets/ecosystem/left.svg" height={600} width={200} alt="" />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
                <div className={styles['animation-container']}>
                    <img src="/assets/ecosystem/right.svg" height={600} width={200} alt="" />
                    <AnimatedSquare className={styles['animated-square']} />
                </div>
            </div>
        </>
    );
};

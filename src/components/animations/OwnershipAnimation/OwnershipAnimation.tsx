import { clsx } from 'clsx';

import ui from '~/styles/ui.module.css';

import styles from './OwnershipAnimation.module.css';

export const OwnershipAnimation = () => {
    return (
        <div className={clsx(ui.flex, ui['flex-row'], styles.container)}>
            <div className={styles.name}>
                <div className={styles.nameText}>steph-kang.eth</div>
                <span className={styles.wallet}>Hot Wallet</span>
            </div>
            <div>
                <div></div>
            </div>
            <div className={styles.name}>
                <div className={styles.nameText}>steph-kang.eth</div>
                <span className={styles.wallet}>Cold Wallet</span>
            </div>
        </div>
    );
};

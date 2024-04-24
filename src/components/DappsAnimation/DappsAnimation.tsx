import { clsx } from 'clsx';

import ui from '../../styles/ui.module.css';
import styles from './DappsAnimation.module.css';

export const DappsAnimation = () => {
    return (
        <div
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
                <div className={styles.fndName}>placeholder.eth</div>
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
        </div>
    );
};

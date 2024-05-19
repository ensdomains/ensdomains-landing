'use client';

import { clsx } from 'clsx';
import { TFunction } from 'i18next';
import CountUp from 'react-countup';
import ui from '~/styles/ui.module.css';
import styles from './StatsCounter.module.css';
import { useMq } from '~/utils/useMq';
import stats from '~/stats.json';

export const StatsCounter = ({ t }: { t: TFunction }) => {
    const mq = useMq();

    const imgSrc = `/assets/home/stat-bg-${mq}.svg`;

    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                styles.container,
            )}
        >
            <img className={styles.bg} src={imgSrc} alt="" />
            {Object.entries(stats).map(([key, count], i) => (
                <div key={key} className={styles.stat}>
                    <CountUp
                        start={count / 2}
                        end={count}
                        enableScrollSpy
                        className={styles.value}
                        scrollSpyDelay={250 * i}
                        formattingFn={n => n.toLocaleString()}
                    />
                    {' '}
                    {t(key)}
                </div>
            ))}
        </div>
    );
};

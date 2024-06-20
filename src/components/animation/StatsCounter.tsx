'use client';

import CountUp from 'react-countup';
import stats from '~/stats/grants.json';

import ui from '~/styles/ui.module.css';
import styles from './StatsCounter.module.css';
import { clsx } from 'clsx';

export const StatsCounter = ({ captions }: { captions: Record<string, string> }) => {
    return (
        <div className={clsx(ui.flex, ui['flex-center'], styles.container)}>
            <div className={styles.bg}>
                <div className={ui['dots-bg']} />
            </div>
            <div>
                {Object.entries(stats).map(([key, count], i) => (
                    <div key={key} className={styles.stat}>
                        <CountUp
                            start={count * 0.8}
                            end={count}
                            enableScrollSpy
                            className={styles.value}
                            scrollSpyDelay={100 * i}
                            formattingFn={n => n.toLocaleString()}
                        />
                        {' '}
                        {captions[key]}
                    </div>
                ))}
            </div>
        </div>
    );
};

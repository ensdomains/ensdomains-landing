'use client';

import { clsx } from 'clsx';
import { TFunction } from 'i18next';
import CountUp from 'react-countup';
import ui from '~/styles/ui.module.css';
import styles from './StatsCounter.module.css';
import stats from '~/stats.json';
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage';

export const StatsCounter = ({ t }: { t: TFunction }) => {
    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                styles.container,
            )}
        >
            <ResponsiveImage
                className={styles.bg}
                sources={{
                    tablet: 'assets/home/stat-bg-tablet.svg',
                    desktop: '/assets/home/stat-bg-desktop.svg',
                    mobile: '/assets/home/stat-bg-mobile.svg',
                }}
            />

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
                    {t(key)}
                </div>
            ))}
        </div>
    );
};

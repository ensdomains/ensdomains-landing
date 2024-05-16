import { clsx } from 'clsx';
import { TFunction } from 'i18next';
import CountUp from 'react-countup';
import ui from '~/styles/ui.module.css';
import styles from './StatsCounter.module.css';

const stats: { key: string; count: number }[] = [
    {
        key: 'names',
        count: 2_580_000,
    },
    {
        key: 'integrations',
        count: 575,
    },
    {
        key: 'owners',
        count: 745_000,
    },
];

export const StatsCounter = ({ t }: { t: TFunction }) => {
    return (
        <div
            className={clsx(
                ui.flex,
                ui['flex-col'],
                styles.container,
            )}
        >
            {stats.map((stat, i) => (
                <div key={stat.key} className={styles.stat}>
                    <CountUp
                        end={stat.count}
                        enableScrollSpy
                        className={styles.value}
                        scrollSpyDelay={500 * i}
                        formattingFn={n => n.toLocaleString() + '+'}
                    />
                    {' '}
                    {t(stat.key)}
                </div>
            ))}
        </div>
    );
};

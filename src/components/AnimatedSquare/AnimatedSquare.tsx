import { clsx } from 'clsx';
import styles from './AnimatedSquare.module.css';

export const AnimatedSquare = ({ className }: { className?: string }) => (
    <div className={clsx(styles['animated-square'], className)}></div>
);

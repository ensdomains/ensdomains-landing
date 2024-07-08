import { clsx } from 'clsx';
import styles from './AnimatedSquare.module.css';
import { HTMLAttributes } from 'react';

export const AnimatedSquare = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={clsx(styles['animated-square'], className)}></div>
);

import { FC, ReactNode } from 'react';

import styles from './Carousel.module.css';

export const Carousel: FC<{ children: ReactNode[] }> = ({ children }) => {
    return <div className={styles.carousel}>{children}</div>;
};

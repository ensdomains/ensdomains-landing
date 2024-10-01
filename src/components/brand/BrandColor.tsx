import { CSSProperties } from 'react';
import { BrandColorObject } from '~/utils/types';
import styles from './BrandColor.module.css';

export const BrandColor = (color: BrandColorObject) => (
    <div
        className={styles.brandColor}
        style={{
            '--color': color.hex,
            'color': color.textColor,
        } as CSSProperties}
    >
        <div className={styles.colorName}>{color.name}</div>
        <div className={styles.colorList}>
            <span>
                <span>HEX</span>
                <span>{color.hex}</span>
            </span>
            <span>
                <span>RGB</span>
                <span>{color.RGB}</span>
            </span>
            <span>
                <span>CMYK</span>
                <span>{color.CMYK}</span>
            </span>
        </div>
    </div>
);

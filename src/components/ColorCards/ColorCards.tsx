import { CSSProperties, FC, SVGProps } from 'react';

import styles from './ColorCards.module.css';
import ui from '~/styles/ui.module.css';

import type { Color } from '~/utils/types';
import { clsx } from 'clsx';
import { ExternalLink } from 'react-external-link';

const BigSquare = (props: SVGProps<SVGSVGElement>) => (
    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="66" y="66" width="66" height="66" transform="rotate(-180 66 66)" fill="url(#pattern0_983_1101)" />
        <defs>
            <pattern id="pattern0_983_1101" patternContentUnits="objectBoundingBox" width="0.181818" height="0.181818">
                <use xlinkHref="#image0_983_1101" transform="scale(0.00189394)" />
            </pattern>
            <image id="image0_983_1101" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7dyxalNxGIbxN2loC4WkRCgIhizaRdRBJwPOGdoL8ApcvIK4uJjVJfdQ93ZwcFLrVIeqRbBTiVgsWJJCQgKRmH/AUCukW9/zwfPbEs7wHZ6THEI4X07P34x1zqNKSRu3ytpcL6taXFIWfDrpaf9nT80PbR11h3OPjTZ/7m+A1aWCGrWKnj64rixr7f1Qc/e7OsPRP+9HnX8aIA3/+vFt3V1bUQTpiqpvHcxOIvL8+fRGunKiDJ+kWRu1G7PXkefPVV++G399cl8R1be+6OhsqMjzFxoPK4pqY/2aSosLiirNX4j00b1o82ZZncFIUaX5c/1+fyzY5AUrApgRwIwAZgQwI4AZAcwIYEYAMwKYEcCMAGYEMCOAGQHMCGBGADMCmBHAjABmBDAjgBkBzAhgRgAzApgRwIwAZgQwI4AZAcwIYEYAs/xlDz5n2f5JT9Hnz28fniqqz5MTiD5/fufwl6J6sdtW9Pnzb9tnau0dK5rWx+Pp10/0+ac34VQiLZOIIj3q33zfnr2OPP80QHc4Uv3VQYgrKV055/dEJJHnz11cV1MtLelZraI7ayu6l5GHuNM6gp3JzXb72+nkK6c799ho8//3O6BaXFZn8FurywVlRXcwUnFxYXIig0uPjTY/+4KuGPuCMoB9QWbsC8oI9gWZsS/IjH1BGcD/AWYEMCOAGQHMCGBGADMCmBHAjABmBDAjgBkBzAhgRgAzApgRwIwAZgQwI4AZAcwIYEYAMwKYEcCMAGYEMCOAGQHMCGBGADMCmBHAjABm7AsyYl+QGfuCzNgXZMS+ICP2BRmxL8hg3vx/ANE5qkoAksjwAAAAAElFTkSuQmCC" />
        </defs>
    </svg>
);

export const ColorCards: FC<{
    cards: { title: string; description: string; color: Color; link: string }[];
}> = ({ cards }) => {
    return (
        <div className={styles.grid}>
            {cards.map(({ title, description, color, link }) => (
                <ExternalLink href={link} key={title} className={clsx(ui.flex, ui['flex-col'], styles.card)} style={{ '--bg': `var(--${color})`, '--bg-hover': `var(--${color.replace('ens-', 'ens-hover-')})` } as CSSProperties}>
                    <div>{title}</div>
                    <div className={styles.text}>{description}</div>
                    <BigSquare className={styles.box} />
                </ExternalLink>
            ))}
        </div>
    );
};

import { FC, HTMLAttributes, ImgHTMLAttributes, SourceHTMLAttributes } from 'react';
import { Dimension } from '~/utils/useMq';
import styles from './ResponsiveImage.module.css';

type DesktopWithTablet = Exclude<Dimension, 'mobile'>;

type Props = HTMLAttributes<HTMLPictureElement> & {
    sources: Partial<Record<DesktopWithTablet, string>> & { mobile: string };
    sourceProps?: Partial<Record<DesktopWithTablet, SourceHTMLAttributes<HTMLSourceElement>>> & { mobile: ImgHTMLAttributes<HTMLImageElement> };
    alt?: string;
};

export const ResponsiveImage: FC<Props> = (
    { sources, alt = '', sourceProps = { desktop: {}, mobile: {}, tablet: {} }, ...props },
) => (
    <picture {...props}>
        {sources.desktop && <source {...sourceProps.desktop} srcSet={sources.desktop} media="(min-width: 1280px)" />}
        {sources.tablet && <source {...sourceProps.tablet} srcSet={sources.tablet} media="(min-width: 768px)" />}
        <img className={styles.img} {...sourceProps.mobile} src={sources.mobile} {...{ alt }} />
    </picture>
);

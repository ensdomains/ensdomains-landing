import clsx from 'clsx'
import NextImage, { ImageProps as NextImageProperties } from 'next/image'
import styles from './Image.module.css'

type ImageVariant = 'full' | 'wide' | 'normal' | 'small'

type ImageProperties = NextImageProperties & {
  size?: ImageVariant
}

export const Image = ({ size = 'full', ...properties }: ImageProperties) => {
  return (
    <NextImage {...properties} className={clsx(styles.image)} />
  )
}

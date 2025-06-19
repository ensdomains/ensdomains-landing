import clsx from 'clsx'
import NextImage, { type ImageProps as NextImageProperties } from 'next/image'
import styles from './Image.module.css'

type ImageVariant = 'full' | 'wide' | 'normal' | 'small'

type ImageProperties = NextImageProperties & {
  size?: ImageVariant
}

export const Image = (properties: ImageProperties) => {
  return <NextImage {...properties} className={clsx(styles.image)} />
}

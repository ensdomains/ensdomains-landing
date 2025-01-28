export type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export type ImageSettings = {
  prefix?: string
  suffix?: string
  width: number
  height: number
  format?: string
}

export type ENStateResponse = {
  name: string
  address: string
  avatar: string
  display: string
}

export const ImageFormats = ['webp', 'png', 'jpg', 'jpeg'] as const

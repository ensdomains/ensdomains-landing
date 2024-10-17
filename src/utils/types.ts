import type { Language } from '~/i18n/settings'

export type Color =
  | 'ens-blue'
  | 'ens-light-blue'
  | 'ens-medium-blue'
  | 'ens-dark-blue'
  | 'ens-magenta'
  | 'ens-light-magenta'
  | 'ens-green'
  | 'ens-light-green'
  | 'ens-dark-brown'
  | 'ens-light-yellow'
  | 'ens-yellow'
  | 'ens-gray-4'
  | 'ens-gray-3'
  | 'ens-gray-2'
  | 'ens-gray-1'
  | 'ens-white'
  | 'ens-hover-blue'
  | 'ens-hover-light-blue'
  | 'page-text'
  | 'page-bg'

export type ButtonVariant = 'primary' | 'secondary'

export type PartnerEntry = {
  icon: string
  name: string
  category: 'wallet' | 'exchange' | 'dApp' | 'browser' | 'service'
}

export type PageProps = {
  params: { lang: Language }
}

export type BrandColorObject = {
  hex: `#${string}`
  RGB: `${number}, ${number}, ${number}`
  CMYK: `${number}%, ${number}%, ${number}%, ${number}%`
  name: string
  textColor: 'black' | 'white'
}

import { type CnOptions, cn as cnBase, defaultConfig } from 'tailwind-variants'

export const cn = <T extends CnOptions>(...classes: T) =>
  cnBase(...classes)(defaultConfig)

import { EB_Garamond, Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  weight: 'variable',
  variable: '--ens-sans-fb',
  subsets: ['cyrillic'],
})

const ebGaramond = EB_Garamond({
  weight: 'variable',
  variable: '--ens-serif-fb',
  subsets: ['cyrillic'],
})

const ABCMonumentGrotesk = localFont({
  src: './fonts/ABCMonumentGroteskVariableVF.woff2',
  variable: '--ens-sans',
  fallback: ['var(--ens-sans-fb)', 'sans-serif'],
})

const ABCMonumentGroteskMono = localFont({
  src: [
    {
      weight: '400',
      path: './fonts/mono/regular.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/mono/italic.woff2',
      style: 'italic',
    },
    {
      weight: '500',
      path: './fonts/mono/medium.woff2',
      style: 'normal',
    },
    {
      weight: '500',
      path: './fonts/mono/medium-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--ens-mono',
})

const ABCMonumentGroteskSemiMono = localFont({
  src: [
    {
      weight: '400',
      path: './fonts/semi-mono/regular.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/semi-mono/italic.woff2',
      style: 'italic',
    },
    {
      weight: '500',
      path: './fonts/semi-mono/medium.woff2',
      style: 'normal',
    },
    {
      weight: '500',
      path: './fonts/semi-mono/medium-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--ens-semi-mono',
  fallback: ['monospace'],
})

const ABCMarist = localFont({
  src: [
    {
      weight: '400',
      path: './fonts/serif/regular.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/serif/italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--ens-serif',
  fallback: ['var(--ens-serif-fb)', 'serif'],
})

export {
  inter,
  ebGaramond,
  ABCMarist,
  ABCMonumentGrotesk,
  ABCMonumentGroteskSemiMono,
  ABCMonumentGroteskMono,
}

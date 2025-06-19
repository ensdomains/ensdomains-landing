import { fallbackLng, languages } from '../i18n/settings'

export const generateStaticParams = async () => {
  return languages
    .filter((language) => language !== fallbackLng)
    .map((language) => ({
      lang: language,
    }))
}

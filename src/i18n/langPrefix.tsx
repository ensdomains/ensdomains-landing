import { fallbackLng, type Language, languages } from './settings'

export const getLangPrefix = (lang: Language) => {
  return lang === fallbackLng ? '' : `/${lang}`
}

export const decodeLangPrefix = (path: string) => {
  if (path === '') return fallbackLng

  if (languages.includes(path as Language)) return path as Language

  // Fallback
  return fallbackLng
}

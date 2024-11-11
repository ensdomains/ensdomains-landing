export const languages = [
  // 'it',
  // 'vi',
  // 'pt',
  // 'nl',
  // 'pl',
  'en',
  // 'ja',
  // 'ru',
  // 'es',
  // 'ko',
  // 'tr',
  // 'fr',
  // 'cn',
  // 'de',
] as const

export const languageNames: Record<Language, string> = {
  en: 'English',
  // ru: 'Русский',
  // de: 'Deutsch',
  // cn: '简体中文',
  // ja: '日本語',
  // it: 'Italiano',
  // tr: 'Türkçe',
  // fr: 'Français',
  // es: 'Español',
  // pl: 'Polski',
  // ko: '한국어',
  // nl: 'Nederlands',
  // vi: '㗂越',
  // pt: 'Português',
}

export const fallbackLng = 'en'
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export type Language = (typeof languages)[number]

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

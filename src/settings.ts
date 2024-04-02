export const languages = [
    'it',
    'vi',
    'pt',
    'nl',
    'pl',
    'en',
    'ja',
    'ru',
    'es',
    'ko',
    'tr',
    'fr',
    'cn',
    'de',
] as const;

export const fallbackLng = 'en';
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export type Language = (typeof languages)[number];

export function getOptions(
    lng = fallbackLng,
    ns: string | string[] = defaultNS
) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}

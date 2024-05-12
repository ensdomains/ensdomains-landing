import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useParams } from 'next/navigation';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { fallbackLng, getOptions, Language } from './settings';

const initI18next = async (lng: Language, ns: string | string[]) => {
    const i18nInstance = createInstance();

    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language, namespace) =>
                    import(`../../locales/${language}/${namespace}.json`),
            ),
        )
        .init(getOptions(lng, ns));

    return i18nInstance;
};

export const useCurrentLanguage = (lang: Language = fallbackLng): Language => {
    const parameters = useParams();

    return (parameters['lang'] as Language) || lang;
};

export async function useTranslation(
    lng: Language,
    ns: string | string[],
    options: { keyPrefix?: string } = {},
) {
    const i18nextInstance = await initI18next(lng, ns);

    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns,
            options.keyPrefix,
        ),
        i18n: i18nextInstance,
    };
}

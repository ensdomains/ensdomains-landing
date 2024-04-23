import { fallbackLng, languages } from '../i18n/settings';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const generateStaticParams = async () => {
    return languages
        .filter((language) => language != fallbackLng)
        .map((language) => ({
            lang: language,
        }));
};

import { languages } from '../i18n/settings';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const generateStaticParams = async () => {
    return languages.map((language) => ({ lang: language }));
};

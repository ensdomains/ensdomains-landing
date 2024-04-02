import { languages } from '../settings';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const generateStaticParams = async () => {
    return languages.map((language) => ({ lang: language }));
};

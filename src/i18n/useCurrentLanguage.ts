import { useParams } from 'next/navigation';
import { Language, fallbackLng } from './settings';

export const useCurrentLanguage = (lang: Language = fallbackLng): Language => {
    const parameters = useParams();

    return (parameters['lang'] as Language) || lang;
};

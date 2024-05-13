// Updates html lang attribute based on chosen language

'use client';

import { useEffect } from 'react';
import { Language } from '~/i18n/settings';

export const MetaUpdater = ({ lang }: { lang: Language }) => {
    useEffect(() => {
        const langAttr = document.documentElement.getAttribute('lang');
        if (lang && langAttr !== lang) {
            document.documentElement.setAttribute('lang', lang);
        }
    }, []);

    return <></>;
};

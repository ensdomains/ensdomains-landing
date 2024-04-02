/* eslint-disable unicorn/prevent-abbreviations */

import Link from 'next/link';

import { Language, languages } from '../../settings';
import { useTranslation } from '../../useTranslation';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div>
            <div>hi</div>
            <h1>{t('home.hero.title')}</h1>
            <div>Active Language: {params.lang}</div>
            <div>
                {languages.map((lang) => (
                    <Link key={lang} href={`/${lang}`}>
                        {lang}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export { generateStaticParams } from '../../utils/getStatic';

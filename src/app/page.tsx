import { useTranslation } from '../useTranslation';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <div>
            <div>hi</div>
            <h1>{t('home.hero.title')}</h1>
        </div>
    );
}

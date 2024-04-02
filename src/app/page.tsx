/* eslint-disable unicorn/prevent-abbreviations */
export default function Home() {
    // const { t } = useTranslation('translation');
    const t = (_s) => 'hiz';

    return (
        <div>
            <div>hi</div>
            <h1>{t('home.hero.title')}</h1>
        </div>
    );
}

/* eslint-disable unicorn/prevent-abbreviations */
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
    const { t } = useTranslation('translation');

    return <h1>{t('home.hero.title')}</h1>;
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}

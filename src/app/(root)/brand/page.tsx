import { Footer } from '~/components/Footer/Footer';
import { LinkList } from '~/components/LinkList/LinkList';
import { Navbar } from '~/components/Navbar/Navbar';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

export default async function Brand({
    params,
}: {
    params: { lang: Language };
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <main className="page">
            <Navbar t={t} lang={params.lang} />
            <LinkList
                links={[
                    {
                        title: 'Usage Guidelines',
                        href: '',
                        description:
                            'If you\'re unsure of our guidelines and how your project would align, please get in touch.',
                    },
                    {
                        title: 'Partnerships',
                        href: '',
                        description:
                            'An official partnership with us means joining forces to create impactful solutions. This might include;',
                    },
                    {
                        title: 'Ecosystem',
                        href: '',
                        description:
                            'If you\'re building on ENS without an official partnership, you\'re an Ecosystem builder. This might include;',
                    },
                ]}
            />

            <Footer t={t} />
        </main>
    );
}

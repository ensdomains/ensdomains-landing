import { LinkList } from '~/components/LinkList/LinkList';

export default async function Brand() {
    return (
        <>
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

        </>
    );
}

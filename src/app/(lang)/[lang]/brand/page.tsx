import Page from '~/app/(root)/brand/page';

export default async function LocaleHome() {
    return <Page />;
}

export { generateStaticParams } from '~/utils/getStatic';

import { Language } from '~/i18n/settings';

import Page from '../../brand/page';

export default async function LocaleHome({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '../../../utils/getStatic';

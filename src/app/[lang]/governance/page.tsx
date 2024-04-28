import { Language } from '~/i18n/settings';

import Page from '../../governance/page';

export default async function LocaleGovernance({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '../../../utils/getStatic';

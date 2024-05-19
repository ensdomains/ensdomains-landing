import { Language } from '~/i18n/settings';

import Page from '~/app/(root)/governance/page';

export default async function LocaleGovernance({
    params,
}: {
    params: { lang: Language };
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '~/utils/getStatic';

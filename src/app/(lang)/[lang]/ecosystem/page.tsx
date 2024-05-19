import { Language } from '~/i18n/settings';

import Page from '~/app/(root)/ecosystem/page';

export default async function LocaleEcosystem({
    params,
}: {
    params: { lang: Language };
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '~/utils/getStatic';

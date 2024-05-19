import { Language } from '~/i18n/settings';

import Page from '~/app/(root)/brand/page';

export default async function LocaleHome({
    params,
}: {
    params: { lang: Language };
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '~/utils/getStatic';

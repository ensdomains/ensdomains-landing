import { Language } from '~/i18n/settings';

import Page from '~/app/(root)/developers/page';

export default async function LocaleDevelopers({
    params,
}: {
    params: { lang: Language };
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '~/utils/getStatic';

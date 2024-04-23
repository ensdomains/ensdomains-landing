import { Language } from '../../../i18n/settings';
import Page from '../../developers/page';

export default async function LocaleDevelopers({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '../../../utils/getStatic';

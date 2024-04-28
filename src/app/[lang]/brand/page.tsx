import Page from '../../brand/page';
import { Language } from '../~/i18n/settings';

export default async function LocaleHome({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '../../../utils/getStatic';

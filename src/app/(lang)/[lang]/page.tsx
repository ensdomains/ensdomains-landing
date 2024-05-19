import { Language } from '~/i18n/settings';
import Home from '../../(root)/page';

export default async function LocaleHome({
    params,
}: {
    params: { lang: Language };
}) {
    return <Home params={params} />;
}

export { generateStaticParams } from '~/utils/getStatic';

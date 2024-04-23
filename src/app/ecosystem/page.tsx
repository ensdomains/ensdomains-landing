import { fallbackLng } from '../../i18n/settings';
import Home from '../[lang]/ecosystem/page';

export default async function LocaleHome() {
    return <Home params={{ lang: fallbackLng }} />;
}

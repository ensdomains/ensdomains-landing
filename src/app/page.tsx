import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../useTranslation';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <div>
            <div>hi</div>
            <div>plz pick a language</div>
            <LanguageSwitcher />
        </div>
    );
}

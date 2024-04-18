import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../i18n/useTranslation';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <div>
            <h1
                style={{
                    color: 'var(--ens-green)',
                }}
            >
                title works
            </h1>
            <h2>subtitle looks nice</h2>
            <p>some paragraph text</p>
            <LanguageSwitcher />
        </div>
    );
}

import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '../i18n/useTranslation';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home() {
    const { t } = await useTranslation('en', 'translation');

    return (
        <div>
            <h1
                style={{
                    fontFamily: 'var(--ens-sans)',
                    color: 'var(--ens-green)',
                    fontSize: 124,
                }}
            >
                title works
            </h1>
            <p style={{ fontFamily: 'var(--ens-mono)', fontSize: 36 }}>
                yeah monospace works too
            </p>
            <p style={{ fontFamily: 'var(--ens-semi-mono)', fontSize: 36 }}>
                semi mono too
            </p>
            <h2 style={{ fontFamily: 'var(--ens-serif)', fontSize: 24 }}>
                serif as well
            </h2>
            <LanguageSwitcher />
        </div>
    );
}

import { FC } from 'react';

export const Navbar: FC = () => {
    // TODO: Implement language
    const language = 'en';

    return (
        <nav>
            <div>navbar</div>
            <div>
                {[
                    '/',
                    '/governance',
                    '/developers',
                    '/ecosystem',
                    '/brand',
                ].map((link) => (
                    <div>
                        <a href={`/${language}/${link}`}>{link}</a>
                    </div>
                ))}
            </div>
        </nav>
    );
};

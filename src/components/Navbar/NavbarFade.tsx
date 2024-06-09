'use client';

import { useEventListener } from '~/utils/useEventListener';

export const NavbarFade = () => {
    useEventListener('scroll', () => {
        const nav = document.getElementById('nav');

        const isOpaque = nav.getAttribute('data-opaque');
        if (window.scrollY > 25 && !isOpaque) {
            nav.setAttribute('data-opaque', 'true');
        }
        else if (window.scrollY < 25 && isOpaque) {
            nav.removeAttribute('data-opaque');
        }
    });

    return <></>;
};

import { useEffect, useState } from 'react';

export const mq = {
    tablet: '(max-width: 1024px)',
} as const;

export function useMq(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        setMatches(mediaQuery.matches);

        const handler = (event) => setMatches(event.matches);

        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}

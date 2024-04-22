import React from 'react';

const defaultValue = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
};

const queries = {
    xs: '(max-width: 360px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
};

const BreakpointContext = React.createContext(defaultValue);

function BreakpointProvider({ children }) {
    const [queryMatch, setQueryMatch] = React.useState(defaultValue);

    React.useEffect(() => {
        const mediaQueryLists = {};
        const keys = Object.keys(queries);
        let isAttached = false;

        const handleQueryListener = () => {
            const updatedMatches = Object.fromEntries(
                keys.map((media) => {
                    return [
                        media,
                        !!(
                            mediaQueryLists[media] &&
                            mediaQueryLists[media]?.matches
                        ),
                    ];
                })
            );

            setQueryMatch(updatedMatches as typeof defaultValue);
        };

        if (window && window.matchMedia) {
            const matches = defaultValue;

            for (const media of keys) {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media] = window.matchMedia(queries[media]);
                    matches[media] = mediaQueryLists[media]?.matches || false;
                } else {
                    matches[media] = false;
                }
            }
            setQueryMatch(matches);
            isAttached = true;

            for (const media of keys) {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media]?.addListener(handleQueryListener);
                }
            }
        }

        return () => {
            if (isAttached) {
                for (const media of keys) {
                    if (typeof queries[media] === 'string') {
                        mediaQueryLists[media]?.removeListener(
                            handleQueryListener
                        );
                    }
                }
            }
        };
    }, [queries]);

    return (
        <BreakpointContext.Provider value={queryMatch}>
            {children}
        </BreakpointContext.Provider>
    );
}

function useBreakpoint() {
    const context = React.useContext(BreakpointContext);

    if (context === defaultValue) {
        throw new Error('useBreakpoint must be used within BreakpointProvider');
    }

    return context;
}
export { BreakpointProvider, useBreakpoint };

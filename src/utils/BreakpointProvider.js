/* eslint-disable sonarjs/cognitive-complexity */
import React from 'react';

const defaultValue = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
};

const queries = {
    xs: '(min-width: 360px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
};

const BreakpointContext = React.createContext(defaultValue);

function BreakpointProvider({ children }) {
    const [queryMatch, setQueryMatch] = React.useState({});

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

            setQueryMatch(updatedMatches);
        };

        if (window && window.matchMedia) {
            const matches = {};

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

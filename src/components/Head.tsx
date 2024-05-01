import NextHead from 'next/head';
import React from 'react';

function getTitle(pathname: string) {
    switch (pathname) {
        case '/governance':
            return 'Governance';
        case '/about':
            return 'About ENS';
        default:
            return 'Ethereum Name Service';
    }
}

const DEFAULT_OG_DESCRIPTION =
    'Decentralised naming for the new internet. No more copying and pasting long addresses.';

export const Head = ({ location }: { location?: string }) => {
    return (
        <NextHead>
            <meta name="description" content={DEFAULT_OG_DESCRIPTION} />
            <meta
                name="keywords"
                content="ENS, Ethereum, Ethereum Name Service, .eth domains, blockchain domains"
            />
            <meta name="googlebot" content="index, follow" />
            <meta name="robots" content="index, follow" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Ethereum Name Service" />
            <meta name="twitter:site" content="@ensdomains" />
            <meta name="og:description" content={DEFAULT_OG_DESCRIPTION} />
            <meta name="og:type" content="website" />
            <meta name="og:image" content="https://ens.domains/og-image.png" />
            <meta
                name="og:image:secure_url"
                content="https://ens.domains/og-image.png"
            />
            <meta name="og:image:alt" content="Ethereum Name Service" />
            <meta name="og:image:width" content="1200" />
            <meta name="og:image:height" content="630" />
            <meta name="og:site_name" content="Ethereum Name Service" />
            <meta name="og:title" content="Ethereum Name Service" />
            <meta name="og:url" content="https://ens.domains" />
            {/* <meta name="og:locale" content="en_US" /> */}
            <title>{getTitle(location)}</title>
            <link rel="canonical" href="https://ens.domains" />
            {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> */}
        </NextHead>
    );
};

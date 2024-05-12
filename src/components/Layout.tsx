import Head from 'next/head';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Head>
                <script
                    async
                    defer
                    data-domain="ens.domains, rollup.ens"
                    src="https://plausible.io/js/script.outbound-links.js"
                >
                </script>
                <script
                    async
                    defer
                    data-domain="ens.domains"
                    src="https://ens.v3x.report/js/script.js"
                >
                </script>
            </Head>
            {children}
        </div>
    );
}

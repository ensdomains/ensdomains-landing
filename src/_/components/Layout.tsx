import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ children, data: _, location }) {
    return (
        <div>
            <Helmet>
                <script
                    async
                    defer
                    data-domain="ens.domains, rollup.ens"
                    src="https://plausible.io/js/script.outbound-links.js"
                ></script>
                <script
                    async
                    defer
                    data-domain="ens.domains"
                    src="https://ens.v3x.report/js/script.js"
                ></script>
            </Helmet>
            {children}
        </div>
    );
}

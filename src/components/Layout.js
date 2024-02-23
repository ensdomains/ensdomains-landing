/* eslint-disable sonarjs/no-duplicate-string */
import { css, Global } from '@emotion/core';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ children, data, location }) {
    return (
        <div style={{ paddingTop: 110 }}>
            <Helmet>
                <script
                    async=""
                    defer=""
                    data-domain="ens.domains, rollup.ens"
                    src="https://plausible.io/js/script.outbound-links.js"
                ></script>
                <script
                    async=""
                    defer=""
                    data-domain="blog.ens.domains"
                    src="https://ens.v3x.report/js/script.js"
                ></script>
            </Helmet>
            <Global
                styles={css`
                    html,
                    body,
                    #___gatsby,
                    #gatsby-focus-wrapper {
                        height: ${location?.pathname === '/governance'
                            ? '100%'
                            : 'initial'};
                    }
                    body {
                        font-family: Satoshi;
                    }
                    #gatsby-focus-wrapper {
                        height: 100vh;
                    }
                `}
            />
            {children}
        </div>
    );
}

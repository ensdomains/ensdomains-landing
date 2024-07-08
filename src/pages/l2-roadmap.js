import {
    Card,
    lightTheme,
    mq,
    OutlinkSVG,
    ThorinGlobalStyles,
} from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import AnnouncementBanner from '../components/AnnouncementBanner';
import L2RoadmapHeader from '../components/L2Roadmap/L2RoadmapHeader';
import RoadMapFlow from '../components/L2Roadmap/RoadMapFlow';
import Layout from '../components/Layout';
import Navigation from '../components/NavigationV3/Navigation';
import { BreakpointProvider } from '../utils/BreakpointProvider';

const Content = styled.div(({ theme }) => [
    css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['6']};
        padding: 0 ${theme.space['4']} ${theme.space['6']};
        width: 100%;
        max-width: 940px;
        margin: 0 auto;
    `,
    mq.sm.min(css`
        padding: 0 ${theme.space['10']} ${theme.space['10']};
        gap: ${theme.space['10']};
    `),
]);

export { Head } from '../components/Head';

export default function Roadmap(properties) {
    return (
        <Layout {...properties} paddingTop={0}>
            <BreakpointProvider>
                <ThemeProvider theme={lightTheme}>
                    <ThorinGlobalStyles />
                    <Navigation />
                    <Content>
                        <L2RoadmapHeader />
                        <AnnouncementBanner
                            title="ENSv2: The Next Generation of ENS"
                            description="Our vision for the next iteration of the ENS protocol, on L2."
                            primaryButton={{
                                label: 'ENSv2 Design Doc',
                                href: 'http://go.ens.xyz/ensv2',
                                suffix: <OutlinkSVG />,
                            }}
                            secondaryButton={{
                                label: 'Read FAQs',
                                href: 'https://blog.ens.domains/post/ensv2-faq',
                            }}
                        />
                        <Card>
                            <RoadMapFlow />
                        </Card>
                    </Content>
                </ThemeProvider>
            </BreakpointProvider>
        </Layout>
    );
}

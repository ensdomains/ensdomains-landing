import { lightTheme, mq, ThorinGlobalStyles } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import Navigation from '../components/NavigationV3/Navigation';
import RoadmapHeader from '../components/Roadmap/RoadmapHeader';
import RoadmapList from '../components/Roadmap/RoadmapList';
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

export default function Roadmap(properties) {
    return (
        <Layout {...properties} paddingTop={0}>
            <BreakpointProvider>
                <ThemeProvider theme={lightTheme}>
                    <ThorinGlobalStyles />
                    <Navigation logoStyle="blue" />
                    <Content>
                        <RoadmapHeader />
                        <RoadmapList />
                    </Content>
                </ThemeProvider>
            </BreakpointProvider>
        </Layout>
    );
}

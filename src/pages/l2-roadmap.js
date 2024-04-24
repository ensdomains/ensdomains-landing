import React from "react"
import Layout from "../components/Layout"
import Navigation from "../components/NavigationV3/Navigation"
import { BreakpointProvider } from "../utils/BreakpointProvider"
import styled, { css, ThemeProvider } from "styled-components"
import { ThorinGlobalStyles, lightTheme, mq } from "@ensdomains/thorin_next"
import L2RoadmapHeader from "../components/L2Roadmap/L2RoadmapHeader"
import L2RoadmapIntroCard from "../components/L2Roadmap/L2RoadmapIntroCard"
import L2RoadmapFlowMaps from "../components/L2Roadmap/L2RoadmapFlowMaps"

const Content = styled.div(({ theme }) => [
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["6"]};
    padding: 0 ${theme.space["4"]} ${theme.space["6"]};
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
  `,
  mq.sm.min(css`
    padding: 0 ${theme.space["10"]} ${theme.space["10"]};
    gap: ${theme.space["10"]};
  `),
])

const SubContent = styled.div(({ theme }) => [
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["6"]};
    width: 100%;
  `,
  mq.sm.min(css`
    gap: ${theme.space["6"]};
  `),
])

export default function Roadmap(props) {
  return (
    <Layout {...props}>
      <BreakpointProvider>
        <ThemeProvider theme={lightTheme}>
          <ThorinGlobalStyles />
          <Navigation />
          <Content>
            <L2RoadmapHeader />
            <SubContent>
              <L2RoadmapIntroCard />
              <L2RoadmapFlowMaps />
            </SubContent>
          </Content>
        </ThemeProvider>
      </BreakpointProvider>
    </Layout>
  )
}

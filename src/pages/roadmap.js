import React from "react"
import Layout from "../components/Layout"
import Navigation from "../components/NavigationV3/Navigation"
import RoadmapList from "../components/Roadmap/RoadmapList"
import RoadmapHeader from "../components/Roadmap/RoadmapHeader"
import { BreakpointProvider } from "../utils/BreakpointProvider"
import styled, { css, ThemeProvider } from "styled-components"
import { ThorinGlobalStyles, lightTheme, mq } from "@ensdomains/thorin_next"

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

export default function Roadmap(props) {
  return (
    <Layout {...props}>
      <BreakpointProvider>
        <ThemeProvider theme={lightTheme}>
          <ThorinGlobalStyles />
          <Navigation />
          <Content>
            <RoadmapHeader />
            <RoadmapList />
          </Content>
        </ThemeProvider>
      </BreakpointProvider>
    </Layout>
  )
}

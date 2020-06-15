import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
const Wrapper = styled("div")``
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Global
        styles={css`
          body {
            font-family: Overpass;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}

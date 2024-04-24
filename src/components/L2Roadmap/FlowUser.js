import React from "react"
import styled, { css } from "styled-components"

import { PersonSVG } from "@ensdomains/thorin_next"

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    width: ${theme.space.full};
  `
)

const IconWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.backgroundSecondary};
    border-radius: 50%;
    padding: ${theme.space["4"]};

    svg {
      width: ${theme.space["8"]};
      height: ${theme.space["8"]};
    }
  `
)

export default function FlowUser() {
  return (
    <Container>
      <IconWrapper>
        <PersonSVG />
      </IconWrapper>
    </Container>
  )
}

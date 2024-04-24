import { Typography, mq } from "@ensdomains/thorin_next"
import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.space["1"]};
    z-index: 1;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${mq.sm.min(css`
      flex-direction: row;
    `)}
  `
)

const ArrowContainer = styled.div(({ theme }) => css`
  flex: 15px;
  position: relative;
  height: 15px;

  ${mq.sm.min(css`
    flex: 1;
  `)}
`)

const ArrowStart = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 2px;
    height: 15px;
    background: ${theme.colors.grey};
    bottom: 0;
    transform: translateX(-50%);
    ${mq.sm.min(css`
      width: 100%;
      min-width: 15px;
      height: 2px;
      top: 50%;
      bottom: initial;
      transform: translateY(-50%);
      right: 0;
    `)}
  `
)

const ArrowEnd = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 2px;
    height: 15px;
    background: ${theme.colors.grey};
    top: 0;
    transform: translateX(-50%);

    ${mq.sm.min(css`
      width: 100%;
      min-width: 15px;
      height: 2px;
      top: 50%;
      bottom: initial;
      left: 0;
      transform: translateY(-50%);
    `)}
  `
)

const Title = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.greenSurface};
    border-radius: ${theme.radii.small};
    transform-origin: bottom center;
    justify-content: center;
    text-align: center;
    width: max-content;

    ${mq.sm.min(css`
      width: min-content;
    `)}

    ${mq.lg.min(css`
      width: fit-content;
    `)}
  `
)

export default function SubflowActionHorizontal({ title }) {
  return (
    <Container>
      <ArrowContainer>
        <ArrowStart />
      </ArrowContainer>
      <Title>
        <Typography color="grey" fontVariant="extraSmall">
          {title}
        </Typography>
      </Title>
      <ArrowContainer>
        <ArrowEnd />
      </ArrowContainer>
    </Container>
  )
}

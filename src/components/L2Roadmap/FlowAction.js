import React from "react"
import styled, { css } from "styled-components"
import arrowhead from "../../assets/arrowhead_down.svg"
import { Typography } from "@ensdomains/thorin_next"

const ActionContainer = styled.div(
  ({ theme }) => css`
    position: relative;
    padding: ${theme.space["8"]};
    display: flex;
    justify-content: center;
  `
)

const ActionTitle = styled.div(
  ({ theme }) => css`
    z-index: 1;
    padding: ${theme.space["2"]} ${theme.space["4"]};
    width: fit-content;
    background: black;
    border-radius: ${theme.radii.large};
  `
)

const ArrowContainer = styled.div(
  ({ theme }) => css`
    z-index: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    background: yellow;
  `
)

const ArrowStem = styled.div(
  ({ theme }) => css`
    position: absolute;
    background: black;
    width: 4px;
    height: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    top: -2px;
    border-radius: 2px;
  `
)

const ArrowHeadImg = styled.img(
  ({ theme }) => css`
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  `
)

export default function FlowAction({ title }) {
  return (
    <ActionContainer>
      <ArrowContainer>
        <ArrowStem />
        <ArrowHeadImg src={arrowhead} />
      </ArrowContainer>
      <ActionTitle>
        <Typography fontVariant="body" color="background">
          {title}
        </Typography>
      </ActionTitle>
    </ActionContainer>
  )
}

import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    height: 50px;
  `
)

const Bookends = styled.div(
  ({ theme }) => css`
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: ${theme.space["4"]};
    width: 200px;
    overflow: hidden;
  `
)

const Middle = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: ${theme.space["4"]};
  `
)

const ArrowStem = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${theme.colors.grey};
    left: 50%;
    transform: translateX(-50%);
  `
)

const LeftCurve = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 50%;
    top: calc(50% - 1px);
    border: 2px solid ${theme.colors.grey};
    border-radius: 16px;
  `
)

const RightCurve = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: -50%;
    top: calc(-50% + 1px);
    border: 2px solid ${theme.colors.grey};
    border-radius: 16px;
  `
)

export default function SubflowActionVertical() {
  return (
    <Container>
      <Bookends>
        <LeftCurve />
      </Bookends>
      <Middle>
        <ArrowStem />
      </Middle>
      <Bookends>
        <RightCurve />
      </Bookends>
    </Container>
  )
}

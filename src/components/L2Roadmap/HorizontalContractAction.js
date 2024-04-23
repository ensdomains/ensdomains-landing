import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  `
)

const ArrowStem = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${theme.colors.grey};
    top: 50%;
    transform: translateY(-50%);
  `
)

export default function HorizontalContractAction() {
  return <Container>

    <ArrowStem/>
  </Container>
}

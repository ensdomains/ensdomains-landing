import { Typography, mq } from "@ensdomains/thorin_next"
import React from "react"
import styled, { css } from "styled-components"

import primaryColorForChain from "./utils/primaryColorForChain"
import SubFlowItem from "./SubFlowItem"

import labelForChain from "./utils/labelForChain"

const Container = styled.div(
  ({ theme, $chain }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space["4"]};
    background: ${theme.colors[`${primaryColorForChain($chain)}Surface`]};
    padding: ${theme.space["4"]};
    border-radius: ${theme.space["2"]};

    ${mq.sm.min(css`
      gap: ${theme.space["6"]};
      padding: ${theme.space["6"]};
    `)}
  `
)

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    order: reverse;
    gap: ${theme.space["2"]};
    width: ${theme.space.full};

    ${mq.sm.min(css`
      flex-direction: row;
      justify-content: space-between;
    `)}
  `
)

const Tag = styled.div(
  ({ theme, $chain }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors[`${primaryColorForChain($chain)}Primary`]};
    padding: ${theme.space["1"]} ${theme.space["3"]};
    border-radius: ${theme.radii.full};
    width: fit-content;
  `
)

const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["4"]};
    width: ${theme.space.full};
  `
)

const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space["4"]};

    ${mq.sm.min(css`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    `)}
  `
)

const calculateSubflowRows = (items) => {
  if (items.length === 4) return items.flatMap((_, i, _items) => i % 2 === 0 ? [[_items[i], _items[i + 1]]] : [])
  return [items]
}

export default function FlowSubflow({ items = [], title, chain }) {
  const subflowRows = calculateSubflowRows(items)
  
  return (
    <Container $chain={chain}>
      <Header>
        <Typography
          fontVariant="bodyBold"
          color={`${primaryColorForChain(chain)}Primary`}
        >
          {title}
        </Typography>
        <Tag $chain={chain}>
          <Typography fontVariant="smallBold" color="inherit">
            {labelForChain(chain)}
          </Typography>
        </Tag>
      </Header>
      <Content>
        {subflowRows.map(subflowRow => (
          <React.Fragment>
            <Row>
              {subflowRow.map((item) => item ? <SubFlowItem {...{...item, chain }}/> : null)}
            </Row>
          </React.Fragment>
        ))}
      </Content>
    </Container>
  )
}

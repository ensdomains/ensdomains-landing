import { Typography } from "@ensdomains/thorin_next"
import React from "react"
import styled, { css } from "styled-components"
import ContractCard from "./ContractCard"

import HorizontalContractAction from "./HorizontalContractAction"
import VerticalContractConnection from "./VerticalContractConnector"

import primaryColorForChain from "./utils/primaryColorForChain"

const Container = styled.div(
  ({ theme, chain }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["6"]};
    background: ${theme.colors[`${primaryColorForChain(chain)}Surface`]};
    padding: ${theme.space["6"]};
    border-radius: ${theme.space["2"]};
  `
)

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.space["4"]};
  `
)

const Tag = styled.div(
  ({ theme, $chain }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors[`${primaryColorForChain($chain)}Primary`]};
    padding: ${theme.space["1"]} ${theme.space["3"]};
    border-radius: ${theme.radii.full};
  `
)

const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["4"]};
  `
)

const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["4"]};
  `
)

const labelForChain = chain => {
  if (chain === "ethereum") return "Ethereum Mainnet"
  if (chain === "ens") return "ENS Chain"
  if (chain === "offchain") return "Offchain"
  throw new Error(`labelForChain: Unknown chain ${chain}`)
}

export default function FlowSubflow({ contracts = [], title, chain }) {
  const contractPairs = contracts.flatMap((contract, i, _contracts) =>
    i % 2 === 0 ? [[contract, contracts[i + 1]]] : []
  )
  return (
    <Container chain={chain}>
      <Header>
        <Typography
          fontVariant="body"
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
        {contractPairs.map(contractPair => (
          <React.Fragment>
            <Row>
              {contractPair.map((contract, contractIdx) =>
                contract ? (
                  <React.Fragment>
                    <ContractCard
                      {...contract}
                      style={{ order: contractIdx }}
                    />
                    {contractIdx % 2 === 0 ? (
                      <HorizontalContractAction />
                    ) : null}
                  </React.Fragment>
                ) : null
              )}
            </Row>
            <VerticalContractConnection />
          </React.Fragment>
        ))}
      </Content>
    </Container>
  )
}

import React from "react"
import styled, { css } from "styled-components"
import {
  InfoCircleSVG,
  LinkSVG,
  Typography,
  Modal,
  Card,
  mq,
} from "@ensdomains/thorin_next"
import ContractModal from "./ContractModal"
import primaryColorForChain from "./utils/primaryColorForChain"
import ContractStatus from "./ContractStatus"

const Container = styled.div(
  ({ theme, chain }) => css`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 124px;
    border-radius: ${theme.radii.large};
    background: ${theme.colors[`${primaryColorForChain(chain)}Primary`]};
    overflow: hidden;

    ${mq.sm.min(css`
      width: 200px;
    `)}
  `
)

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.space["3"]};
    gap: ${theme.space["4"]};
    flex: 1;
  `
)

const Footer = styled.div(
  ({ theme, chain }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.space["4"]};
    background: ${theme.colors.background};
    padding: ${theme.space["3"]};

    > :last-child {
      color: ${theme.colors[`${primaryColorForChain(chain)}Primary`]};
      width: 16px;
      height: 16px;
    }
  `
)

const FooterLeft = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["0.5"]};
    text-transform: capitalize;

    svg {
      width: 12px;
      height: 12px;
    }
  `
)

export default function ContractCard({
  title,
  status,
  chain,
  githubUrl,
  docsUrl,
  ...props
}) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <React.Fragment>
      <Container chain={chain} onClick={() => setShowModal(true)}>
        <Header>
          <Typography fontVariant="bodyBold" color="background">
            {title}
          </Typography>
        </Header>
        <Footer chain={chain}>
          <ContractStatus status={status} />
          {/* <FooterLeft>
            <LinkSVG />
            <Typography fontVariant="extraSmallBold" color="orange">
              {status}
            </Typography>
          </FooterLeft> */}
          <InfoCircleSVG />
        </Footer>
      </Container>
      <ContractModal
        {...{ title, status, chain, githubUrl, docsUrl, ...props }}
        open={showModal}
        onDismiss={() => setShowModal(false)}
      />
    </React.Fragment>
  )
}

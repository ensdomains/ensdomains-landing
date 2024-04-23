import React from "react"
import styled, { css } from "styled-components"
import { CrossSVG, InfoCircleSVG, Modal, Typography, mq } from "@ensdomains/thorin_next"

import SocialGithub from "../../assets/social/SocialGithub.svg"
import primaryColorForChain from "./utils/primaryColorForChain"
import labelForChain from "./utils/labelForChain"
import ContractStatus from "./ContractStatus"

const Container = styled.div(
  ({ theme, chain }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    background: ${theme.colors[`${primaryColorForChain(chain)}Surface`]};
    height: 260px;
    width: 100vw;
    border-top-right-radius: ${theme.radii["2xLarge"]};
    border-top-left-radius: ${theme.radii["2xLarge"]};
    overflow: hidden;

    ${mq.sm.min(css`
      width: 100vw;
      max-width: 520px;
      border-bottom-left-radius: ${theme.radii["2xLarge"]};
      border-bottom-right-radius: ${theme.radii["2xLarge"]};
    `)}
  `
)

const Button = styled.button(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.space["2"]};
    right: ${theme.space["2"]};
    z-index: 1;
    padding: ${theme.space["2"]};
    border-radius: ${theme.radii.full};
    transition: all 300ms ease-in-out;

    svg {
      display: block;
    }

    :hover {
      transform: translateY(-1px);
      background: rgba(255,255,255, 0.4);
    }

  `
)

const Header = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.space["4"]};
    padding: ${theme.space["6"]};
  `
)

const HeaderContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["2"]};
  `
)

const LinkList = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["6"]};
  `
)

const Link = styled.a(
  ({ theme, chain }) => css`
  display: flex;
  align-items: center;
  gap: ${theme.space["1"]};
    color: ${theme.colors[`${primaryColorForChain(chain)}Primary`]};

    svg {
      width: 16px;
      height: 16px;
      color: blue;
      fill: blue;
      filter: invert(53%) sepia(19%) saturate(1623%) hue-rotate(111deg) brightness(89%) contrast(88%);
      opacity: 1;
    }
  `
)

const Footer = styled.div(
  ({ theme, chain }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.space["4"]};
    background: ${theme.colors.background};
    padding: ${theme.space["4"]} ${theme.space["6"]};
  `
)

const chainLabelForChain = chain => {
  if (chain === "ethereum") return "Ethereum Mainnet Contract"
  if (chain === "ens") return "ENS Chain Contract"
  if (chain === "offchain") return "Offchain Contract"
  throw new Error(`Unknown chain: ${chain}`)
}

export default function ContractModal({
  title,
  description,
  status,
  chain,
  githubUrl,
  docsUrl,
  open,
  onDismiss,
}) {
  return (
    <Modal open={open} onDismiss={onDismiss}>
      <Button onClick={onDismiss}>
          <CrossSVG />
      </Button>
      <Container chain={chain}>
        <Header>
          <HeaderContent>
            <Typography fontVariant="headingFour">{title}</Typography>
            {description && (
              <Typography fontVariant="body">{description}</Typography>
            )}
          </HeaderContent>
          <LinkList>
            {githubUrl && (
              <Link href={githubUrl} chain={chain}>
                <SocialGithub />
                <Typography fontVariant="bodyBold" color="inherit">Github</Typography>
              </Link>
            )}
            {docsUrl && (
              <Link href={docsUrl} chain={chain}>
                <InfoCircleSVG/>
                <Typography fontVariant="bodyBold" color="inherit">Learn more</Typography>
              </Link>
            )}
          </LinkList>
        </Header>
        <Footer chain={chain}>
          <Typography
            fontVariant="smallBold"
            color={`${primaryColorForChain(chain)}Primary`}
          >
            {labelForChain(chain)} Contract
          </Typography>
          <ContractStatus status={status} />
        </Footer>
      </Container>
    </Modal>
  )
}

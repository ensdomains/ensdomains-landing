import React from "react"
import styled, { css } from "styled-components"
import { InfoCircleSVG, Typography, mq } from "@ensdomains/thorin_next"
import ContractModal from "./ContractModal"
import ContractStatus from "./ContractStatus"
import ContractLinks from "./ContractLinks"

const Container = styled.div(
  ({ theme, $color }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.space.full};
    min-height: 130px;
    border-radius: ${theme.radii.large};
    background: ${theme.colors.blueSurface};
    overflow: hidden;
    border: 1px solid ${theme.colors.border};

    ${$color === "green" && css`
      background: ${theme.colors.greenSurface};
    `}
  `
)

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.space["3"]};
    gap: ${theme.space["6"]};
    flex: 1;
  `
)

const Footer = styled.div(
  ({ theme, $color }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.space["4"]};
    background: ${theme.colors.background};
    padding: ${theme.space["3"]};

    > :last-child {
      color: ${theme.colors[`${$color}Primary`]};
      width: 16px;
      height: 16px;
    }
  `
)

export default function ContractCard({
  title,
  color,
  status = 'research',
  githubUrl,
  docsUrl,
  links = [],
  phase,
  ...props
}) {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <React.Fragment>
      <Container $color={color} onClick={() => setShowModal(true)}>
        <Header>
          <Typography fontVariant="bodyBold" color="text">
            {title}
          </Typography>
          <ContractLinks links={links} color='text' hover={color}/>
        </Header>
        <Footer $color={color}>
          <ContractStatus status={status} />
          <InfoCircleSVG />
        </Footer>
      </Container>
      <ContractModal
        {...{ title, status, color, phase, links, ...props }}
        open={showModal}
        onDismiss={() => setShowModal(false)}
      />
    </React.Fragment>
  )
}

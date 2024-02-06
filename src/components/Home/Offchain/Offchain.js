import React from "react"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import { Anchor, AnchorContainer } from "../../Anchor"
import { H2, P } from "../../Typography"
import offchainImg from "./offchain.svg"

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding-top: 120px;
`

const Desc = styled(P)`
  text-align: center;
`

const Img = styled.img`
  max-width: 498px;
  width: 100%;
`

export default function Offchain() {
  const { t } = useTranslation()
  return (
    <Container id="home-offchain">
      <AnchorContainer href={"#home-offchain"}>
        <H2>
          {t("home.offchain.title")}
          <Anchor />
        </H2>
      </AnchorContainer>
      <Desc>{t("home.offchain.text")}</Desc>
      <Img src={offchainImg} alt="offchain illustration" />
    </Container>
  )
}

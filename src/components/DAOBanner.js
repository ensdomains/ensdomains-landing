import React from "react"

import styled from "@emotion/styled/macro"
import mq from "../mediaQuery"

import ENSIcon from "./Icons/ENSIcon.svg"
import Arrow from "./Icons/Arrow.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const LogoSmall = styled.img`
  width: 48px;
  height: 48px;
  padding: 10px;
  border-radius: 50%;
  margin: auto;
  display: block;
  background: linear-gradient(323.31deg, #de82ff -15.56%, #7f6aff 108.43%);
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
`

const Link = styled(`a`)`
  text-decoration: none;
`

const ArrowSmall = styled.img`
  height: 100%;
  margin: auto;
  display: block;
  width: 22px;
  color: #b3b3b3;
`

const BannerTitle = styled(`div`)`
  color: #0e0e0e;
  letter-spacing: -0.01em;
  font-weight: bold;
  font-size: 18px;
`

const BannerContent = styled(`div`)`
  color: #787878;
  font-size: 18px;
  margin-top: 2px;
  font-weight: 500;
  font-size: 15px;
`

export const MainPageBannerContainer = styled(`div`)`
  top: 97px;
  background: #ffffff;
  border-radius: 14px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  a {
    flex-grow: 1;
    display: grid;
    grid-template-columns: 73px 1fr 50px;
  }
  ${mq.medium`
    width: 700px;
  `}
`

const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export function DAOBannerContent() {
  const { t } = useTranslation()
  return (
    <Link target="_blank" rel="noreferrer" href="https://swag.ens.domains">
      <LogoSmall src={ENSIcon} />
      <BannerContentWrapper>
        <BannerTitle>{t("swag.title")}</BannerTitle>
        <BannerContent>{t("swag.description")}</BannerContent>
      </BannerContentWrapper>
      <ArrowSmall src={Arrow} />
    </Link>
  )
}

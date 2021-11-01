import React from "react"

import styled from '@emotion/styled/macro'
import mq from '../mediaQuery'

import { motion } from 'framer-motion'
import ENSIcon from './Icons/ENSIcon.svg'
import Arrow from './Icons/Arrow.svg'

const LogoSmall = styled(motion.img)`
  padding: 10px;
  border-radius: 50%;
  margin: auto;
  display: block;
  background: linear-gradient(
    330.4deg,
    #44bcf0 4.54%,
    #7298f8 59.2%,
    #a099ff 148.85%
  );
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
`

const ArrowLink = styled(`a`)``

const ArrowSmall = styled(motion.img)`
  height: 100%;
  margin: auto;
  display: block;
  width: 22px;
  color: #b3b3b3;
`

const BannerTitle = styled(`div`)`
  color: #0e0e0e;
  font-weight: bold;
  font-size: 18px;
`

const BannerContent = styled(`div`)`
  color: #787878;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 500;
  font-size: 15px;
`

export const MainPageBannerContainer = styled(`div`)`
  z-index:111111;
  position: absolute;
  top: 97px;
  background: #ffffff;
  border-radius: 14px;
  display: grid;
  padding: 15px 0px;
  grid-template-columns: 73px 1fr 50px;
  ${mq.medium`
    margin: auto;
    width: 750px;
    height: 50px;
  `}
`

export function DAOBannerContent() {
  return (
    <>
      <LogoSmall src={ENSIcon} />
      <div>
        <BannerTitle>ENS DAO: A Call for Delegates</BannerTitle>
        <BannerContent>
          ENS is decentralizing governance, and accepting submissions for delegates.
        </BannerContent>
      </div>
      <ArrowLink target="_blank" rel="noreferrer" href="https://ens.mirror.xyz">
        <ArrowSmall src={Arrow} />
      </ArrowLink>
    </>
  )
}

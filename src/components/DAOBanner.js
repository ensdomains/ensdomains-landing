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

const Link = styled(`a`)`
  text-decoration: none;
`

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
  z-index:9000;
  position: absolute;
  top: 97px;
  background: #ffffff;
  border-radius: 14px;
  padding: 15px 0px;
  a {
    display: grid;
    grid-template-columns: 73px 1fr 50px;
  }
  ${mq.medium`
    margin: auto;
    width: 750px;
    height: 50px;
  `}
`

export function DAOBannerContent() {
  return (
    <Link target="_blank" rel="noreferrer" href="https://ens.mirror.xyz/5cGl-Y37aTxtokdWk21qlULmE1aSM_NuX9fstbOPoWU">
      <LogoSmall src={ENSIcon} />
      <div>
        <BannerTitle>$ENS Now Available for Claiming.</BannerTitle>
        <BannerContent>
          Claim your $ENS and participate in ENS governance.
        </BannerContent>
      </div>
      <ArrowSmall src={Arrow} />
    </Link>
  )
}

import React, { useRef } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "@emotion/styled"
import { H2, P } from "../../Typography"
import { importAll } from "../../../utils"
import wallet from "./wallet.svg"

import mq from "../../../mediaQuery"

const HeroContainer = styled("div")`
  padding: 120px 20px;
  background: white;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Wrapper = styled("div")`
  max-width: 800px;
`

const WalletAnimation = styled("div")`
  display: flex;
  width: 500%;
  overflow: hidden;
  position: relative;
  &:before {
    display: block;
    content: "";
    height: 100%;
    width: 4px;
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  &:after {
    display: block;
    content: "";
    height: 3px;
    width: 10px;
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  .wallet {
    position: relative;
    z-index: 10;
  }
`
const Coins = styled(motion.div)`
  position: relative;
  img {
    height: 100px;
    margin-right: 20px;
  }
  width: 500%;
`

const rawCoins = importAll(
  require.context("./coins", false, /\.(png|jpe?g|svg)$/)
)
const coins = [...rawCoins, ...rawCoins, ...rawCoins, ...rawCoins, ...rawCoins]

export default function Cryptocurrencies(props) {
  const { scrollYProgress } = useViewportScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])
  return (
    <HeroContainer>
      <Wrapper>
        <H2>One Name For All of Your Cryptocurrencies</H2>
        <P>
          No more copying and pasting long addresses. Use your ENS name to store
          all of your addresses and receive payments in any cryptocurrency
        </P>

        <WalletAnimation>
          <img className="wallet" src={wallet} />
          <Coins style={{ x: x }}>
            {coins.map(coin => {
              return <img src={coin.src} />
            })}
          </Coins>
        </WalletAnimation>
      </Wrapper>
    </HeroContainer>
  )
}

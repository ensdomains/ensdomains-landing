import React, { useRef } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "@emotion/styled"
import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import wallet from "./wallet.svg"

const HeroContainer = styled("div")`
  padding: 120px 20px;
  background: white;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Wrapper = styled("div")`
  max-width: 800px;

  p {
    font-size: 28px;
    font-weight: 100;
    text-align: center;
  }
`

const WalletAnimation = styled("div")`
  display: flex;
  width: 500%;
  overflow: hidden;

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
  const x = useTransform(scrollYProgress, [0, 1], [-700, 1000])
  return (
    <HeroContainer>
      <Wrapper>
        <H2>One Name For All of Your Cryptocurrencies</H2>
        <p>
          No more copying and pasting long addresses. Whether it’s ETH, BTC, or
          others, use your ENS name to receive payments and store all of your
          addresses.
        </p>
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

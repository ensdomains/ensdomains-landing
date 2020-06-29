import React, { useRef, useLayoutEffect } from "react"
import {
  motion,
  useViewportScroll,
  transform,
  useTransform,
} from "framer-motion"
import styled from "@emotion/styled"
import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import wallet from "./wallet.svg"

const HeroContainer = styled("div")`
  padding: 120px 0;
  background: white;
  display: flex;
  justify-content: center;
`

const Wrapper = styled("div")`
  max-width: 800px;

  p {
    font-size: 28px;
    font-weight: 100;
    text-align: center;
  }
`

const WalletAnimation = styled("div")``
const Coins = styled(motion.div)`
  img {
    height: 100px;
    margin-right: 10px;
  }
  width: 500%;
`

const rawCoins = importAll(
  require.context("./coins", false, /\.(png|jpe?g|svg)$/)
)
const coins = [...rawCoins, ...rawCoins]

export default function Cryptocurrencies(props) {
  const { scrollYProgress } = useViewportScroll()
  const x = useTransform(scrollYProgress, [0, 1], [-300, 1000])
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
          <img src={wallet} />
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

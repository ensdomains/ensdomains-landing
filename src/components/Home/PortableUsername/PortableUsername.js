import React, { useRef, useEffect, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { H2, P as DefaultP } from "../../Typography"
import { importAll, Gap } from "../../../utils"
import { Anchor, AnchorContainer } from '../../Anchor'

import brantly from './brantly.png'
import avatar from './avatar.png'

const HeroContainer = styled("div")`
  padding: 120px 20px;
  background: white;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Wrapper = styled("div")`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const P = styled(DefaultP)`
  text-align: center;
  margin: 0;
`

const AvatarContainer = styled('div')`
  width: 360px;
  height: 82px;
  border-radius: 41px;
  border: 1px solid #D8D8D8;
  position: relative;
`

 const AvatarContainerInner = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 30px;
 `

const AvatarImg = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`

const AvatarText = styled('div')`
  font-size: 50px;
  font-weight: 300;
`

const Avatar = () => {
  const containerRefOne = useRef()
  const containerRefTwo = useRef()

  useEffect(() => {
    window.onscroll = () => {
      window.requestAnimationFrame(() => {
        const containerOneTop = containerRefOne.current.getBoundingClientRect().top
        const opacity = ((containerOneTop - window.innerHeight/3) - window.innerHeight/4)/(window.innerHeight)*4
        const opacityTwo = (1 - opacity) - 1
        containerRefOne.current.style.opacity = opacity;
        containerRefTwo.current.style.opacity = opacityTwo;
      })
    }
  }, [])

  return (
   <AvatarContainer>
     <AvatarContainerInner ref={containerRefOne}>
       <AvatarImg src={avatar} />
       <AvatarText>0x98...674</AvatarText>
     </AvatarContainerInner>
     <AvatarContainerInner ref={containerRefTwo}>
       <AvatarImg src={brantly} />
      <AvatarText style={{ marginBottom: '4px' }}>brantly.eth</AvatarText>
     </AvatarContainerInner>
   </AvatarContainer>
  )
}

const rawCoins = importAll(
  require.context("./coins", false, /\.(png|jpe?g|svg)$/)
)
const coins = [...rawCoins, ...rawCoins, ...rawCoins]

export default function PortableUsername(props) {
  const { t } = useTranslation()
  return (
      <HeroContainer id='portable-title'>
        <Wrapper>
          <AnchorContainer href={'#portable-title'}>
            <H2>{t("home.portableUsername.title")}<Anchor /></H2>
          </AnchorContainer>
          <P>{t("home.portableUsername.text")}</P>
          <Gap size={10} />
          <Avatar />
        </Wrapper>
      </HeroContainer>
  )
}

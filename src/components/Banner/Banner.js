import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import StopParentIcon from "./StopParent"

const Container = styled("a")`
  height: 110px;
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

const LearnMore = styled.div`
  color: #5298ff;
`

const UpRightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 96 96"
    width="12"
    height="12"
    style={{ position: "relative", bottom: "-2px" }}
  >
    <path
      fill="currentColor"
      d="M24 12a6 6 0 0 0 0 12h39.515L13.757 73.757a6 6 0 1 0 8.486 8.486L72 32.485V72a6 6 0 0 0 12 0V19c0-.175-.006-.349-.02-.52a5.986 5.986 0 0 0-1.737-4.723 5.987 5.987 0 0 0-4.722-1.738A7.065 7.065 0 0 0 77 12H24Z"
    />
  </svg>
)

const TextContainer = styled("div")`
  text-align: center;
  margin-top: 16px;
`

export default function Banner() {
  return (
    <Container href="https://blog.ens.domains/post/beginners-guide-to-ethereum-and-ens">
      <StopParentIcon />
      <TextContainer>
        <div>Link your GoDaddy domains to ENS, without any gas!</div>
        <LearnMore>
          Learn More <UpRightArrow />
        </LearnMore>
      </TextContainer>
    </Container>
  )
}

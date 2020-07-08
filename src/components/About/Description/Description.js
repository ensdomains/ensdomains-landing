import React from "react"
import styled from "@emotion/styled"
import mq from "../../../mediaQuery"
import { Button } from "../../Typography"

const Description = styled("div")`
  display: flex;
  justify-content: center;
  padding: 120px 20px;
`

const DescriptionInner = styled("div")`
  background: white;
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  ${mq.medium`
    grid-template-columns: 1fr 2.7fr;
    grid-gap: 50px;
  `}

  p {
    font-family: Overpass;
    font-weight: 200;
    font-size: 18px;
    color: #2b2b2b;
    line-height: 38px;
    margin: 0;

    ${mq.medium`
      font-size: 28px;
    `};
  }

  h2 {
    font-family: Karma;
    font-weight: 200;
    font-size: 24px;
    color: #2b2b2b;
    line-height: 56px;
    margin: 0;

    ${mq.medium`
      font-size: 42px;
    `};
  }
`

const members = [
  { name: "Nick Johnson", company: "ENS" },
  { name: "Sergey Nazarov", company: "Chainlink" },
  { name: "Dan Finlay", company: "Metamask" },
  { name: "Taylor Monahan", company: "MyCrypto" },
  { name: "Aron Fischer", company: "Colony" },
  { name: "Piper Merriam", company: "Ethereum Foundation" },
  { name: "Jarrad Hope", company: "Status" },
]

const Members = styled("dl")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 20px;

  ${mq.small`
    grid-template-columns: 1fr 1fr;
  `}
`
const Member = styled("div")`
  display: flex;
  flex-direction: column;

  dt {
    font-family: Karma;
    font-weight: 200;
    font-size: 34px;
    color: #2b2b2b;
    line-height: 42px;
    text-align: center;

    ${mq.small`
      font-size: 44px;
      text-align: left;
    `}
  }

  dd {
    margin: 0;
    font-family: Karma;
    font-weight: 200;
    font-size: 18px;
    color: #2b2b2b;
    line-height: 42px;
    text-align: center;

    ${mq.small`
      font-size: 24px;
      text-align: left;
    `}
  }
`

const LearnMore = styled(Button)`
  display: inline-flex;
  margin: 20px 0 40px;
`

export default function AboutDescription(props) {
  return (
    <Description>
      <DescriptionInner>
        <h2>Benefits of Ethereum</h2>
        <div>
          <p>
            Though it supports a wide range of non-Ethereum assets, ENS runs
            exclusively on the Ethereum blockchain. ENS brings the benefits of
            decentralization, security, censorship-resistance, and
            programmability of the Ethereum blockchain to Internet naming.
          </p>

          <p>
            This enables revolutionary new features like blockchain-native names
            can’t be seized, they become legos in the greater Ethereum
            smart-contract ecosystem, and more.
          </p>
          <LearnMore href="https://medium.com/the-ethereum-name-service/why-ens-uses-ethereum-and-eth-not-a-bespoke-blockchain-and-token-36f86727e71f">
            Learn more
          </LearnMore>
        </div>
        <h2>Managing the ENS root</h2>
        <p>
          To facilitate the possibility of upgrades and maintenance, and in
          exceptional circumstances to handle problems with ENS, the ENS root is
          initially owned by a four of seven multisig, with members of the
          Ethereum community as keyholders. In the long term, we would like the
          root multisig to be replaced by some form of distributed decision
          making process, as such systems become available.
        </p>
        <div />
        <Members>
          {members.map(member => (
            <Member>
              <dt>{member.name}</dt> <dd>{member.company}</dd>
            </Member>
          ))}
        </Members>
      </DescriptionInner>
    </Description>
  )
}

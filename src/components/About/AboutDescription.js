import React from "react"
import styled from "@emotion/styled"

const Description = styled("footer")`
  background: white;
`

const members = [
  { name: "Nick Johnson", company: "ENS" },
  { name: "Vlad Zamfir", company: "Ethereum Foundation" },
  { name: "Dan Finlay", company: "Metamask" },
  { name: "Taylor Monahan", company: "MyCrypto" },
  { name: "Aron Fischer", company: "Colony" },
  { name: "Piper Merriam", company: "Ethereum Foundation" },
  { name: "Jarrad Hope", company: "Status" },
]

const Members = styled("ul")``
const Member = styled("li")``

export default function AboutDescription(props) {
  return (
    <Description>
      <h2>Benefits of Ethereum</h2>
      <p>
        Though it supports a wide range of non-Ethereum assets, ENS runs
        exclusively on the Ethereum blockchain. ENS brings the benefits of
        decentralization, security, censorship-resistance, and programmability
        of the Ethereum blockchain to Internet naming.
      </p>
      <p>
        This enables revolutionary new features: blockchain-native names can’t
        be seized, they become legos in the greater Ethereum smart-contract
        ecosystem.
      </p>
      <h2>Managing the ENS root</h2>
      <p>
        To facilitate the possibility of upgrades and maintenance, and in
        exceptional circumstances to handle problems with ENS, the ENS root is
        initially owned by a four of seven multisig, with members of the
        Ethereum community as keyholders. In the long term, we would like the
        root multisig to be replaced by some form of distributed decision making
        process, as such systems become available.
      </p>
      <Members>
        {members.map(member => (
          <Member>
            {member.name} - {member.company}
          </Member>
        ))}
      </Members>
    </Description>
  )
}

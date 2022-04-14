import React from "react"
import styled from "@emotion/styled"

import mq from "../../mediaQuery"
import {AnchorContainer} from "../Anchor"
import {H2} from "../Typography"


const AboutJobsContainer = styled("div")`
  background: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.medium`
    padding-top: 80px;
  `};

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: center;
  }

  p.prelede {
    font-family: Karma;
    font-size: 24px;
    color: #2b2b2b;
    font-weight: 200;
    text-align: center;
    line-height: 1.3em;
    max-width: 850px;
    padding: 0 20px;
  }
`

export default function AboutJobs() {
    return (
        <AboutJobsContainer id="about-ens">
            <H2 style={{paddingBottom: 20}}>Job Opportunities</H2>
            <AnchorContainer href={"#about-ens"}>
                <h3>
                    About True Names Ltd
                </h3>
            </AnchorContainer>
            <p className="prelede">
                Started at the Ethereum Foundation in early 2017, ENS spun off with a separate organization in 2018. ENS
                development is managed by the Singaporean non-profit True Names LTD and is a public good, a basic piece
                of Internet infrastructure that belongs to the community.
            </p>
            <p className="prelede">
                ENS is DNS for the web3 space. ENS domains are a superset of DNS, allowing attaching human-readable
                names to websites. However, the use cases are virtually limitless, such as simplifying sending
                cryptocurrency, storing an avatar and profile information (think gravatar) that web3 apps will pick up
                and use automatically.
            </p>
            <p className="prelede">
                Best of all, the protocol is decentralised, censorship-resistant, and owned by anyone that holds the
                $ENS token. Ultimately we think of an ENS name as a web3 username, the first step into the metaverse.
            </p>
            <p className="prelede">
                We’re always looking for talented people to expand the team. Please email your CV and cover letter to <a
                href="mailto:jobs@ens.domains">jobs@ens.domains</a>.
            </p>
            <p className="prelede">
                Here are the opportunities we currently have open:
            </p>
        </AboutJobsContainer>
    )
}

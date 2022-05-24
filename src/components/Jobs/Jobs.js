import React from "react"
import styled from "@emotion/styled"

const JobContainer = styled("div")`
  background: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: left;
  }

  p {
    font-family: Karma;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: 200;
    text-align: left;
    line-height: 1.3em;
    max-width: 720px;
    padding: 0 20px;
    width: 100%;
  }
`

export default function Jobs() {
  return (
    <>
      <JobContainer style={{ paddingBottom: 150 }}>
        <h3 id="senior-designer">Senior Web UI/UX Designer</h3>
        <p>
          We view ourselves as the 'soft wrapper' around ethereum, helping to make it much easier to use, and this idea
          is the inspiration for our logo. A large part of achieving this goal revolves around the UI/UX of our applications.
          We are currently undergoing a complete redesign of all of our user facing applications and are looking
          for a designer to come on board and help us complete this thus helping to make the blockchain more accessible.
        </p>
        <p>
          What you'll be doing:
          <ul>
            <li>
              Creating effective UI/UX design for something that is brand new to most people, helping to onboard non-crypto natives into the next version of the web.
            </li>
            <li>
              Working closely with the app team who will be ready and eager to implement your designs.
            </li>
            <li>
              Creating a Design System that will allow for efficient creation of new pages and allow for people outside of the team to create great-looking web3 apps.
            </li>
            <li>
              Building and creating many flows from scratch, solving UI/UX problems that have never been solved before. There is an opportunity here to set the trend for how things are done in web3 for years to come.
            </li>
          </ul>
        </p>
        <p>
          What we are looking for:
          <ul>
            <li>
              Intrinsic motivation and good time management. We are a fully remote team and trust everyone to work without needing to be micro-managed.
            </li>
            <li>
              Someone who is excited by the prospect of breaking new ground, unlike web2 the best UI/UX solutions in web3 have yet to be designed/built.
            </li>
            <li>
              Experience in creating and maintaining a Design System.
            </li>
            <li>
              Good knowledge of responsive web design patterns and UX best practices.
            </li>
            <li>
              Strong verbal and written English communication skills.
            </li>
            <li>
              Someone who is open to sharing work in progress and comfortable with taking constructive input from the team. This will be particularly important if you are not familiar with the web3 space.
            </li>
            <li>
              Experience or evidence of ability to lead junior and mid-level designers.
            </li>
          </ul>
        </p>
        <p>
          Nice to haves:
          <ul>
            <li>
              Experience with Figma/InVision.
            </li>
            <li>
              Someone who has knowledge of the blockchain/web3 space and the unique design challenges that it presents.
            </li>
            <li>
              Experience working remotely with a team located in many different time zones.
            </li>
          </ul>
        </p>
      </JobContainer>
    </>
  )
}

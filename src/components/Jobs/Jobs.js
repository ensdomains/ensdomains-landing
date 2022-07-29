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
  }

  h4 {
    font-family: Overpass;
    width: 100%;
    max-width: 720px;
    padding: 0 20px;
    font-weight: bold;
  }

  p, section {
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
          <h3 id="senior-designer">Project Manager (Part Time)</h3>
          <section>
            <h4>About the role:</h4>
            <p>As Project Manager (part time - 20 hours per week), you will join the TNL team at a critical point in our history. We are off to the races to improve and advance the Ethereum Name Service as the premier web3 naming protocol. You will support our frontend and backend teams by removing roadblocks and ensuring that we upgrade our effectiveness.</p>
          </section>
          <section>
            <h4>About the team:</h4>
            <p>
            TNL believes in hiring top quality talent and then giving them broad authority to move things forward as they see fit. You will be working with a global team that has a myriad of backgrounds and experiences. People who have worked at the biggest tech companies and the smallest startups, crypto veterans and relative newcomers, colleagues who have been entrepreneurs in their own right and those who have worked in the public and private sectors. If you’re the type of person who gets excited about creating the future you’ll fit right in.
            </p>
          </section>
          <section>
            <h4>What you&#x2019;ll do:</h4>
            <ul>
              <li>Energetically lead and ensure that the teams build and ship according to agreed upon expectations.</li>
              <li>Manage risks, assumptions, issues, and dependencies between teams and projects, both internal and external.</li>
              <li>Improve our processes and speed with an eye toward team member satisfaction and product quality for end users.</li>
              <li>Actively remove roadblocks for developers and designers.</li>
            </ul>
          </section>
          <section>
            <h4>Who we&#x2019;re looking for:</h4>
            <ul>
              <li>Working experience as a developer, or 4+ years of experience working directly with developers as a product manager or project manager in the technology field.</li>
              <li>Extensive experience leading, coordinating, and facilitating software teams and sprints.</li>
              <li>Strong organization and documentation skills and an ability to gather requirements, acceptance criteria, etc.</li>
              <li>Experience guiding team members in adopting processes in ways that meet their unique needs iteratively.</li>
              <li>Experience with using Github.</li>
              <li>Familiarity with blockchain products, and an eagerness to learn more.</li>
            </ul>
          </section>
          <section>
            <h4>Nice to haves:</h4>
            <ul>
              <li>Working experience in web3 development (i.e. Solidity experience)</li>
              <li>You're a practicing Scrum Master and/or Project Manager for the last 3+ years</li>
              <li>You're a certified Agile practitioner (e.g. CSM, CSPO, PMI-ACP, etc)</li>
              <li>You're a certified PMP</li>
              <li>You're an ENS user!</li>
            </ul>
          </section>
      </JobContainer>
    </>
  )
}

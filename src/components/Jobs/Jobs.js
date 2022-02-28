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
      <JobContainer>
        <h3>General Manager</h3>
        <p>
          After recently undergoing a ‘decentralisation event’ and the formation of a community-managed DAO to handle
          the governance of the ENS protocol, True Names is looking for a General Manager to help direct TNL’s future
          efforts.
        </p>
        <p>
          Reporting to the Board of Directors, the General Manager contributes to the execution of TNL’s strategy and
          day-to-day operations. They are primarily focused on managing and supervising the work and helping ensure
          everyone is fulfilling their job responsibilities and are acting in a manner consistent with supporting the
          long-term vision for ENS and True Names Limited.
        </p>
        <p>
          Their responsibilities will include:
          <ul>
            <li>
              Developing organizational growth strategies.
            </li>
            <li>
              Deciding on the company’s organizational structure, and the number of departments and employees needed.
            </li>
            <li>
              Determining where a need exists for additional staff, and assisting senior staff with the recruitment
              process.
            </li>
            <li>
              Creating and conducting presentations for stakeholders.
            </li>
            <li>
              Creating organizational policies that encourage transparency, clear communication, client and employee
              satisfaction, and high productivity.
            </li>
            <li>
              Developing and maintaining relationships with subcontractors, suppliers, and regulators for the industry.
            </li>
            <li>
              Developing and implementing budgetary and accounting best practices for the organisation.
            </li>
            <li>
              Communicating transparently with the ENS DAO and ensuring the community’s needs are reflected in TNL’s
              goals and objectives.
            </li>
          </ul>
        </p>
        <p>
          An ideal candidate will have:
          <ul>
            <li>
              Exceptional written and verbal communication skills.
            </li>
            <li>
              Strong presentation skills, and the ability to address audiences ranging from boards of directors to
              community members.
            </li>
            <li>
              The ability to work under pressure and adapt quickly to unforeseen situations and events.
            </li>
            <li>
              Excellent planning and organizational skills.
            </li>
            <li>
              The ability to lead and motivate employees at every level.
            </li>
            <li>
              Thorough familiarity with social media, industry publications, and common vendors and subcontractors.
            </li>
            <li>
              The ability to create and administer a budget.
            </li>
            <li>
              The ability to analyze financials.
            </li>
            <li>
              A 5+ year track record of leading organizations in the tech sector. Experience as top leadership is an
              asset. Experience as a top leader in a non-profit environment is very desirable.
            </li>
            <li>
              Experience managing a remote/distributed team or organisation.
            </li>
          </ul>
        </p>
      </JobContainer>

      <JobContainer style={{ paddingBottom: 150 }}>
        <h3>Lead Developer Advocate</h3>
        <p>
          ENS is only as useful as the number of places you can use it. It’ll be this person’s job to take ENS from +400
          integrations to thousands, help us improve our documentation, manage libraries, help projects integrate ENS,
          and make it as easy as possible for others to integrate ENS. Must be both technical and socially adept.
        </p>
        <p>
          Their responsibilities will include:
          <ul>
            <li>
              Revamping our developer experience to be best-of-class, including:
              <ul>
                <li>Building a new onboarding experience</li>
                <li>Rewriting and expanding our documentation for developers</li>
              </ul>
            </li>
            <li>
              Writing and maintaining developer tools and libraries as the need for them is identified.
            </li>
            <li>
              Outreach to the developer community, both online and in person.
            </li>
            <li>
              Working with wallets and apps to help them integrate ENS.
            </li>
            <li>
              Communicating with and helping individual developers via Twitter, Discord, Email and other venues.
            </li>
            <li>
              Acting as an advocate for external developers to the ENS team, to ensure we build tools that best meet the
              needs of external developers.
            </li>
          </ul>
        </p>
        <p>
          An ideal candidate will have:
          <ul>
            <li>
              Significant past experience in a Developer Advocate role, ideally as the lead DA for a project or product.
            </li>
            <li>
              Strong technical skills and fluency in several programming languages.
            </li>
            <li>
              A strong vision for what makes an excellent developer experience, and the skills to execute on this
              vision.
            </li>
            <li>
              Experience working with external developers to guide them through building API integrations.
            </li>
            <li>
              Excellent written and verbal communication skills.
            </li>
            <li>
              A talent for explaining complex concepts in a straightforward and engaging way.
            </li>
          </ul>
        </p>
      </JobContainer>
    </>
  )
}

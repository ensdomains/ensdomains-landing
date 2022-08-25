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

  p,
  section {
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

const jobArray = [
  {
    title: "Community Manager",
    items: [
      {
        heading: "About the role",
        content:
          "As Community Manager, you will be focused on facilitating community engagement through content creation, designing and executing a social media strategy, and being a bridge between TNL and the ENS community.",
      },
      {
        heading: "About the team",
        content:
          "TNL believes in hiring top quality talent and then giving them broad authority to move things forward as they see fit. You will be working with a global team that has a myriad of backgrounds and experiences. People who have worked at the biggest tech companies and the smallest startups, crypto veterans and relative newcomers, colleagues who have been entrepreneurs in their own right and those who have worked in the public and private sectors. If you’re the type of person who gets excited about creating the future you’ll fit right in.",
      },
      {
        heading: "About you",
        content:
          "You're interested in the web3 community and have ideas on how identity and naming can become an important narrative in the space. You have experience building and managing a community or brand. You should be energetic, charismatic and able to build relationships across the breadth of the ENS community.",
      },
      {
        heading: "What you'll do",
        items: [
          "Drive marketing campaigns to educate the ENS community and drive increase adoption.",
          "Manage social media accounts and prepare social content calendars.",
          "Generate, edit, publish and share engaging content daily.",
          "Work with the team to produce product marketing content including blog posts, newsletter, documentation, guides, tutorials, FAQs, etc.",
          "Organize community-focused initiatives both online and IRL on a regular basis and as needed, with the goals of disseminating important information, building relationships throughout the community, and facilitating important strategic discussions.",
          "Build strong relationships with community members across a variety of platforms.",
          "Be positive, optimistic, creative, and diplomatic in managing multiple stakeholder interests in community discussions.",
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          "Experience building, growing and leading communities.",
          "Excellent communication skills: you have experience tailoring messages across audiences and platforms quickly and efficiently.",
          "Empathy for people and High EQ, a love for building relationships and camaraderie.",
          "Strong written communication skills, copywriting skills, and the ability to synthesize complex information into clear and concise posts.",
        ],
      },
      {
        heading: "Nice to haves",
        items: [
          "Involvement in Web3, open source, or other relevant ecosystems.",
          "Ability to travel for conferences and/or IRL events.",
        ],
      },
    ],
  },
]

export default function Jobs() {
  return (
    <>
      {jobArray.length === 0 ? (
        <JobContainer style={{ paddingBottom: 150 }}>
          <h3>We do not have any openings at this time.</h3>
        </JobContainer>
      ) : (
        jobArray.map(job => (
          <JobContainer key={job.title}>
            <h3>{job.title}</h3>
            {job.items.map(item => (
              <section key={item.heading}>
                <h4>{item.heading}</h4>
                {item.content && <p>{item.content}</p>}
                {item.items && (
                  <ul>
                    {item.items.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </JobContainer>
        ))
      )}
    </>
  )
}

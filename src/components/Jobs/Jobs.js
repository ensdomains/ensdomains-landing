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

const jobArray = []

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

import React from "react"
import styled, { css } from "styled-components"

import { Typography, mq } from "@ensdomains/thorin_next"

import SocialDiscord from "../../assets/social/SocialDiscord.svg"
import SocialDiscourse from "../../assets/social/SocialDiscourse.svg"
import SocialDiscourseColour from "../../assets/social/SocialDiscourseColour.svg"
import SocialGithub from "../../assets/social/SocialGithub.svg"
import SocialMirror from "../../assets/social/SocialMirror.svg"
import SocialMirrorColour from "../../assets/social/SocialMirrorColour.svg"
import SocialTwitter from "../../assets/social/SocialTwitter.svg"
import SocialYoutube from "../../assets/social/SocialYoutube.svg"
import SocialIcon from "./SocialIcon"

const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: ${theme.colors.background};

    padding: ${theme.space["4"]};
    gap: ${theme.space["2"]};

    ${mq.sm.min(css`
      padding: 0;
      gap: 0;
      & > div {
        border-bottom: 1px solid ${theme.colors.border};
      }

      & > div:last-child {
        border-bottom: none;
      }
    `)}
  `
)

const miscSectionStyle = css(
  ({ theme }) => css`
    background-color: ${theme.colors.greySurface};
    border-radius: ${theme.radii.large};

    ${mq.sm.min(css`
      background-color: transparent;
      border-radius: none;
    `)}
  `
)

const RoutesSection = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.space["2"]};

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `,
  miscSectionStyle
)

const RouteItem = styled.a(
  ({ theme }) => css`
    transition: all 0.1s ease-in-out;
    text-align: left;
    padding: ${theme.space["2"]} ${theme.space["2"]};
    border-radius: ${theme.radii.large};

    &:hover {
      background-color: ${theme.colors.greySurface};
    }

    ${mq.sm.min(css`
      padding: ${theme.space["2"]} ${theme.space["4"]};
    `)}
  `
)

const SocialSection = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space["4"]} ${theme.space["6"]};
  `,
  miscSectionStyle
)

export default function MainMenu() {
  return (
    <Container>
      <RoutesSection>
        <RouteItem href="https://app.ens.domains" target="_blank">
          <Typography>ENS Manager</Typography>
        </RouteItem>
        <RouteItem href="https://chat.ens.domains" target="_blank">
          <Typography>Community</Typography>
        </RouteItem>
        <RouteItem href="https://support.ens.domains" target="_blank">
          <Typography>Support</Typography>
        </RouteItem>
        <RouteItem href="https://ensdao.org" target="_blank">
          <Typography>Governance</Typography>
        </RouteItem>
      </RoutesSection>
      <SocialSection>
        <SocialIcon
          Icon={SocialTwitter}
          color="#5298FF"
          href="https://x.com/ensdomains"
        />
        <SocialIcon
          Icon={SocialGithub}
          color="#0F0F0F"
          href="https://github.com/ensdomains"
        />
        <SocialIcon
          Icon={SocialDiscord}
          color="#7F83FF"
          href="https://chat.ens.domains"
        />
        <SocialIcon
          Icon={SocialMirror}
          ColoredIcon={SocialMirrorColour}
          href="https://ens.mirror.xyz"
        />
        <SocialIcon
          Icon={SocialDiscourse}
          ColoredIcon={SocialDiscourseColour}
          href="https://discuss.ens.domains/"
        />
        <SocialIcon
          Icon={SocialYoutube}
          color="#EE1919"
          href="https://www.youtube.com/ensdomains"
        />
      </SocialSection>
    </Container>
  )
}

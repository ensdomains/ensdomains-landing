import { motion, AnimatePresence } from "framer-motion"
import styled from "@emotion/styled"
import React, { useState } from "react"

import { Link, useI18next, I18nextContext } from "gatsby-plugin-react-i18next"

import RotatingSmallCaret from "./Icons/RotatingSmallCaret"

const LANGUAGES = [
  {
    value: "en",
    label: "English (EN)",
  },
  {
    value: "cn",
    label: "简体中文 (CN)",
  },
  {
    value: "ja",
    label: "日本語 (JA)",
  },
  {
    value: "de",
    label: "Deutsch (DE)",
  },
  {
    value: "es",
    label: "Español (ES)",
  },
  {
    value: "fr",
    label: "Français (FR)",
  },
  {
    value: "ko",
    label: "한국어 (KO)",
  },
  {
    value: "it",
    label: "Italiano (IT)",
  },
  {
    value: "nl",
    label: "Nederlands (NL)",
  },
  {
    value: "pl",
    label: "Polski (PL)",
  },
  {
    value: "pt",
    label: "Português (PT)",
  },
  {
    value: "ru",
    label: "Pусский (RU)",
  },
  {
    value: "vi",
    label: "Tiếng Việt (VI)",
  },
]

const ActiveLanguage = styled("div")`
  color: #2b2b2b;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  align-items: center;

  ${props =>
    props.mobile
      ? `
      font-size: 14px;
      border-bottom: 1px solid #5F698F;
      padding: 20px 0;
      background: #384473;
  `
      : ``}
  span {
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`

const LanguageSwitcherContainer = styled("div")`
  position: relative;
  background: white;
  padding-right: 0px;
  margin-right: 12px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  ${props =>
    props.mobile
      ? `
    width: 100%;
  `
      : ``}
`

const Dropdown = styled(motion.div)`
  ${props =>
    props.mobile
      ? `
        position: relative; 
      `
      : `
        position: absolute;
        background: white;
        top: 100%;
        right: 0;
        margin-top: 20px;
        border-radius: 16px;
        box-shadow: -4px 18px 70px 0 rgba(0, 0, 0, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 240px;
        max-height: 400px;
        overflow: scroll;
      `}

  ${props =>
    props.mobile
      ? `

      a {
        box-sizing: border-box;
        background: #384473;
        border-bottom: 1px solid #5F698F;
        padding: 15px 20px;
        font-size: 14px;
        width: 100%;
        display: flex;
        justify-content: center;
        span {
          margin-left: auto;
          margin-right: auto;
        }
      }
  `
      : `
    a {
      font-family: JakartaSans;
      text-decoration: none;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.01em;
      color: #717171;
      padding: 20px 30px 20px 30px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 0px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      transition: all 0.2s ease-in-out;
      
      &:hover {
        color: #2b2b2b;
        cursor: pointer;
        div {
          /* ball */
          background: #5284ff;
        }
      }
      &:last-child {
        border-bottom: none;
        padding-right: 30px;
      }
    }
  `}
`

const Ball = styled("div")`
  border-radius: 50%;
  background: white;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 3px white, 0 0 0 4px #5284ff;
  ${p =>
    p.selected &&
    `
    background: #5284ff;
  `}
`

const LanguageLabel = styled("span")`
  font-family: JakartaSans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #717171;
  opacity: 0.6;
`

export default function LanguageSwitcher({ mobile }) {
  const context = React.useContext(I18nextContext)
  const lang = context.language ? context.language : context.defaultLanguage
  const [showDropdown, setShowDropdown] = useState(false)
  const { originalPath } = useI18next()
  const selectedLanguage = LANGUAGES.find(l => l.value === lang)

  return (
    <LanguageSwitcherContainer mobile={mobile}>
      <ActiveLanguage
        mobile={mobile}
        onClick={() => setShowDropdown(show => !show)}
      >
        <LanguageLabel>
          {mobile ? selectedLanguage.label : selectedLanguage.value}
        </LanguageLabel>
        <RotatingSmallCaret
          start="top"
          rotated={showDropdown}
          highlight={true}
        />
      </ActiveLanguage>
      {showDropdown && (
        <AnimatePresence>
          <Dropdown
            mobile={mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {LANGUAGES.map(language => {
              return (
                <Link to={originalPath} language={language.value}>
                  <span css={{ paddingRight: "12px" }}>{language.label}</span>
                  <Ball selected={selectedLanguage.value === language.value} />
                </Link>
              )
            })}
          </Dropdown>
        </AnimatePresence>
      )}
    </LanguageSwitcherContainer>
  )
}

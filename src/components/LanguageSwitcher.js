import { motion, AnimatePresence } from "framer-motion"
import styled from "@emotion/styled"
import React, { useState, useContext } from "react"
import { useTranslation } from "react-i18next"

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
    value: "ru",
    label: "Pусский (RU)",
  },
  {
    value: "vi",
    label: "Tiếng Việt (VI)",
  },
]

function getLang(lang) {
  return LANGUAGES.find(l => l.value === lang)
}

const ActiveLanguage = styled("div")`
  color: white;
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
        border-radius: 8px;
        box-shadow: -4px 18px 70px 0 rgba(108, 143, 167, 0.32);
        width: 230px;
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
      color: #adbbcd;
      padding: 20px 30px;
      border-bottom: 1px solid #dfdfdf;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
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
        <span>{mobile ? selectedLanguage.label : selectedLanguage.value}</span>
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
                  <span>{language.label}</span>
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

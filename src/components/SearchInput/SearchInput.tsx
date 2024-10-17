'use client'

import { clsx } from 'clsx'

import ui from '~/styles/ui.module.css'
import { ArrowRightIcon, SearchIcon } from '../icons'
import styles from './SearchInput.module.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '~/utils/useDebounce'
import { ExternalLink } from 'react-external-link'
import { checkBoxAvailable, checkEthAvailable } from '~/utils/available'

const ensProfileUrl = (name: string, available: boolean, tld: 'eth' | 'box') => `https://app.ens.domains/name/${name}.${tld}${available ? '/register' : ''}`

const showSuggestions = (name: string): boolean => (['eth', 'box'].includes(name.split('.')[1])) || name.split('.')[1] === undefined

type CommonProps = {
  viewText: string
  invalidText: string
  registerText: string
}

const TldList = (
  {
    isLoading, tld,
    isInvalid, invalidText,
    isEnsAvailable, isBoxInvalid,
    name, viewText, registerText,
    isBoxAvailable,
  }: {
    isLoading: boolean
    tld: 'eth' | 'box' | undefined
    isInvalid: boolean
    isEnsAvailable: boolean
    isBoxInvalid: boolean
    name: string
    isBoxAvailable: boolean
  } & CommonProps) => {
  if (isLoading) {
    return (
      <button type="button" disabled className={clsx(styles.icon, styles.spinner)}>
        <img src="/assets/spinner.svg" alt="" />
      </button>
    )
  }

  if (name === '') {
    return (
      <button type="submit" className={styles.icon}>
        <SearchIcon />
      </button>
    )
  }

  if (isInvalid) {
    return (
      <div className={styles.tlds}>
        <span className={styles.invalid}>{invalidText}</span>
      </div>
    )
  }

  return (

    <div className={styles.tlds}>
      {name.length > 2 && tld !== 'box'
        ? (
            <a className={isEnsAvailable ? styles.registered : styles.available} href={ensProfileUrl(name, isEnsAvailable, tld || 'eth')}>
              <span>.eth</span>
              <span>
                {isEnsAvailable ? registerText : viewText}
                {' '}
                <ArrowRightIcon />
              </span>
            </a>
          )
        : null}
      {isBoxInvalid || tld === 'eth'
        ? null
        : (
            <ExternalLink className={isBoxAvailable ? styles.registered : styles.available} href={ensProfileUrl(name, isBoxAvailable, tld || 'box')}>
              <span>.box</span>
              <span>
                {isBoxAvailable ? registerText : viewText}
                {' '}
                <ArrowRightIcon />
              </span>
            </ExternalLink>
          )}

    </div>
  )
}

export const SearchInput = ({
  caption, placeholder,
  viewText,
  registerText,
  invalidText,
}: {
  caption: string
  placeholder: string
} & CommonProps) => {
  const [value, setValue] = useState('')
  const [isEnsAvailable, setEnsAvailable] = useState(false)
  const [isBoxAvailable, setBoxAvailable] = useState(false)
  const [isBoxInvalid, setIsBoxInvalid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const debouncedValue = useDebounce(value, 500)

  const [name, tld] = debouncedValue.split('.') as [string, 'eth' | 'box']

  useEffect(() => {
    if (debouncedValue.length > 1) {
      setIsInvalid(false)
      setIsLoading(true)
      setIsBoxInvalid(false)

      if (debouncedValue.includes('#')) { // special case - URL hash
        setIsInvalid(true)
        setIsLoading(false)
      }
      else if (showSuggestions(debouncedValue)) {
        if (tld === 'eth') {
          checkEthAvailable(name).then((available) => {
            setEnsAvailable(available)
          }).catch(() => {
            setIsInvalid(true)
          }).finally(() => {
            setIsLoading(false)
          })
        }
        else if (tld === 'box') {
          checkBoxAvailable(name).then((available) => {
            setBoxAvailable(available)
          }).catch(() => {
            setIsBoxInvalid(true)
          }).finally(() => {
            setIsLoading(false)
          })
        }
        else {
          checkEthAvailable(name).then((available) => {
            setEnsAvailable(available)
          }).catch(() => {
            setIsInvalid(true)
          }).finally(() => {
            setIsLoading(false)
          }).then(() => {
            checkBoxAvailable(name).then((available) => {
              setBoxAvailable(available)
            }).catch(() => {
              setIsBoxInvalid(true)
            }).finally(() => {
              setIsLoading(false)
            })
          })
        }
      }
      else {
        setIsLoading(false)
      }
    }
    else {
      setIsInvalid(true)
    }
  }, [debouncedValue])

  return (
    <div
      className={clsx(
        ui.flex,
        ui['flex-col'],
        ui['flex-center'],
        styles.container,
      )}
    >
      <div className={styles.captionContainer}>
        <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
        <span className={styles.caption}>
          {caption}
        </span>
        <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
      </div>
      <div
        className={clsx(
          ui.flex,
          ui['flex-col'],
          styles.searchboxContainer,
        )}
      >
        <form
          method="GET"
          onSubmit={(e) => {
            e.preventDefault()

            if (e.currentTarget.reportValidity()) {
              const fd = new FormData(e.currentTarget)

              location.assign(`https://ens.app/${fd.get('ens')}.eth`)
            }
          }}
          className={clsx(styles.inputContainer, 'plausible-event-name=search')}
        >
          <input
            onChange={e => setValue(e.currentTarget.value)}
            name="ens"
            value={value}
            className={clsx(styles.input, isInvalid && styles['input-invalid'])}
            placeholder={placeholder}
            required
            minLength={2}
          />
          {showSuggestions(debouncedValue) && (
            <TldList {
              ...{
                isBoxInvalid, isEnsAvailable, isInvalid, invalidText, isLoading, registerText,
                tld, name, viewText, isBoxAvailable,
              }}
            />
          )}
        </form>
      </div>
    </div>
  )
}

/* eslint-disable @eslint-react/hooks-extra/no-direct-set-state-in-use-effect */

'use client'

import { normalise } from '@ensdomains/ensjs/utils'
import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link'
import ui from '~/styles/ui.module.css'
import { checkBoxAvailable, checkEthAvailable } from '~/utils/available'
import { useDebounce } from '~/utils/useDebounce'
import { ArrowRightIcon, SearchIcon } from '../../../shared/icons/index'
import styles from './SearchInput.module.css'

const ensProfileUrl = (name: string, available: boolean, tld: 'eth' | 'box') =>
  `https://app.ens.domains/${tld === 'eth' ? 'name/' : ''}${name}.${tld}${
    available ? (tld === 'box' ? '/dotbox' : '/register') : ''
  }`

const showSuggestions = (name: string): boolean =>
  ['eth', 'box'].includes(name.split('.')[1]) ||
  name.split('.')[1] === undefined

type CommonProps = {
  viewText: string
  invalidText: string
  registerText: string
}

const TldList = ({
  isLoading,
  tld,
  isInvalid,
  invalidText,
  isEnsAvailable,
  isBoxInvalid,
  name,
  viewText,
  registerText,
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
      <button
        type="button"
        disabled
        className={clsx(styles.icon, styles.spinner)}
      >
        <img src="/assets/spinner.svg" alt="loading" />
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
      {name.length > 2 && tld !== 'box' ? (
        <ExternalLink
          className={isEnsAvailable ? styles.registered : styles.available}
          href={ensProfileUrl(name, isEnsAvailable, tld || 'eth')}
        >
          <span>.eth</span>
          <span>
            {isEnsAvailable ? registerText : viewText} <ArrowRightIcon />
          </span>
        </ExternalLink>
      ) : null}
      {isBoxInvalid || tld === 'eth' ? null : (
        <ExternalLink
          className={isBoxAvailable ? styles.registered : styles.available}
          href={ensProfileUrl(name, isBoxAvailable, tld || 'box')}
        >
          <span>.box</span>
          <span>
            {isBoxAvailable ? registerText : viewText} <ArrowRightIcon />
          </span>
        </ExternalLink>
      )}
    </div>
  )
}

export const SearchInput = ({
  caption,
  placeholder,
  viewText,
  registerText,
  invalidText,
}: {
  caption?: string
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: name, tld are covered by the debouncedValue
  useEffect(() => {
    if (debouncedValue.includes('#')) {
      // special case - URL hash
      setIsInvalid(true)
      setIsLoading(false)
    } else if (debouncedValue.length !== 0 && showSuggestions(debouncedValue)) {
      setIsInvalid(false)
      setIsBoxInvalid(false)
      setIsLoading(true)
      if (tld === 'eth') {
        checkEthAvailable(name)
          .then((available) => {
            setEnsAvailable(available)
          })
          .catch(() => {
            setIsInvalid(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else if (tld === 'box') {
        checkBoxAvailable(name)
          .then((available) => {
            setBoxAvailable(available)
          })
          .catch(() => {
            setIsBoxInvalid(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else {
        checkBoxAvailable(name)
          .then((available) => {
            setBoxAvailable(available)
          })
          .catch(() => {
            setIsBoxInvalid(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
          .then(() => {
            checkEthAvailable(name)
              .then((available) => {
                if (name.length < 2) {
                  setEnsAvailable(false)
                } else setEnsAvailable(available)
              })
              .catch(() => {
                setIsInvalid(true)
              })
              .finally(() => {
                setIsLoading(false)
              })
          })
      }
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
      {caption && (
        <div className={styles.captionContainer}>
          <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
          <span className={styles.caption}>{caption}</span>
          <img src="/assets/arrow-down.svg" width="16" height="13" alt="" />
        </div>
      )}
      <div className={clsx(ui.flex, ui['flex-col'], styles.searchboxContainer)}>
        <form
          method="GET"
          onSubmit={(e) => {
            try {
              e.preventDefault()
              if (!e.currentTarget.reportValidity()) return

              const fd = new FormData(e.currentTarget)
              const rawName = fd.get('ens')?.toString().trim()
              if (!rawName) return

              const normalisedName = normalise(rawName)

              const name =
                normalisedName.lastIndexOf('.') !== -1
                  ? normalisedName
                  : `${normalisedName}.eth`

              location.assign(`https://ens.app/${name}`)
            } catch (error) {
              console.error(error)
            }
          }}
          className={clsx(styles.inputContainer, 'plausible-event-name=search')}
        >
          <input
            onChange={(e) => setValue(e.currentTarget.value)}
            name="ens"
            value={value}
            className={clsx(styles.input, isInvalid && styles['input-invalid'])}
            placeholder={placeholder}
            required
            minLength={2}
          />
          {showSuggestions(debouncedValue) && (
            <TldList
              {...{
                isBoxInvalid,
                isEnsAvailable,
                isInvalid,
                invalidText,
                isLoading,
                registerText,
                tld,
                name,
                viewText,
                isBoxAvailable,
              }}
            />
          )}
        </form>
      </div>
    </div>
  )
}

'use client'

import { clsx } from 'clsx'

import ui from '~/styles/ui.module.css'
import { ArrowRightIcon, SearchIcon } from '../icons'
import styles from './SearchInput.module.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '~/utils/useDebounce'
import { ExternalLink } from 'react-external-link'

const ensProfileUrl = (name: string, available: boolean, tld: 'eth' | 'box') =>
  `https://app.ens.domains/${tld === 'eth' ? 'name/' : ''}${name}.${tld}${
    available ? (tld === 'box' ? '/dotbox' : '/register') : ''
  }`

const showSuggestions = (name: string): boolean =>
  ['eth', 'box'].includes(name.split('.')[1])
  || name.split('.')[1] === undefined

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
      {name.length > 2 && tld !== 'box'
        ? (
            <ExternalLink
              className={
                isEnsAvailable ? styles.registered : styles.available
              }
              href={ensProfileUrl(name, isEnsAvailable, tld || 'eth')}
            >
              <span>.eth</span>
              <span>
                {isEnsAvailable ? registerText : viewText}
                {' '}
                <ArrowRightIcon />
              </span>
            </ExternalLink>
          )
        : null}
      {isBoxInvalid || tld === 'eth'
        ? null
        : (
            <ExternalLink
              className={
                isBoxAvailable ? styles.registered : styles.available
              }
              href={ensProfileUrl(name, isBoxAvailable, tld || 'box')}
            >
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

  useEffect(() => {
    if (debouncedValue.includes('#')) {
      setIsInvalid(true)
      setIsLoading(false)
    }
    else if (debouncedValue.length !== 0 && showSuggestions(debouncedValue)) {
      setIsInvalid(false)
      setIsBoxInvalid(false)
      setIsLoading(true)
      const queryWorker = async () => {
        try {
          const res = await fetch(`/search?domain=${debouncedValue}`)
          const data = await res.json()

          if (data.isInvalid) {
            setIsInvalid(true)
            setIsLoading(false)
            return
          }

          if (data.isBoxAvailable !== undefined) {
            setBoxAvailable(data.isBoxAvailable)
          }

          if (data.isBoxInvalid !== undefined) {
            setIsBoxInvalid(data.isBoxInvalid)
          }

          if (data.isEnsAvailable !== undefined) {
            setEnsAvailable(data.isEnsAvailable)
          }
        }
        catch (error) {
          // Handle error fetching from the worker
          console.error('Error fetching domain availability:', error)
          setIsInvalid(true)
        }
        finally {
          setIsLoading(false)
        }
      }

      queryWorker()
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
          <img
            src="/assets/arrow-down.svg"
            width="16"
            height="13"
            alt=""
          />
          <span className={styles.caption}>{caption}</span>
          <img
            src="/assets/arrow-down.svg"
            width="16"
            height="13"
            alt=""
          />
        </div>
      )}
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
              const name = fd.get('ens') as string
              const dot = name.lastIndexOf('.')
              const properName = dot !== -1 ? name.slice(0, dot) : name
              location.assign(
                `https://ens.app/${properName}.eth`,
              )
            }
          }}
          className={clsx(
            styles.inputContainer,
            'plausible-event-name=search',
          )}
        >
          <input
            onChange={e => setValue(e.currentTarget.value)}
            name="ens"
            value={value}
            className={clsx(
              styles.input,
              isInvalid && styles['input-invalid'],
            )}
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

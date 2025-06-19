'use client'

import { clsx } from 'clsx'

import {
  ArrowDownIcon,
  FarcastCommentIcon,
  FarcastLikeIcon,
  FarcastRecastIcon,
  SwapIcon,
} from '~/components/shared/icons/index'
import ui from '~/styles/ui.module.css'
import { useIntersectionObserver } from '~/utils/useIntersectionObserver'

import { CrossFadeImage } from '../CrossFadeImage/CrossFadeImage'
import styles from './DappsAnimation.module.css'

const sources: { src: string; alt: string }[] = [
  'domico.eth',
  'luc.eth',
  'nick.eth',
].map((name) => ({ alt: name, src: `/assets/home/${name}.png` }))

const FarcasterPost = ({
  user,
  text,
  handle,
  likes,
  reposts,
  comments,
}: {
  user: string
  text: string
  handle: string
  likes: number
  reposts: number
  comments: number
}) => (
  <div className={clsx(ui.flex, ui['flex-col'], styles.farcasterPost)}>
    <div className={clsx(ui.flex, ui['flex-row'], styles.farcasterPostAuthor)}>
      <span>{user}</span>
      <span className={styles.farcasterPostAuthorHandle}>@{handle}</span>
    </div>
    <div className={styles.farcasterPostContent}>{text}</div>
    <div className={clsx(ui.flex, ui['flex-row'], styles.farcasterPostButtons)}>
      <button type="button">
        <FarcastCommentIcon className={styles.farcasterPostButtonsIcon} />{' '}
        {comments}
      </button>
      <button type="button">
        <FarcastRecastIcon className={styles.farcasterPostButtonsIcon} />{' '}
        {reposts}
      </button>
      <button type="button">
        <FarcastLikeIcon className={styles.farcasterPostButtonsIcon} /> {likes}
      </button>
    </div>
  </div>
)

export const DappsAnimation = ({
  swap,
  home,
}: {
  swap: string
  home: string
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 1,
  })

  return (
    <div ref={ref} className={styles.grid}>
      <div
        className={clsx(
          styles.fnd,
          ui.flex,
          ui['flex-col'],
          ui['flex-center'],
          isIntersecting && styles.animating,
        )}
      >
        <div className={styles.fndBg}></div>
        <CrossFadeImage
          duration={1500}
          className={clsx(styles.pfp, styles.fndPfp)}
          {...{ sources }}
        >
          {({ alt }) => (
            <div className={clsx(styles.name, styles.fndName)}>{alt}</div>
          )}
        </CrossFadeImage>

        <div className={styles.fndLine}></div>
        <div className={clsx(ui.flex, ui['flex-row'], styles.fndGallery)}>
          <img className={styles.img} src="/assets/home/fnd-1.png" alt="" />
          <img className={styles.img} src="/assets/home/fnd-2.png" alt="" />
          <img className={styles.img} src="/assets/home/fnd-3.png" alt="" />
        </div>
      </div>
      <div
        className={clsx(
          ui.flex,
          ui['flex-col'],
          ui['flex-center'],
          styles.swap,
          isIntersecting && styles.animating,
        )}
      >
        <div className={clsx(ui.flex, ui['flex-row'], styles.swapHeader)}>
          <span className={styles.swapTitle}>Swap</span>
          <div
            className={clsx(
              ui.flex,
              ui['flex-row'],
              styles.name,
              styles.swapName,
            )}
          >
            <CrossFadeImage
              duration={1500}
              className={clsx(styles.pfp, styles.swapNamePfp)}
              {...{ sources }}
            >
              {({ alt }) => <div>{alt}</div>}
            </CrossFadeImage>
          </div>
        </div>
        <div
          className={clsx(
            ui.flex,
            ui['flex-center'],
            ui['flex-col'],
            styles.swapContainer,
          )}
        >
          <span className={styles.swapValue}>3,333.50</span>
          <div
            className={clsx(ui.flex, ui['flex-row'], styles.swapCurrencyToggle)}
          >
            <div className={styles.swapIndicator}></div>
            <span className={styles.swapCurrency}>USDC</span>
            <ArrowDownIcon className={styles.swapCurrencyIcon} />
          </div>
        </div>

        <div
          className={clsx(
            ui.flex,
            ui['flex-col'],
            styles.swapContainer,
            styles.swapResult,
          )}
        >
          <SwapIcon className={styles.swapIcon} />
          <span className={styles.swapValue}>1.000</span>
          <div
            className={clsx(
              ui.flex,
              ui['flex-row'],
              styles.swapCurrencyResultToggle,
            )}
          >
            <div className={styles.swapIndicator}></div>
            <span className={styles.swapCurrency}>ETH</span>
            <ArrowDownIcon className={styles.swapCurrencyIcon} />
          </div>
          <button className={styles.swapButton} type="button">
            {swap}
          </button>
        </div>
      </div>
      <div
        className={clsx(styles.farcaster, isIntersecting && styles.animating)}
      >
        <div className={clsx(styles.farcasterTitle)}>
          <CrossFadeImage
            duration={1500}
            className={styles.farcasterPfp}
            {...{ sources }}
          />
          <div className={styles.farcasterTitleText}>{home}</div>
        </div>
        <div className={clsx(ui.flex, ui['flex-row'], styles.farcasterStories)}>
          <img src="/assets/home/stories-1.png" alt="" height={32} width={32} />
          <img src="/assets/home/stories-2.png" alt="" height={32} width={32} />
          <img src="/assets/home/stories-3.png" alt="" height={32} width={32} />
          <img src="/assets/home/stories-4.png" alt="" height={32} width={32} />
        </div>
        <div className={clsx(ui.flex, ui['flex-col'])}>
          <FarcasterPost
            handle="katiewav"
            user="katiewav"
            text="How can we create a better ecosystem for Ethereum Name Service?"
            likes={144}
            reposts={24}
            comments={40}
          />
          <FarcasterPost
            handle="dwr.eth"
            user="Dan Romero"
            text="ENS usernames are now live on Farcaster!"
            likes={193}
            reposts={44}
            comments={22}
          />
          <FarcasterPost
            handle="godaddy"
            user="GoDaddy"
            text="We're bringing the world on-chain."
            likes={193}
            reposts={44}
            comments={22}
          />
        </div>
        <div className={clsx(ui.flex, ui['flex-row'], styles.farcasterMenu)}>
          <button type="button">
            <img src="/assets/home/home.svg" height={16} width={16} alt="" />
          </button>
          <button type="button">
            <img src="/assets/home/search.svg" height={16} width={16} alt="" />
          </button>
          <button type="button">
            <img src="/assets/home/plus.svg" height={16} width={16} alt="" />
          </button>
          <button type="button">
            <img src="/assets/home/bell.svg" height={16} width={16} alt="" />
          </button>
          <button type="button">
            <img src="/assets/home/group.svg" height={16} width={16} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

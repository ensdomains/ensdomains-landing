import { clsx } from 'clsx'
import Link from 'next/link'
import ui from '~/styles/ui.module.css'
import { AnimatedSquare } from '../../ui/primitives/AnimatedSquare/AnimatedSquare'
import styles from './EcosystemList.module.css'

export const EcosystemList = () => {
  return (
    <>
      <div className={clsx(ui.flex, ui['flex-row'], styles.container)}>
        <Link href="/ecosystem/uniswap">
          <img
            src="/assets/logos/uniswap.svg"
            height={60}
            width={60}
            alt="Uniswap"
          />
        </Link>
        <Link href="/ecosystem/base">
          <img src="/assets/logos/base.svg" height={60} width={60} alt="Base" />
        </Link>
        <Link href="/ecosystem/godaddy">
          <img
            src="/assets/logos/godaddy.svg"
            height={33}
            width={29}
            alt="GoDaddy"
          />
        </Link>
        <Link href="/ecosystem/paypal">
          <img
            src="/assets/logos/paypal.svg"
            height={29}
            width={24}
            alt="PayPal"
          />
        </Link>
      </div>
      <div className={styles['position-container']}>
        <div className={styles['animation-container']}>
          <img
            src="/assets/ecosystem/left.svg"
            height={600}
            width={200}
            alt=""
          />
          <AnimatedSquare className={styles['animated-square']} />
        </div>
        <div className={styles['animation-container']}>
          <img
            src="/assets/ecosystem/right.svg"
            height={600}
            width={200}
            alt=""
          />
          <AnimatedSquare className={styles['animated-square']} />
        </div>
      </div>
    </>
  )
}

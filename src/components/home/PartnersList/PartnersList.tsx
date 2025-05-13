import { clsx } from 'clsx'
import ui from '~/styles/ui.module.css'
import type { PartnerEntry } from '~/utils/types'
import styles from './PartnersList.module.css'

type PartnersListProps = {
  partners: PartnerEntry[]
}

export const PartnersList = ({ partners }: PartnersListProps) => {
  return (
    <div className={styles.container}>
      {partners.map((item, i) => (
        <div
          key={`${item.name}-${i}`}
          className={clsx(ui.flex, ui['flex-row'], styles.partner)}
        >
          <div className={clsx(styles.logo, ui.flex, ui['flex-center'])}>
            <img
              src={`/assets/logos/${item.icon}`}
              height={24}
              width={24}
              alt=""
            />
          </div>
          <div className={clsx(ui.flex, ui['flex-col'])}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.category}>{item.category}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

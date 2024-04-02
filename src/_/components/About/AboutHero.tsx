import { useTranslation } from 'react-i18next'

import styles from './AboutHero.module.css'

export default function AboutHero() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <p>{t('about.hero')}</p>
    </section>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Description.module.css'
import { Anchor, AnchorContainer } from '../Anchor'

const members = [
  { name: 'Nick Johnson', company: 'ENS Labs Limited' },
  { name: 'Sergey Nazarov', company: 'Chainlink' },
  { name: 'Dan Finlay', company: 'Metamask' },
  { name: 'Taylor Monahan', company: 'MyCrypto' },
  { name: 'Aron Fischer', company: 'Colony' },
  { name: 'Jason Carver', company: 'Ethereum Foundation' },
  { name: 'Martin Swende', company: 'Ethereum Foundation' },
]

export default function AboutDescription() {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.description} id="about-root">
        <div className={styles.descriptionInner}>
          <AnchorContainer href="#about-root">
            <h2>
              {t('about.root.title')}
              <Anchor />
            </h2>
          </AnchorContainer>
          <p>{t('about.root.text')}</p>
          <div />
          <dl className={styles.members}>
            {members.map(member => (
              <div className={styles.member}>
                <dt>{member.name}</dt>
                {' '}
                <dd>{member.company}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

import { clsx } from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import ui from '~/styles/ui.module.css'
import type { ButtonVariant } from '~/utils/types'
import styles from './SectionWithPreview.module.css'

type Props = {
  title: string
  text: string
  cta?: { text: string; buttonVariant?: ButtonVariant; url: string }[]
}

export const SectionWithPreview: FC<PropsWithChildren<Props>> = ({
  text,
  title,
  children,
  cta,
}) => {
  return (
    <div className={clsx(ui['w-full'], styles.container)}>
      <div className={clsx(ui.flex, ui['flex-col'], styles.contentWithCta)}>
        <div
          className={clsx(
            ui.flex,
            ui['flex-col'],
            ui['w-full'],
            styles.content,
          )}
        >
          <h3>{title}</h3>
          <p className={ui['max-w-text']}>{text}</p>
        </div>
        <div className={clsx(ui.flex, ui['flex-row'], styles.cta)}>
          {(cta || []).map(({ text, buttonVariant = 'primary', url }) => (
            <a
              key={url}
              href={url}
              className={clsx(
                ui.button,
                buttonVariant === 'secondary' && ui['button-secondary'],
              )}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

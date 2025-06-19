import { RectangleAnimation } from '~/components/shared/animations/AnimatedShapes/AnimatedShapes'
import styles from './HeroContent.module.css'

export const HeroContent = () => {
  return (
    <div className={styles['hero-wrapper']}>
      <div className={styles['hero-content']}>
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-magenta"
          color="ens-light-magenta"
          width={200}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-magenta"
          color="ens-light-magenta"
          width={200}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-magenta"
          color="ens-light-magenta"
          width={200}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-magenta"
          color="ens-light-magenta"
          width={200}
          noBackground
        />
      </div>
    </div>
  )
}

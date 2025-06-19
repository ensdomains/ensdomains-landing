import {
  CornerAnimation,
  RectangleAnimation,
} from '../../shared/animations/AnimatedShapes/AnimatedShapes'
import styles from './HeroContent.module.css'

export const HeroContent = () => {
  return (
    <div className={styles['hero-wrapper']}>
      <div className={styles['hero-content']}>
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-light-green"
          color="ens-light-green"
          width={400}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-light-green"
          color="ens-light-green"
          width={400}
          noBackground
        />
        <CornerAnimation
          className={styles['anim-position']}
          bgColor="ens-green"
          color="ens-green"
          width={200}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-light-green"
          color="ens-light-green"
          width={200}
          noBackground
        />
        <CornerAnimation
          className={styles['anim-position']}
          bgColor="ens-green"
          color="ens-green"
          width={200}
          noBackground
        />
        <RectangleAnimation
          className={styles['anim-position']}
          bgColor="ens-light-green"
          color="ens-light-green"
          width={400}
          noBackground
        />
      </div>
    </div>
  )
}

import styles from './Skills.module.css'
import Carrousel from './Carrousel/Carrousel'

export default function Skills (props) {
  const { font } = props
  const title = '<Skills />'

  return (
    <div className={styles.container}>
      <h1 className={[styles.title, font.className].join(' ')}>{title}</h1>
      <div className={styles.containerImg}>
        <div className={styles.slider} id='slider'>
          <Carrousel />
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.sliderInverted} id='slider'>
          <Carrousel />
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.slider} id='slider'>
          <Carrousel />
        </div>
      </div>

    </div>
  )
}

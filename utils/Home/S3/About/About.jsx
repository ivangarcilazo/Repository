import styles from './About.module.css'

import WaveS3 from './Wave/Wave'

import AboutSection from './AboutSection/AboutSection'
import Skills from './Skills/Skills'

export default function About (props) {
  const { font } = props

  return (
    <>
      <WaveS3 />
      <div className={styles.containerInfo}>
        <AboutSection font={font} />
        <Skills font={font} />
      </div>
    </>

  )
}

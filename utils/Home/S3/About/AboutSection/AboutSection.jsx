import styles from './AboutSection.module.css'
import InformationAbout from './InformationAbout/InformationAbout'
import TitleAbout from './TitleAbout/TitleAbout'

export default function AboutSection (props) {
  const { font } = props
  return (
    <>
      <div className={styles.container}>
        <TitleAbout font={font} />
        <InformationAbout font={font} />
      </div>

    </>
  )
}

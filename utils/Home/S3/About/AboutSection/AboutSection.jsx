import styles from './AboutSection.module.css'

export default function AboutSection (props) {
  const { font } = props
  const aboutText = '<About />'
  return (
    <>
      <div>
        <h1 className={[font.className, styles.title].join(' ')}>{aboutText}</h1>
        <h1 className={[font.className, styles.titlebg].join(' ')}>{aboutText}</h1>

      </div>

    </>
  )
}

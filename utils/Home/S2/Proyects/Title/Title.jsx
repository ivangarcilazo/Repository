'use client'

import styles from './Title.module.css'

export default function Title (props) {
  const { font } = props
  const classTitle = [font.className, styles.title]
  const classTitle1 = [font.className, styles.title1]

  const phrase = 'Know my portfolio!'
  const phrasebg = 'Know my portfolio!'
  const letter = (ph) => {
    const title = []
    for (let index = 0; index < ph.length; index++) {
      title.push(ph[index])
    }
    return title
  }

  return (
    <div className={styles.container}>
      <h1 className={classTitle1.join(' ')}>
        {
                letter(phrase).map((letter, index) => {
                  return (
                    <span key={index} className={styles.letterEffect}>{letter}</span>
                  )
                })
                }
      </h1>

      <h1 className={classTitle.join(' ')}>{phrasebg}</h1>
    </div>
  )
}

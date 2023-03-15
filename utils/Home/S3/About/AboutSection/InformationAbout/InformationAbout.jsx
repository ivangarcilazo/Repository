import styles from './InformationAbout.module.css'

export default function InformationAbout (props) {
  const { font } = props
  return (
    <div className={styles.container}>
      <p className={[font.className, styles.details].join(' ')}>
        About a year ago, I dived into the world of <b>Front-End web programming</b>, and since then my passion for this discipline has only grown. I have had the privilege of acquiring knowledge from different institutions and have continued my self-education.
      </p>
      <p className={[font.className, styles.details].join(' ')}>
        Currently, I am actively seeking new opportunities to collaborate on projects as a freelancer and in search of a remote job, with the goal of continuing to grow professionally.
      </p>

      <p className={[font.className, styles.details].join(' ')}>
        I am committed to providing quality solutions and staying up-to-date on the latest trends and technological tools to ensure success in every project in which I participate.
      </p>
    </div>
  )
}

import styles from './Information.module.css'

export default function Information (props) {
  const { font } = props

  return (
    <div className={styles.container}>
      <p className={[font.className, styles.text].join(' ')}>To each of these projects I have put all my efforts to do my best, to each one I put the same effort as the first one, always working to learn how to make the challenge better.</p>
    </div>
  )
}

import styles from './Tools.module.css'

export default function Tools (props) {
  const { images } = props

  return (
    <div className={styles.message}>
      <div className={styles.triangle} />
      <div className={styles.container}>
        {
                    images.map((img, index) => {
                      return (
                        <img key={index} src={img} width='30vw' alt='' />
                      )
                    })
          }
      </div>
    </div>
  )
}

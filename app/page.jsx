import styles from './HomePage.module.css'
import { Poppins } from '@next/font/google'

import TextInit from '@/utils/Home/S1/TextWelcome/TextWelcome'
import BackgroundAnimation from '@/utils/Home/S1/BackgroundAnimation/BackgroundAnimation'
import Proyects from '@/utils/Home/S2/Proyects/Proyects'
import About from '@/utils/Home/S3/About/About'
const font = Poppins({ weight: ['700', '500'], subsets: ['latin'] })

export default function HomePage () {
  return (

    <main className={styles.main}>

      <section className={styles.section1}>
        <div className={styles.text}>
          <TextInit font={font} />
        </div>
        <div className={styles.background}>
          <BackgroundAnimation className={styles.bg2} />
        </div>
      </section>
      <section className={styles.section2}>
        <Proyects font={font} />
      </section>
      <section className={styles.section3}>
        <About font={font} />
      </section>

    </main>

  )
}

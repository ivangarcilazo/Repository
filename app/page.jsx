import styles from './HomePage.module.css'
import { Poppins } from '@next/font/google'

import TextInit from '@/utils/Home/TextWelcome/TextWelcome'
import BackgroundAnimation from '@/utils/Home/BackgroundAnimation/BackgroundAnimation'

const font=Poppins({ weight:'700', subsets:['latin'] })


export default function HomePage(){
  return(
    <section className={styles.section}>
      <div className={styles.text}>
        <TextInit font={font}/>
      </div>
      <div>
        <BackgroundAnimation/>
      </div>
    </section>
  )
}
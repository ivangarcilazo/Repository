import styles from './SkillsPage.module.css'
import { Poppins } from '@next/font/google'
const font = Poppins({ weight: ['700', '500'], subsets: ['latin'] })

export default function SkillsPage () {
  <section className={styles.section}>
    <h1 className={font.className}>Working</h1>
  </section>
}

'use client'

import styles from './BackgroundAnimation.module.css'
import Image from 'next/image'

import wave0 from '../../../../public/waves/wave0.svg'
import wave1 from '../../../../public/waves/wave1.svg'
import wave2 from '../../../../public/waves/wave2.svg'

import Scene from './Scene/Scene'

export default function BackgroundAnimation () {
  return (
    <Scene className={styles.scene}>
      <Image data-depth='1.3' src={wave2} className={styles.wave} />

      <Image data-depth='0.6' src={wave1} className={styles.wave} />

      <Image src={wave0} className={styles.wave} />

    </Scene>
  )
}


import Image from 'next/image'
import wave3dp from '../../../../../public/waves/wave3dp.svg'
import wave4dp from '../../../../../public/waves/wave4dp.svg'
import SceneS3 from './Scene/SceneS3'
import styles from './Wave.module.css'

export default function WaveS3 () {
  return (
    <SceneS3>
      <Image fill data-depth='0.7' src={wave4dp} alt='wave' />
      <Image fill data-depth-x='0.05' data-depth-y='0.0' src={wave3dp} className={styles.wave} alt='wave' id='waveScrollTop' />
    </SceneS3>
  )
}

'use client'

import styles from './SceneS3.module.css'
import Parallax from 'parallax-js'
import { useEffect } from 'react'

export default function SceneS3 (props) {
  const { children } = props

  useEffect(() => {
    const scene = document.querySelector('#sceneS3')
    // eslint-disable-next-line no-unused-vars
    const parallax = new Parallax(scene)
  }, [children])

  return (
    <div id='sceneS3' className={styles.container}>
      {children}
    </div>
  )
}

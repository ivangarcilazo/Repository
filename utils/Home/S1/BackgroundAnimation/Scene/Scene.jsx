'use client'

import { useEffect } from 'react'
import Parallax from 'parallax-js'
import styles from './Scene.module.css'

export default function Scene (props) {
  const { children } = props

  useEffect(() => {
    const scene = document.querySelector('#scene')
    // eslint-disable-next-line no-unused-vars
    const parallaxInstance = new Parallax(scene)
  }, [children])

  return (
    <div id='scene' className={styles.container}>
      {children}
    </div>
  )
}

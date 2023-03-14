'use client'

import Navigation from './Navegation/Navegation'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

export default function Header () {
  const [distance, setDistance] = useState(2)

  useEffect(() => {
    window.onscroll = function () {
      const d = document.getElementById('waveScrollTop')
      const topPos = d.getBoundingClientRect().top
      setDistance(topPos)
    }
  }, [])

  return (
    <>
      {
        distance >= 1
          ? (
            <header className={styles.header}>
              <Navigation />
            </header>
            )
          : (
            <header className={styles.headerTop}>
              <Navigation />
            </header>
            )
      }
    </>

  )
}

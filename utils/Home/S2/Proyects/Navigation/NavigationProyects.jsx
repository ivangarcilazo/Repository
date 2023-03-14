'use client'
import styles from './NavigationProyects.module.css'

import Link from 'next/link'

import Tools from '../Tools/Tools'
import { useState } from 'react'

const proyects = [
  {
    link: 'https://ivangarcilazo.github.io/tictactoe-host/',
    title: 'Tic Tac Toe',
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjg4ODE4MjEwZjg5Yzg4ZjQ1OTI0MmM0M2ZiNWU2YWE3ZTdiNmFkYSZjdD1n/Jc73wIanG3CCngy0tC/giphy.gif',
    tools: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'],
    github: ''

  },
  {
    link: 'https://ivangarcilazo.github.io/offstyle-hosting/',
    title: 'Shoes e-commerce',
    image: 'https://user-images.githubusercontent.com/105944413/215297017-56ea5ccf-5c99-4ed9-ad54-e70866d25164.gif',
    tools: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', 'https://cdn.iconscout.com/icon/free/png-256/firebase-3629364-3032357.png'],
    github: ''

  },
  {
    link: 'https://ivangarcilazo.github.io/WebSatelite-Final-Proyect/index.html',
    title: 'T-shirt e-commerce',
    image: 'https://media2.giphy.com/media/NAOxLwxBlTdQOd1UT7/giphy.gif',
    tools: ['https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png', 'https://cdn-icons-png.flaticon.com/512/174/174854.png'],
    github: ''

  },
  {
    link: 'https://ivangarcilazo.github.io/paginas-web-guitarras-Ivan-Lautaro-Garcilazo/index.html',
    title: 'Guitar Showroom',
    image: 'https://i.postimg.cc/sgYSbrZ5/Captura.png',
    tools: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png', 'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png', 'https://cdn-icons-png.flaticon.com/512/174/174854.png'],
    github: ''

  }
]

export default function NavgiationProyects (props) {
  const { font } = props

  const [tool, setTools] = useState([])

  const overHandler = (arr) => {
    setTools(arr)
  }

  return (
    <>

      <div className={styles.containerProyects}>
        {
                    proyects.map((proyect, index) => {
                      return (
                        <Link key={index} href={proyect.link} target='blank' referrerPolicy='no-referrer' onMouseLeave={() => setTools([])} onMouseOver={() => overHandler(proyect.tools)}>
                          <div className={styles.container}>

                            <img src={proyect.image} alt={proyect.title} className={styles.images} />
                            <h1 className={[font.className, styles.font].join(' ')}>{proyect.title}</h1>
                          </div>
                          {tool === proyect.tools ? <Tools images={tool} /> : ''}
                        </Link>
                      )
                    })
                }

      </div>
    </>
  )
}

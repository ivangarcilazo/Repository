
import styles from './Carrousel.module.css'

const skillsImage = [
  {
    alt: 'javascript',
    image: 'https://2ality.com/2011/10/logo-js/js.jpg'
  },
  {
    alt: 'git',
    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
  },
  {
    alt: 'npm',
    image: 'https://assets.stickpng.com/images/62a754b9223343fbc2207d0a.png'
  },
  {
    alt: 'react',
    image: 'http://p92.com/binaries/content/gallery/p92website/technologies/react-overview.png'
  },
  {
    alt: 'html',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5M65UFf7_hIfG_S6Z1S2qaB8ouSnZLyPHCA-xJeRP-qM0YErQ24F7P3Bg0lFARW6XFuo&usqp=CAU'
  },
  {
    alt: 'css',
    image: 'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png'
  },
  {
    alt: 'nextJs',
    image: 'https://devarticles.in/wp-content/uploads/2021/10/nextjs-log-1024x1024.jpeg'
  },
  {
    alt: 'bootstrap',
    image: 'https://ivangarcilazo.github.io/repositoryIvanGarcilazo/assets/section-3/logos/bootstrap-logo.png'
  },
  {
    alt: 'Sass',
    image: 'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png'
  }
]

export default function Carrousel () {
  return (
    <>
      {skillsImage.map((image, index) => {
        return (
          <img key={index} src={image.image} className={['image', styles.image].join(' ')} loading='lazy' alt={image.alt} id={image.alt} />
        )
      })}
    </>

  )
}

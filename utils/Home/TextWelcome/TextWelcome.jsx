
import styles from './TextWelcome.module.css'
import './animationTextWelcome.css'

const welcomeText=[
    {
      text:'Welcome!'
    },
    {
      text:"I'm Ivan,"
    },{
      text:"Web developer."
    }
  ]

export default function TextInit(props){

    const {font}=props
    const className=[styles.text, font.className]

    const letters=(phrase)=>{
      const letters= phrase.text
      const letter=[]
      for (let index = 0; index <letters.length; index++) {
        letter.push(letters[index])
      }
      return letter
     
    }

    return(
        <>
            {
            welcomeText.map((phrase, index)=>{
              return(
                <p key={index} className={`${className.join(' ')} ${index===2?'fixedBg':''}`}>
                    {letters(phrase).map((letter, index)=>{

                      return <span key={index} className={`${styles.letter} letter${index}`}>{letter}</span>

                    })}
                </p>
              )

        })}        
        
        </>
    )
  }
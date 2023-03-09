

'use client'

import homeImage from '../../../public/icons/home.png'
import aboutImage from '../../../public/icons/about.png'
import skillsImage from '../../../public/icons/skills.png'
import proyectImage from '../../../public/icons/proyects.png'



import Image from 'next/image'
import Link from 'next/link'
import styles from './Navigation.module.css'


const dataLabels=[
{
    image: homeImage,
    label:'Home',
    route:'/'
},    
{
    image:aboutImage,
    label:'About',
    route:'/personal-proyects'
},{
    image:skillsImage,
    label:'Skills',
    route:'/personal-proyects'
},
{
    image:proyectImage,
    label:'Proyects',
    route:'/personal-proyects'
}
]

export default function Navigation(){

    return(
        <>
            { 
            dataLabels.map((data, index)=>{
                return(
                    <Link href={data.route}>
                        <div key={index} className={styles.container}>
                            <div className={styles.contImg}>
                                <Image
                                    src={data.image}
                                   style={{width:'2.5vw', height:'2.5vw'}}
                                />
                            </div>
                            <span className={styles.text}>{data.label}</span>
                        </div>
                    </Link>
                )
                })        
            }
        </>
    )
}
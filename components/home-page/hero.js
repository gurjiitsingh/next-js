import React from 'react'
import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
           <Image src='images/site/vercel.svg' alt="log image" width={300} height={300} />
        </div>
    </section>
  )
}

export default Hero
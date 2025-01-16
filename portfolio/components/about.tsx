"use client"
import React from 'react'
import {motion} from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  return (
    <div>
    <motion.section className='mb-28 text-center leading-8 sm:mb-40 max-w-[55rem]'
    initial= {{opacity:0, y:100}}
    animate = {{opacity: 1, y:0}}
    transition = {{delay:0.175}}
    id='about'>
        <SectionHeading heading= "About Me" />
        <p className='mb-3 '>I'm a Software Engineer passionate about Full stack development and Distributed systems. My favorite work lies in engineering scalable backend systems to serve the users seamlessly.
        <br />
        Currently, I'm a Masters student at Univeristy of Pittsburgh, looking for full time opportunities starting from May 2025 
        <br />
        In the past, I've had the opportunity to develop and test software at large corporations where I gained the expertise in backend systems and full stack in general
        </p>
        <p></p>
    </motion.section>
    </div>
  )
}

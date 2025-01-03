"use client";
import {motion} from "framer-motion"
import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className="text-center relative">
        <div className=" flex items-center justify-center">
            <motion.div className='flex items-center justify-center'
            initial={{opacity:0, scale:0}}
            animate= {{opacity:1, scale:1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
                <Image 
                    src="/dilip.jpg" 
                    alt='Dilip-Photo'
                    width={192}
                    height={192}
                    priority = {true}
                    className = "h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                ></Image>
          </motion.div>

        </div>
        <motion.p>
              <span className="font-bold">Hello, I'm Dilip Teja. </span>
              I'm a{" "}
              <span className="font-bold">Software Engineer </span>
              with about{" "}
              <span className="font-bold">3 years </span>
              of professional experience. I enjoy building stuff.
            </motion.p>

    </div>
  )
}

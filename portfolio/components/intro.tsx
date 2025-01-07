"use client";
import { motion, MotionConfig } from "framer-motion"
import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <div className="text-center relative">

      <div className=" flex items-center justify-center">
        <motion.div className='flex items-center justify-center'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}>
          <Image
            src="/dilip.jpg"
            alt='Dilip-Photo'
            width={192}
            height={192}
            priority={true}
            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          ></Image>
        </motion.div>

      </div>
      <motion.p className="mb-10 mt-4 px-4 text-2xl
        !leading-[1.5] sm: text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Dilip Teja. </span>
        I'm a{" "}
        <span className="font-bold">Software Engineer </span>
        with about{" "}
        <span className="font-bold">3 years </span>
        of professional experience. I enjoy building stuff.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}>
        <Link className="group bg-gray_950 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 focus:ring focus:outline-light_blue active:scale-105 transition" href="#contact">Contact me here 
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> 
        </Link>
        <a className="group bg-white px-6 py-3 rounded-full flex gap-2 items-center outline-none hover:scale-110 focus:scale-110 focus:ring focus:outline-light_blue active:scale-105 transition cursor-pointer border border-light_blue" href="/Dilip_Teja_Resume.pdf" download>Download CV 
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
        </a>
        <a className="bg-white p-4 rounded-full outline-none hover:scale-110 focus:scale-110 focus:ring focus:outline-light_blue active:scale-105 transition cursor-pointer border border-light_blue" href="https://linkedin.com/in/dilipteja" target="_blank"><BsLinkedin className="opacity-70 group-hover:translate-y-1 transition"/></a>
        <a className="bg-white p-4 rounded-full outline-none hover:scale-110 focus:scale-110 focus:ring focus:outline-light_blue active:scale-105 transition cursor-pointer border border-light_blue" href="https://github.com/dilipteja1" target="_blank"><BsGithub className="opacity-70 group-hover:translate-y-1 transition"/></a> 
      </motion.div>
    </div>
  )
}

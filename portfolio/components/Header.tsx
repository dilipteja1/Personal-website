"use client"
import React from "react"
import {motion} from "framer-motion"
import {links} from "@/lib/data"
import Link from "next/link"

export default function Header(){
    return <header  className="z-[999] relative">
        {/* <div className="fixed top-0 left-1/2 h-[2.5rem] -translate-x-1/2 w-full rounded-none
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]
        sm:w-[36rem] sm:rounded-full"></div> */}
        <motion.div className="flex flex-wrap fixed top-0 left-1/2 w-full border rounded-none bg-white bg-opacity-40 border-white h-[4.5rem] shadow-lg sm:top-6 sm:h-[3.25rem] sm:rounded-full sm:w-[36rem]"
        initial={{y:-100, x: "-50%", opacity:0}}
        animate={{y:0, x: "-50%", opacity:1}}>
        </motion.div>
        <nav className="flex fixed left-1/2 h-12 -translate-x-1/2 py-2 sm:top-6">
            <motion.ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-10 sm:flex-nowrap text-gray_500"
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}>
                {links.map( link => (
                    <li className="flexitems-center justify-center hover:text-gray_950 transition" 
                    key = {link.hash}>
                        <Link href={link.hash}>{link.name}</Link>
                    </li> 
                ))}
            </motion.ul>
        </nav> 

        
    </header>
}



import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
export default function Projects() {
  return (
    <section>
        <SectionHeading heading="My Projects" />
        <div>
            {
            projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>
            ))
            }
        </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number];

function Project({
    title,
    description,
    tags,
    imageURL

}: ProjectProps){ 
    return  (
        <section className='relative flex bg-gray-200 max-w-[55rem] border border-black/5 rounded overflow-hidden sm:pr-8' >
            <div>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-normal text-gray-700'>{description}</p>
                <ul className='flex flex-wrap gap-2 mt-4'>
                    {tags.map((tag, index) => (
                        <li className='bg-black/[0.5] text-white/[0.8] rounded-full px-3 py-1' key={index}> {tag}</li>
                ))}``
                </ul>
            </div>
            <Image
            src={imageURL}
            alt='group chat project'
            quality={95}
            priority={true}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg"
            ></Image>
        </section>
    )
}

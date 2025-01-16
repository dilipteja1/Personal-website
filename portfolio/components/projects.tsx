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
    return <section className='relative flex bg-gray_50 max-w-[55rem] border border-bg-gray_700 overflow-hidden sm:pr-8' >
        <div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray_950'>{description}</p>
            <ul className='flex flex-wrap gap-5 mt-4'>
                {tags.map((tag, index) => (
                    <li className='bg-gray_700/[0.7]
                    rounded-full px-3 py-1' key={index}> {tag}</li>
            ))}
            </ul>
        </div>
        <Image
        src={imageURL}
        alt='group chat project'
        priority={true}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg"
        ></Image>
    </section>
}

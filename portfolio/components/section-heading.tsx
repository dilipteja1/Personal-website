import React from 'react'

type SectionHeadingProps = {
  heading: React.ReactNode
}
export default function SectionHeading({heading} : SectionHeadingProps) {
  return (
    <h2 className='text-3xl capitalize font-medium mb-8 text-center'>{heading}</h2>
  )
}

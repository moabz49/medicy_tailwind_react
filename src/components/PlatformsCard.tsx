import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


interface platformsCardProps {
    img: string;
    title: string;
    description: string;
}


const PlatformsCard = ({img, title, description }:platformsCardProps) => {
  return (
    <div className='flex shadow-md flex-col rounded-b-md rounded-t-lg border-[0.5px] border-t-0 border-teal-300 hover:border-none hover:bg-white duration-500 transform transition-transform ease-in-out group'>
    <img src={img} alt="doctor" className='rounded-t-lg'/>
    <div className='flex flex-col p-8 space-y-4 group-hover:shadow-white group-hover:shadow-sm'>
      <h1 className='text-teal-900 font-medium text-2xl '>{title}</h1>
      <p className='leading-[180%] text-neutral-600 w-[90%] '>{description}</p>
      <div className='flex items-center group cursor-pointer' >
          <p className='mr-2 duration-300 font-bold text-teal-600 group-hover:text-teal-800 ease-in transition-transform cursor-pointer capitalize tracking-tight'>
              Read more
          </p>
          <FaArrowRight className='text-teal-600 text-[16px] group-hover:translate-x-1 duration-200 transform ease-linear transition-transform'/>
      </div>
    </div>
  </div>
  )
}

export default PlatformsCard
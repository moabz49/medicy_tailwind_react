import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

interface OptionCardProps {
    title: string;
    icon: React.ReactNode;
  }
  

const OptionsCard = ({title, icon: Icon}: OptionCardProps) => {
    const [showReadMore, setShowReadMore] = useState(false);

    return (
    <div className='relative flex flex-col w-full items-start text-start px-4 pt-12 pb-4 space-y-4 border-[0.5px] shadow-md cursor-pointer'
        onMouseEnter={() => setShowReadMore(true)}
        onMouseLeave={() => setShowReadMore(false)}
    >  
        <div className='absolute px-4 py-2 border-[0.5px] bg-white -top-4 text-[28px] shadow-lg text-teal-800'> {Icon}</div>     
        <h1 className='text-teal-800 font-medium text-xl tracking-tighter'>{title}</h1>
        <p className='leading-[180%] text-neutral-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas accusantium modi?</p>
        <div className='flex'>
            <FaLongArrowAltRight className='text-teal-800 text-[24px]'/>
            <p className={`${showReadMore ? 'ml-2 transition--all opacity-100' : 'ml-2 transition-all opacity-0 '}duration-300 font-semibold text-teal-800 hover:opacity-80 cursor-pointer `}>
                 Read more
            </p>
        </div>
    </div>
    )
}

export default OptionsCard
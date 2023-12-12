import React from 'react'
import OptionsCard from '../components/OptionsCard';
import FadeIn from '../components/FadeIn';
import { optionsArray } from '../data';

const Options : React.FC = () => {

    return (
    <section className='bg-slate-50 w-full flex justify-center items-center '>
        <section className='py-16 sm:py-32 w-full mx-auto max-w-[1480px] mt-[40px] sm:mt-[0px]'>
            <div className='flex justify-center items-center w-full mt-10 md:mt-20 px-8 sm:px-20'>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-4'>
                {optionsArray.map((item, i) => (
                    <FadeIn direction="right" delay={i * 0.2}> <OptionsCard key={i} title={item.title} icon={item.icon}/></FadeIn>
                    ))}
            </div>
            </div>
        </section>
    </section>
  )
}

export default Options;
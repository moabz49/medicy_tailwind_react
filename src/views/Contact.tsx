import React from 'react'
import ContactCard from '../components/ContactCard';
import FadeIn from '../components/FadeIn';
import { contactArray } from '../data';

const Contact = () => {

  return (
    <section id="contact" className='w-full flex justify-center items-center bg-white py-16 sm:py-20'>
        <div className='flex max-w-[1340px] justify-center items-center w-full mx-[10px] sm:mx-[20px]'>
            <div className='flex flex-col justify-center  xs:items-center space-y-6 w-full'>
                <FadeIn>
                    <p className='text-sm font-medium text-teal-500'>Call to Action</p>
                </FadeIn>
                <FadeIn direction='left' delay={0.4}>
                  <h1 className='text-teal-900 text-5xl font-bold'>Make a Request</h1>
                </FadeIn>
                <div className='flex flex-col w-full space-y-4 items-center'>
                    <div className='w-full grid md:grid-cols-2 gap-4 '>
                        <FadeIn direction='left'>
                            <input className='w-full border-[0.5px] text-sm outline-none hover:border-teal-500 focus:hover:border-teal-500 py-5 pl-8 placeholder:capitalize text-black bg-transparent placeholder:text-neutral-400 ' placeholder='Enter Full Name '/>
                        </FadeIn>
                        <FadeIn direction='left' delay={0.4}>
                            <input className='w-full border-[0.5px] text-sm outline-none hover:border-teal-500 focus:hover:border-teal-500  py-5 pl-8 placeholder:capitalize text-black bg-transparent placeholder:text-neutral-400 ' placeholder='Email Address '/>
                        </FadeIn>
                        <FadeIn>
                            <input className='w-full border-[0.5px] text-sm outline-none hover:border-teal-500 focus:hover:border-teal-500  py-5 pl-8 placeholder:capitalize text-black bg-transparent placeholder:text-neutral-400 ' placeholder='Phone Number'/>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <input className='w-full border-[0.5px] text-sm outline-none hover:border-teal-500 focus:hover:border-teal-500  py-5 pl-8 placeholder:capitalize text-black bg-transparent placeholder:text-neutral-400 ' placeholder='Subject '/>
                        </FadeIn>
                    </div>
                    <div className='flex flex-col space-y-4 w-full items-center'>
                        <textarea  rows={8} className='w-full resize-none border-[0.5px] text-sm outline-none hover:border-teal-500 focus:hover:border-teal-500 py-4 pl-8 placeholder:capitalize text-black bg-transparent placeholder:text-neutral-400 ' placeholder='enter Message'/>
                        <button className='bg-teal-500 uppercase text-xs text-white px-8 py-6 font-medium rounded-md hover:scale-[105%] ease-out duration-300 focus:scale-[95%] hover:bg-teal-900 cursor-pointer'>submit request </button>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] gap-4 grid-flow-row'>
                {contactArray.map((item, i) => (
                    <FadeIn delay={0.2 *i} direction='up'>
                        <ContactCard key={i} {...item } />
                    </FadeIn>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
import React from 'react'
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { doctorAppointmentProcess } from '../data';

const Process = () => {
  return (
    <section id="process"
      className='pb-16 w-full flex justify-center items-center bg-teal-50'>
      <div className='flex flex-col w-full justify-center items-center max-w-[1200px] text-center mx-[20px]'>
          <div className='flex md:flex-row flex-col items-start md:items-center text-start justify-between w-full space-y-4 md:space-y-0'>
            <div className='flex flex-col space-y-2'>
              <FadeIn delay={0.2}>
                <p className='text-sm font-medium text-teal-500 text-start'>Work Process</p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <h1 className='capitalize font-bold text-[40px] text-teal-800 md:text-6xl'> How it Works? </h1> 
              </FadeIn>
            </div>
            <FadeIn direction='left'>
              <p className='text-gray-500 text-sm sm:text-base max-w-[440px] flex-1'>Unlock exponential business growth by swiftly acquiring high-caliber talent to fulfill your organizational needs and aspirations.</p>
            </FadeIn>
            <FadeIn direction='left' delay={0.4}>
              <button className='bg-teal-700 uppercase text-xs text-white px-6 py-5 font-medium rounded-md hover:scale-[105%] ease-out duration-300 focus:scale-[95%] hover:bg-teal-900  cursor-pointer'>Make appointment </button>
            </FadeIn>
          </div>
          <div className='flex flex-col justify-center items-center w-full mt-[40px] '>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 '>
              {doctorAppointmentProcess.map(({icon: Icon, description, title, label}, i) => (
                <FadeIn delay={0.4*i} direction="up">
                  <div key={i} className='flex text-start border-b-[0.7px] md:border-[0] lg:border-b-[0.7px]'>
                    <div className=''>
                      <div className='bg-white p-4 mr-4 text-[48px] shadow-lg text-teal-700 rounded-md flex'>{Icon}</div>
                    </div>
                    <div className='flex flex-col space-y-4 items-start'>
                      <h3 className='font-semibold text-teal-800 text-xl tracking-tight w-[74%]'>
                        {title}
                      </h3>
                      <p className='text-gray-600 text-sm leading-[160%] flex-1 '>
                        {description}
                      </p>
                      <p className='capitalize font-extrabold text-teal-500'>
                        {label}
                      </p>
                      <div className='h-4 w-4 rounded-full shadow-teal-500 bg-teal-700 shadow-md animate-pulse' />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full mt-[32px] '>
            <FadeIn direction='none' delay={0.6}>
              <Button>See all services</Button>
            </FadeIn>
          </div>
      </div>
    </section>
  )
}

export default Process;
import React from 'react';
import PlatformsCard from '../components/PlatformsCard';
import { IoMailUnreadOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import FadeIn from '../components/FadeIn';
import { servicesArray } from '../data';
import { servicesImageArray } from '../data';

const Services = () => {

  return (
    <section id="services"
      className='flex w-full justify-center items-center relative bg-transparent '
      >
        <div className='absolute bottom-0 w-full h-1/5 bg-teal-50 -z-10'></div>
       <div className='absolute top-0 w-full h-4/5 bg-white -z-10'></div>

        <div className='flex flex-col w-full max-w-[1340px] justify-center sm:justify-normal mt-[200px] md:my-[120px] items-center mx-[20px] xs:mx-[60px] sm:mx-[80px] mb-[100px]'>
          <FadeIn direction='none'delay={0.4} >
            <p className='text-teal-500'>View our Catalogue</p>
          </FadeIn>
          <FadeIn direction='none' delay={0.6}>
           <h1 className='text-5xl sm:text-6xl text-teal-900 font-bold'>Our Services</h1>
          </FadeIn>
          <div className='flex w-full justify-center items-center mt-[30px] max-w-[1200px]'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mx-[16px] xs:mx-[40px] md:mx-[10px]'>
              {servicesArray.map((item, i) => (
                <FadeIn direction='down' delay={0.1* i}>
                  <PlatformsCard key={item.title} img={item.img} title={item.title} description={item.description}/>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className='flex justify-center items-center mt-[100px]'>
            <div className='flex justify-center items-center'>
              <div className='grid lg:grid-cols-2 gap-16 text-white'>
                <div className='flex flex-col bg-teal-500 py-10 px-10 rounded-xl shadow-md w-full h-full justify-between '>
                  <FadeIn delay={0.4} direction="up" >
                    <div className='flex w-full'>
                      <IoMailUnreadOutline className='mr-4 text-[72px]'/>
                        <h1 className='flex-1 font-semibold capitalize text-3xl sm:text-4xl leading-[240%] tracking-tight'>
                          Subscribe to Our Email&nbsp;<br className='hidden lg:block'/>
                          for Daily Newsletter
                        </h1>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.4} direction='up'>
                    <p className='leading-[240%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi esse iure voluptas molestias sed id, numquam provident eum.</p>
                  </FadeIn>
                  <FadeIn delay={0.4} direction='up'>
                    <div className='border-2 border-white text-sm flex bg-transparent rounded-lg p-1 ' >
                      <input className='ml-4 text-white placeholder:capitalize placeholder:text-white flex-1 outline-none border-none bg-transparent' placeholder='Email Address' />
                      <div className='group flex py-5 px-6 bg-gray-100 text-teal-800 items-center justify-center rounded-md hover:scale-[105%] ease-out duration-200 focus:scale-[95%] hover:bg-gray-300  cursor-pointer'>
                        <GoMail className='text-[12px] mr-2 group-hover:-translate-x-1 ease-in-out duration-300 transform transition-transform'/>
                        <p className='uppercase font-medium'>Subscribe</p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                <div className='grid xs:grid-cols-2 bg-white p-10 gap-8 shadow-md shadow-black'>
                  {servicesImageArray.map((item, i) => (
                    <FadeIn direction="down" delay={0.2*i}>
                      <div key={i} className='border-[0.5px] border-teal-300 p-1'>
                        <img src={item} alt="doctor" className='border-[0.5px] border-gray-400 w-full h-full object-cover'/>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div> 
          </div>
        </div>
          
      </section>
  )
}

export default Services;
import React from 'react';
import Button from '../components/Button';
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import doctorsHero from '../images/doctorHero.png'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import FadeIn from '../components/FadeIn';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Hero = () => {

  return (
    <section id="home" className='relative bg-teal-800' // Adjust background color if needed
    >
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${doctorsHero})`,
          backgroundSize: 'cover',
          opacity: '0.4', // Adjust the opacity as needed
        }}
      />
      <div className='relative h-[800px] w-full justify-center items-center'>
        <div className="flex flex-col pt-[200px] text-white mx-auto items-center text-center ">
            <FadeIn delay={0.4} direction="left">
              <h4 className='font-medium text-xs sm:text-sm mb-[10px] tracking-tighter bg-teal-500 p-2 uppercase -rotate-2'>Markets & Resources</h4>
            </FadeIn>
            <FadeIn>
              <h1 className='leading-snug font-semibold text-3xl sm:text-5xl md:text-6xl mb-[20px]'>
                Providing Top-Tier <br/> Healthcare Staffing<br/>Medical Solution
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className='capitalize italic text-sm font-light text-white mb-[20px]'> lets staff your healthcare facility with care.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button main> Get Started Now <HiOutlineArrowLongRight className="h-10 w-8 group-hover:translate-x-2 transition-transform transform  "/></Button> 
            </FadeIn>
        </div>
        <FadeIn direction='none'>

        <div className='absolute flex w-full -bottom-28 justify-center items-center'>
          <div className='flex flex-col lg:flex-row transform-all  lg:items-center lg:w-full lg:space-y-0 space-y-4 p-10 w-full max-w-[1240px] border-teal-500 border-t-[12px] bg-white mx-[20px] shadow-md'>
              <div className='flex flex-col space-y-4 lg:flex-1'>
                <FadeIn direction="none" delay={0.4}>
                  <p className='text-neutral-600 text-sm font-semibold text-start'>Search Topic</p>
                </FadeIn>
                <input className='py-3 lg:py-5 text-sm pl-4 border-[0.5px] outline-none' placeholder='Search doctors, clinic, Hospitals etc.'/>
              </div>
              <div className='flex flex-col space-y-4 lg:flex-1'>
                <FadeIn direction='none' delay={0.4}>
                  <p className='text-neutral-600 text-sm font-semibold text-start'>Location</p>
                </FadeIn>
                <div className='flex w-[100%] '>
                  <div className='flex flex-1 border-[0.5px] items-center'>
                    <input className='py-3 lg:py-5 text-sm pl-4 flex-1 outline-none' placeholder='Location'/>
                    <CiLocationOn className='text-teal-500 mr-6 text-[20px]' />
                  </div>
                  <button  className='bg-teal-500 text-white uppercase rounded-r-lg font-semibold px-4 flex items-center text-xs lg:text-base hover:opacity-[80%]'><IoIosSearch className='text-white mr-2 text-[20px] font-extralight' />Find now</button>
                </div>
              </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
  
};

export default Hero;



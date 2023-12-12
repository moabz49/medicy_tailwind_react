import React from 'react'
import doctorTwo from '../images/doctorTwo.png';
import doctorThree from '../images/doctorThree.png';
import Button from '../components/Button';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbHeartPlus } from "react-icons/tb";
import CountUp from 'react-countup';
import FadeIn from '../components/FadeIn';
import VisibilitySensor from 'react-visibility-sensor';
import { aboutArray } from '../data';


const about = () => {

  return (
    <section id="about" className="relative bg-teal-800 flex justify-center items-center">

      <div 
        // inset-0 is a utility class in Tailwind CSS that sets all four top, right, bottom, and left properties of an element to 0, effectively removing any space between the element and its parent container.
        // top: 0 ,right: 0 ,bottom: 0 ,left: 0
        className='absolute inset-0 z-0 '
        style={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309_1280.jpg")',
        backgroundSize: 'cover',
        opacity: '0.1',
      }}
      />
      <div className='relative py-32 max-w-[1340px] w-full px-6 flex justify-center items-center'>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='flex flex-col items-stretch space-y-8 order-2 lg:order-1 text-white'>
            <FadeIn>
              <h1 className='font-bold text-4xl sm:text-6xl capitalize'>
                  Why Choose<br /> Medtab Clinic?
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className='md:leading-[1.7] leading-[2] sm:w-[80%] '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat officia nemo iure veritatis. Doloribus nisi dolorem odit hic autem ducimus dicta, reprehenderit sed vitae aut culpa, commodi facilis eos quam voluptatibus delectus.
              </p>
            </FadeIn>
              <div className='flex'>
                <FadeIn delay={0.5}>
                  <TbHeartPlus className='text-[28px] mr-2' />
                  <div className='flex-1 flex-col space-y-6'>
                    <h3 className='font-semibold text-xl'>Quality Control System</h3>
                    <p className='sm:w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore modi dicta laborum.</p>
                  </div>
                </FadeIn>
              </div>
              <div className='flex'>
                <FadeIn delay={0.7}>
                  <HiOutlineUserGroup className='text-[28px] mr-2'/>
                  <div className='flex-1 flex-col space-y-6'>
                    <h3 className='font-semibold text-xl'>Highly Professional Staff</h3>
                    <p className='sm:w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore modi dicta laborum.</p>
                  </div>
                </FadeIn>
              </div>
              <div className='flex w-full justify-start'>
                <FadeIn delay={0.8}>
                  <Button>see our value</Button>
                </FadeIn>
              </div>
          </div>
          <div className='lg:order-2 flex flex-col order-1 flex-1'>
            <FadeIn direction="left" delay={0.4}>
              <div className='z-1 flex justify-start'>
                <img className='w-[80%] rounded-md max-h-[300px] border-8 border-white' src={doctorThree} alt="doctor"/>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.6}>
              <div className='flex justify-end items-end -mt-[10%] relative z-10'>
                <img className='w-[80%] max-h-[300px] border-8 rounded-md border-white' src={doctorThree} alt="doctor"/>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className='absolute flex w-full -bottom-40 md:-bottom-20 justify-center items-center '>
          <div className='flex items-center justify-center w-full mx-[10px] xs:mx-[20px] max-w-[1040px] bg-gradient-to-r from-teal-600 to-teal-900  shadow-md py-8 px-6'>
            <div className='grid md:grid-cols-4 grid-cols-2 w-full gap-8'>
              {aboutArray.map((item, i) => (
                <div key={i} className='flex flex-col text-white space-y-4 md:p-4 items-center'>
                  <p className='font-bold text-4xl'>
                    <CountUp start={-200} duration={9} redraw={true} end={item.number}>
                      {/* This is a function provided by react-countup that gives access to countUpRef (a reference to the element where the count-up will be applied) and start (a function to start the count-up animation). */}
                        {({ countUpRef, start }) => (
                            //  Monitors the visibility of the element. When the element becomes visible, it triggers the start function of the CountUp component, initiating the count-up animation.
                          <VisibilitySensor onChange={start} delayedCall>
                            {/* Assigning the countUpRef to a span */}
                            {/* <span ref={countUpRef} />: The countUpRef obtained from CountUp is assigned to this span, allowing react-countup to apply the animation to this element. */}
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                    </CountUp>&nbsp;+
                  </p>
                  <span className='text-sm font-semibold'>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default about
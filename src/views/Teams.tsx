import React,{ useRef } from 'react'
import doctorFive from '../images/doctorFive.png'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay, } from 'swiper/core';
import "swiper/css";
import { CiLocationOn } from "react-icons/ci";
import FadeIn from '../components/FadeIn';
import { doctorArray } from '../data';


const Teams: React.FC = () => { 
  const swiperRef = useRef<null | any>(null);

  return (
    <section
     id="teams"
     className='relative bg-teal-800 py-16 sm:py-20'>
      <div 
        style={{
          background: `url(${doctorFive})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.1,
        }} className='absolute inset-0 ' />
        <div className='flex flex-col justify-center items-center  mx-[20px] mx-w-[1340px]'>
          <div className='flex flex-col justify-center text-center items-center text-white space-y-8'>
            <FadeIn delay={0.4} direction='down'>
              <p className='capitalize font-semibold text-sm'> Meet our team</p>
            </FadeIn>
            <FadeIn delay={0.6} direction='down'>
              <h1 className='capitalize text-5xl font-bold'>Our creative team</h1>
            </FadeIn>
            <FadeIn direction='none' delay={0.6}>
              <SlideNextButton swiperRef={swiperRef}/>
            </FadeIn>
          </div>
    
            <div className="flex w-full items-center justify-center mt-[20px]">
            {/*sliders per breakpint and space Between each slide  */}
              <Swiper
                 onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                scrollbar={{ draggable: true }}
                speed={800}
                loop={true}
                spaceBetween={12}
                slidesPerView={1}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  550: {
                    slidesPerView: 2
                  },
                  750: {
                    slidesPerView: 3
                  },
                  1100: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                  1640: {
                    slidesPerView: 6,
                  }
                }}
                >
                {/* slider */}
                {doctorArray.map((card, i) => (
                  <SwiperSlide key={card.id}>
                    <FadeIn delay={0.3 * i} direction="down">
                      <div className="bg-white flex flex-col justify-center items-center text-center sm:justify-normal sm:items-start sm:text-start gap-[0.6rem]  m-auto transition-all duration-300 ease-in cursor-pointer hover:shadow-b-2xl shadow-lg shadow-black ">
                        <div className='overflow-clip'>
                          <img src={card.image} alt="home" className="flex-grow transition-transform duration-300 transform hover:scale-125 object-contain object-fit"  />
                        </div>
                        <div className='flex flex-col p-8 text-start justify-start items-start space-y-2 w-full'>
                          <p className="text-teal-900 capitalize font-semibold tracking-tight">{card.fullName}</p>
                          <p className="text-teal-700 font-medium ">{card.job}</p>
                          <p className="text-[#1f3e72]text-sm font-light flex items-center"><CiLocationOn className='mr-2 text-[14px] text-teal-500'/>{card.location}</p>
                        </div>
                      </div>
                    </FadeIn>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </div>
      </section>
  )
}
export default Teams;

const SlideNextButton = ({ swiperRef }) => {
  const swiperButton = useSwiper();
  console.log(swiperButton)

  return (
      <div className="flex gap-x-[2rem] justify-center items-center py-[6px]">
        <button onClick={() => swiperRef.current.slidePrev()} 
        className=" text-teal-500 px-4 py-1 rounded-md shadow-black shadow-2xl text-[24px] cursor-pointer hover-opacity-80 bg-white group hover:scale-[105%] duration-300 ease-out transition-transform transform">
          <p className="group-hover:-translate-x-1">&lt;</p>
        </button>
        <button onClick={() => swiperRef.current.slideNext()} 
        className="text-teal-500 px-4 py-1 rounded-md shadow-black shadow-2xl text-[24px] cursor-pointer hover-opacity-80 group hover:scale-[105%] duration-300 ease-out transition-transform transform">
          <p className="group-hover:translate-x-1">&gt;</p>
        </button>
      </div>
  );
};


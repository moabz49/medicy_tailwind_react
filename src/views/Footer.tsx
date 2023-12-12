import React from 'react';
import Logo from '../images/logoWebsite';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin  } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className='bg-teal-900 flex justify-center items-center w-full'>
      <div className='flex flex-col py-20 px-16 max-w-[1340px]'>
        <div className='flex flex-col md:flex-row md:space-x-16'>
          <div className='group flex items-start gap-4 cursor-pointer mb-[24px]'>
            <Logo />
            <h3 className='uppercase font-medium flex items- center group-hover:scale-[105%] text-white'>medicy.</h3>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Column 1 */}
            <div>
              <h4 className='text-lg sm:text-xl md:2xl font-semibold uppercase mb-2 text-teal-500'>Address</h4>
              <ul className='md:text-sm text-xs font-extralight space-y-2 text-white ml-2'>
                <li>4080 Repperts Coal Road Sackson,<br /> MS 00201 USA</li>
                <li>(+123) 685 78 455<br/>(+064) 336 987 245</li>
                <li className='cursor-pointer'>customer@<span className='font-semibold'>yourcompany</span>.com</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className='text-lg sm:text-xl md:2xl font-semibold uppercase mb-2 text-teal-500'>Information</h4>
              <ul className='md:text-sm text-xs font-extralight space-y-2 text-white ml-2'>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Mission</li>
                <li className="cursor-pointer">Future</li>
                <li className="cursor-pointer">Chain</li>
                <li className="cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
            <h4 className='text-lg sm:text-xl md:2xl font-semibold uppercase mb-2 text-teal-500'>Services</h4>  
            <ul className='md:text-sm text-xs font-extralight space-y-2 text-white ml-2'>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Resume Tips</li>
                <li className="cursor-pointer">Interview Tips</li>
                <li className="cursor-pointer">Salary Guides</li>
                <li className="cursor-pointer">Certification Information</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className='text-lg sm:text-xl font-semibold uppercase mb-2 text-teal-500'>Contact</h4>
              <p className='md:text-sm text-xs font-extralight space-y-2 text-white ml-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptate et expedita aut commodi nostrum at?
              </p>
              <label className="block mt-2">
                <span className="block text-xs font-extrabold text-teal-500 mb-2 underline-offset-2 underline">Email</span>
                <input type="email" className='w-full pl-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none
                  focus:border-teal-500 focus:ring-teal-500 block rounded-md focus:ring-1 text-[12px] py-[3px]' placeholder="" />
              </label>
            </div>
          </div>
        </div>
        <div className='w-full h-[2px] bg-teal-500 my-8'></div>
        <div className="flex flex-col space-y-2 md:flex-row  md:justify-between md:gap-8 items-center mt-4">
          <div className='flex space-x-2 text-white cursor-pointer'>
            <AiFillLinkedin className='h-6 w-6' />
            <AiFillFacebook className='h-6 w-6'/>
            <AiFillInstagram className='h-6 w-6'/>
            <AiFillTwitterSquare className='h-6 w-6'/>
          </div>  
          <p className="text-white text-sm md:text-base font-extralight text-center">
            &copy; 2023 Your Medical Hiring Website - All rights reserved. 
          </p>
          <div className="text-xs md:text-sm font-semibold text-white cursor-pointer text-center">
            Privacy Policy | Terms of Use
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;


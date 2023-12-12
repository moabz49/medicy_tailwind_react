import React,{useState} from 'react'
import { referralArray, referralTitle, referralSubtitle } from '../data';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaQuoteLeft } from "react-icons/fa";
import FadeIn from '../components/FadeIn';

const Referral: React.FC = () => {

  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [rotateQuote, setRotateQuote] = useState<string>(""); 
  
  const handleNextReview = () => {
    if (currentReviewIndex < referralArray.length - 1) {
      setCurrentReviewIndex(currentReviewIndex + 1);
      setRotateQuote("right"); 
    } else {
        setCurrentReviewIndex(referralArray.length - referralArray.length )
        setRotateQuote("right")
    }  
      setTimeout(() => {
        setRotateQuote("");
      }, 3000);
  }

  const handlePreviousReview = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
      setRotateQuote("left"); 

    } else {
      setCurrentReviewIndex(referralArray.length -1 )
      setRotateQuote("left"); 
    }  
      setTimeout(() => {
        setRotateQuote("");
      }, 3000);

  }

  const currentReview = referralArray[currentReviewIndex];

  const ratingNumber = currentReview.review.split('').length;
  // console.log(ratingNumber)

  return (
    <section className='w-full flex justify-center items-center bg-white py-16 sm:py-28'>
        <div className='flex flex-col items-center justify-center text-center w-full max-w-[1340px] md:space-y-4 space-y-2 mx-[20px]'>
          <FadeIn delay={0.4}>
            <h1 className='capitalize font-bold text-3xl md:text-5xl text-teal-900'> {referralTitle} </h1> 
          </FadeIn>
          <FadeIn delay={0.6} direction='left'>
            <p className='text-teal-500'>{referralSubtitle}.</p>
          </FadeIn>
          <FadeIn delay={0.8} direction='none'>
            <div className='relative flex flex-col items-center p-4 pb-8 bg-white hover:scale-[103%] duration-200 ease-in-out transition-transform transform shadow-lg shadow-black px-8 text-center cursor-pointer group'>
                <div className='absolute flex w-full px-4'>
                  <div className='flex w-full items-center justify-between text-xl md:text-2xl text-black'>
                    <BsChevronLeft className="hover:indigo-500" onClick={handlePreviousReview} />
                    <BsChevronRight onClick={handleNextReview} />
                  </div>
                </div>

                <div className='flex gap-4 items-center text-center'>
                  <p className='sm:text-[72px] text-[60px] text-teal-500'>{currentReview.review}</p>
                  <p className='font-extralight text-xl'>{ratingNumber} / 5</p>
                </div>
                <p className='mb-[12px] md:mb-[20px] sm:text-[18px] leading-[160%] text-[14px] font-light normal-case mx-[40px] '>
                  {currentReview.comment}
                </p>
                <div className='rounded-full p-4 bg-teal-500 mb-[20px]'>
                  <FaQuoteLeft className={` ${rotateQuote === 'right' ? 'rotate-45 "scale-[105%]' : rotateQuote === "left" ? "-rotate-45 scale-[105%]" : ''}text-2xl  text-white duration-300 ease-out transform transition-transform`}/>
                </div>
                <p className='capitalize  underline underline-offset-[12px] font-semibold text-base xs:text-lg  tracking-tight '>
                  {currentReview.name}
                </p>
              </div> 
          </FadeIn>
        </div>
    </section>
  )
}

export default Referral;
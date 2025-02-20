import React, { useEffect, useRef, useState } from 'react'

const AboutSection: React.FC = () => {
  const imageRef = useRef(null);
  const [scrollPos, setScrollPoss] = useState(0);

  useEffect(()=>{
    const handleScroll = () =>{
      setScrollPoss(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  const rotation = scrollPos*0.34;

  return (
    <div className='lg:w-[1120px] m-auto' >
      
      <p  className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-[80px] ' id='about'>About us</p>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 font-semibold bg-slate-100 rounded-2xl mx-4 h-[550px] py-4 mt-6'>
      <img src='/logo.PNG' alt='logo' className='md:w-40 m-8 p-4 2xs:w-20 2xs:m-0 2xs:p-0 opacity-10 absolute' ref={imageRef} style={{transform:`rotate(${rotation}deg)`}} />
        <div className='col-start-1 col-end-2  h-[200px] row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-full flex items-center px-6'>
          <p className='text-center text-[12px] md:text-[16px] font-semibold text-primary'>
            We are a forward-thinking company dedicated to creating innovative digital solutions. With a focus on security, user experience, and seamless functionality, we design websites, mobile apps, and software systems that empower businesses and individuals to succeed in the digital world.
          </p>
        </div>
        <div className='col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex items-center justify-center'>
          <img className='h-[300px]' src='/AboutUs.png' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto' >
      <p  className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-[80px]' id='about'>About us</p>
      <div className='grid grid-cols-2 grid-rows-2 font-semibold bg-slate-100 rounded-2xl mx-4'>
        <div className='col-start-1 col-end-3 row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 flex justify-center items-center px-2'>
          <p className='text-center text-[12px] text-primary'>
            We are a forward-thinking company dedicated to creating innovative digital solutions. With a focus on security, user experience, and seamless functionality, we design websites, mobile apps, and software systems that empower businesses and individuals to succeed in the digital world.
          </p>
        </div>
        <div className='col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 flex justify-center items-center'>
          <img className='' src='/AboutUs.png' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
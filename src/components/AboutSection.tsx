import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 lg:h-[700px] 3xs:pt-8 2xs:h-[600px] pb-12 h-[400px] ' id='about'>
      <p  className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] mt-10 3xs:pt-4 '>About us</p>
      <div className='flex justify-around py-4 px-2 font-semibold flex-col items-center'>
        <div className=''>
          <p className='text-center text-[14px] text-primary'>
            We are a forward-thinking company dedicated to creating innovative digital solutions. With a focus on security, user experience, and seamless functionality, we design websites, mobile apps, and software systems that empower businesses and individuals to succeed in the digital world.
          </p>
        </div>
        <div>
          <img src='/AboutUs.png' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
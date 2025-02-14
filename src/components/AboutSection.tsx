import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 lg:h-[700px] justify-around flex flex-col items-center 3xs:pt-8 3xs:h-[400px]' id='about'>
      <p className='text-center text-primary font-bold text-[18px] mt-10 mb-2 3xs:mb-0'>About </p>
      <div className='flex justify-around flex-col'>
        <div className='w-[240px]'>
          <p className='text-center text-[10px] text-primary'>
            We are a forward-thinking company dedicated to creating innovative digital solutions. With a focus on security, user experience, and seamless functionality, we design websites, mobile apps, and software systems that empower businesses and individuals to succeed in the digital world.
          </p>
        </div>
        
        <div className='bg-cover 3xs:w-[280px] h-[150px] w-[240px] bg-center '>
          <img src='/AboutUs.png' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
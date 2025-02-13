import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-14 lg:h-[700px] flex flex-col items-center' id='about'>
      <p className='text-center text-primary font-bold text-[24px] mt-10 mb-4'>About </p>
      <div className='flex justify-around flex-col'>
        <div className='w-[280px] h-[180px]'>
          <p className='text-center text-[12px] text-primary'>
            We are a forward-thinking company dedicated to creating innovative digital solutions. With a focus on security, user experience, and seamless functionality, we design websites, mobile apps, and software systems that empower businesses and individuals to succeed in the digital world.
          </p>
        </div>
        
        <div className='bg-cover w-[280px] bg-center '>
          <img src='/AboutUs.png' />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
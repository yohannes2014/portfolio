import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="w-screen py-[200px] bg-cover bg-center flex"
      style={{ backgroundImage: 'url(/HOMEback.jpg)' }}
    >
      <div className='lg:w-[1000px] h-[400px] p-4 grid grid-cols-4 grid-rows-4 lg:justify-around m-auto z-10 rounded-lg overflow-hidden shadow-hero backdrop-blur-sm '>
              <div className="text-primary border-b-2 md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-3 row-start-1 row-end-3 col-start-1 col-end-5 flex justify-center flex-col items-center">
              <h1 className="text-[16px] 3xs:text-[18px] 2xs:text-[32px] md:text-[40px] text-center font-black font-sans lg:text-[42px]">Welcome</h1>
              <p className="text-[14px] 3xs:text-[14px] font-semibold 2xs:text-[16px] text-center lg:text-[28px]">Your business solution is here!</p>
              <p className="text-[12px] 3xs:text-[12px] 2xs:text-[14px] lg:text-[16px] text-center mb-5 px-4">
                Building innovative, secure, and user-friendly digital solutions to help your business thrive.
              </p>
            </div>
            <div className='md:row-start-2 md:row-end-4 md:col-start-3 md:col-end-5 row-start-3 row-end-5 col-start-1 col-end-5 '>
            <img className='rounded-lg h-full w-full' src='/Digital-Solutions-and-Services-Company.jpg' alt='heroImage' />
            </div>
      
      </div>

    </div>
  );
};

export default HeroSection;

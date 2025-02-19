import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full pb-10 bg-cover bg-center flex items-center top-10"
      style={{ backgroundImage: 'url(/HOMEback.jpg)' }}
    >
      <div className='flex w-[900px] items-center m-auto z-10 rounded-lg mt-20 3xs:mt-20 2xs:mt-16 flex-col overflow-hidden lg:flex-row lg:'>
              <div className="text-primary mt-14">
              <h1 className="text-[16px] 3xs:text-[18px] 2xs:text-[24px] text-center font-black font-sans">Welcome</h1>
              <p className="text-[14px] 3xs:text-[14px] font-semibold 2xs:text-[16px] text-center">Your business solution is here!</p>
              <p className="text-[12px] 3xs:text-[12px] 2xs:text-[14px] text-center mb-5 px-4">
                Building innovative, secure, and user-friendly digital solutions to help your business thrive.
              </p>
            </div>
            <img className='w-full px-16 h-[130px] rounded-lg ' src='/Digital-Solutions-and-Services-Company.jpg' alt='heroImage' />
      
      </div>

    </div>
  );
};

export default HeroSection;

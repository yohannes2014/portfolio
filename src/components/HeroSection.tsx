import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full h-[370px] xl:h-[700px] bg-cover bg-center flex items-center top-10 "
      style={{ backgroundImage: 'url(/HOMEback.jpg)' }}
    >
      <div className='flex w-[900px] items-center m-auto z-10 rounded-lg mt-18 3xs:mt-20 flex-col overflow-hidden'>
              <div className="text-primary mt-14">
              <h1 className="text-[8px] 3xs:text-[12px] text-center font-black font-sans">Welcome</h1>
              <p className="text-[6px] 3xs:text-[10px] text-center">Your business solution is here!</p>
              <p className="text-[6px] 3xs:text-[8px] text-center mb-5 px-4">
                Building innovative, secure, and user-friendly digital solutions to help your business thrive.
              </p>
            </div>
            <img className='w-[200px] h-[130px] rounded-lg ' src='/Digital-Solutions-and-Services-Company.jpg' alt='heroImage' />
            
      
      </div>

    </div>
  );
};

export default HeroSection;

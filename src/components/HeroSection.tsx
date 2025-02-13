import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      id='home'
      className="w-full 3xs:h-screen xl:h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(/HOMEback.jpg)' }} 
    >
        <div className='lg:w-[1120px] m-auto'>
        Building innovative, secure, and user-friendly digital solutions to help your business thrive.
        </div>
    </div>
  );
};

export default HeroSection;

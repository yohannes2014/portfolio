import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="w-full 3xs:h-screen xl:h-[750px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url(/HOMEback.jpg)' }}  // Reference the image from the public folder
    >
        <div className='lg:w-[1120px] m-auto'>
        HeroSection
        </div>
    </div>
  );
};

export default HeroSection;

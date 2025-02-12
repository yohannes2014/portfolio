import React from 'react';
import HeaderCont from '../components/HeaderCont';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderCont />
      <div className='z-50 sticky top-0'>
        <Navigation />
      </div>
      <HeroSection/>
      <Service />
    </div>
  );
};

export default Home;

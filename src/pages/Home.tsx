import React from 'react';
import HeaderCont from '../components/HeaderCont';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Service from '../components/Service';
import AboutSection from '../components/AboutSection';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderCont />
      <div className='z-50 sticky top-0'>
        <Navigation />
      </div>
      <div>
      <HeroSection/>
      <Service />
      <AboutSection />
      <Portfolio />
      <Contact />
      </div>
      <Footer />
    
    </div>
  );
};

export default Home;

import React from 'react';
import HeaderCont from '../components/HeaderCont';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto'>
      <HeaderCont />
      <div className='z-50 sticky top-0'>
        <Navigation />
      </div>
      <p>Home</p>
    </div>
  );
};

export default Home;

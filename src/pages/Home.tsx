import React from 'react'
import HeaderCont from '../components/HeaderCont'
import Navigation from '../components/Navigation'

const Home:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto h-8 '>
    <HeaderCont />
    <Navigation />
      
    </div>
  )
}

export default Home

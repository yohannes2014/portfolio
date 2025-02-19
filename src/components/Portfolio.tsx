import React from 'react'
import { portFo } from '../card/portFolio'

const Portfolio: React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto' >
      <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-20 ' id='portfolio'>Portfolio</p>
      <div className='cursor-pointer py-4 px-4 lg:h-[800p] grid lg:grid-rows-2 lg:grid-cols-2 md:grid-cols-1 md:grid-rows-4 gap-4'>
        {portFo.map((item, index) => (

          <div key={index} className={`${item.contaner} bg-cover shadow-shadow bg-center w-full h-[200px] lg:h-[200px] rounded-md col-start-1 col-end-2`} >
          <img className='w-full h-full' src={item.image} alt="portfolio" />
          </div>

        ))}
      </div>

    </div>
  )
}

export default Portfolio

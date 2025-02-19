import React from 'react'
import { portFo } from '../card/portFolio'

const Portfolio:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 pb-8 lg:h-[700px] 3xs:pt-10' id='portfolio'>
        <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] mt-10 3xs:pt-4'>Portfolio</p>
        <div className='flex gap-5 flex-wrap justify-center cursor-pointer py-4'>
{portFo.map((item, index)=>(

            <div key={index} className=' bg-cover shadow-md shadow-gray-300 bg-center w-full h-[200px] rounded-md mx-4'
            style={{ backgroundImage: item.image }} 
            >
  
            </div>

))}


          
        </div>
   
    </div>
  )
}

export default Portfolio

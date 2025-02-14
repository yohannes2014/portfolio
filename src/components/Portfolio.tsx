import React from 'react'
import { portFo } from '../card/portFolio'

const Portfolio:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 lg:h-[700px] 3xs:pt-10' id='portfolio'>
        <p className='text-center text-primary font-bold text-[18px] mt-10 mb-4'>Portfolio</p>
        <div className='flex gap-4 flex-wrap justify-center cursor-pointer'>
{portFo.map((item, index)=>(

            <div key={index} className=' bg-cover shadow-md shadow-gray-300 bg-center w-[200px] h-[140px] rounded-md 3xs:w-[300px]'
            style={{ backgroundImage: item.image }} 
            >
  
            </div>

))}


          
        </div>
   
    </div>
  )
}

export default Portfolio

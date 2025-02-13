import React from 'react'
import { portFo } from '../card/portFolio'

const Portfolio:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-12 lg:h-[700px]' id='portfolio'>
        <p className='text-center text-primary font-bold text-[24px] my-10'>Portfolio</p>
        <div className='flex gap-8 flex-wrap justify-center cursor-pointer'>
{portFo.map((item, index)=>(

            <div key={index} className=' bg-cover shadow-md shadow-gray-300 bg-center w-[400px] h-[200px] rounded-md'
            style={{ backgroundImage: item.image }} 
            >
  
            </div>

))}


          
        </div>
   
    </div>
  )
}

export default Portfolio

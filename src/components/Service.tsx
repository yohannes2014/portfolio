import React from 'react';
import { serviceItem } from '../card/services';

const Service:React.FC = () => {
  return (
    <div className='lg:w-[1120px] md:w-[700px] sm:w-[600px] m-auto lg:h-[700px]' >
        <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] pt-[80px] mb-2' id='service'>Our Services</p>
        <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-2 py-4 px-4 justify-center' >
           {serviceItem.map((item,index)=>(
            <div 
            key={index} 
            className={item.container}
            style={{ backgroundImage:item.image }}
            >
            <p className="text-center 2xs:text-[16px] text-primary text-[12px] backdrop-blur-md py-2 font-bold">{item.title}</p>
            <p className='h-[180px]'></p>
        </div>
           ))}
        </div>
    </div>
  )
}

export default Service
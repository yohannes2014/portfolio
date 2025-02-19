import React from 'react';
import { serviceItem } from '../card/services';

const Service:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 lg:h-[700px] pb-4' id='service'>
        <p className='text-center text-primary 2xs:text-[28px] font-bold text-[18px] mt-10 3xs:pt-4 mb-2'>Our Services</p>
        <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-2 py-4 px-2 '>
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
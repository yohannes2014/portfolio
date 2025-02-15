import React from 'react';
import { serviceItem } from '../card/services';

const Service:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-4 lg:h-[700px]' id='service'>
        <p className='text-center text-primary font-bold text-[18px] mt-10 3xs:pt-4 mb-2'>Our Services</p>
        <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 lg:grid-rows-2 px-5'>
           {serviceItem.map((item,index)=>(
            <div 
            key={index} 
            className={item.container}
            style={{ backgroundImage:item.image }}
            >
            <p className="text-center bg-gray-200 text-primary text-[12px]">{item.title}</p>
            <p className='h-[180px]'></p>
        </div>
           ))}
        </div>
    </div>
  )
}

export default Service
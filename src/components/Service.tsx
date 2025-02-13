import React from 'react';
import { serviceItem } from '../card/services';

const Service:React.FC = () => {
  return (
    <div className='lg:w-[1120px] m-auto pt-20 h-[700px]' id='service'>
        <p className='text-center text-primary font-bold text-[24px] my-10'>Our Services</p>
        <div className='grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 lg:grid-rows-4 px-5'>
           {serviceItem.map((item,index)=>(
            <div 
            key={index} 
            className={item.container}
            style={{ backgroundImage:item.image }}
            >
            <p className={item.styleTitle}>{item.title}</p>
            <p className='h-[150px]'></p>
        </div>
           ))}
        </div>
    </div>
  )
}

export default Service
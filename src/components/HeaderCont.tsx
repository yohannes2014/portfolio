import React from 'react'

const HeaderCont:React.FC = () => {
  return (
    <div className="lg:w-[1120px] m-auto flex justify-between px-5 py-1 filter-[4px] backdrop-blur-md bg-gray-50 rounded-md" id="home">
      <a className="text-primary font-bold cursor-pointer hover:text-light 3xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" href="tel:+251 9124 445 517">Call: +251 9124 445 517</a>
      <a className="text-primary font-bold cursor-pointer hover:text-light  3xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]" href="mailto:m.yohannes2010@gmail.com">Email: m.yohannes2010@gmail.com</a>
    </div>
  )
}

export default HeaderCont



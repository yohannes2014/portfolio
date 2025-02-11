import React, { useState } from 'react'

const Navigation:React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false)

const handleMenu = () => {
  setClicked(!clicked)
}

  return (
    
    <div className='sticky top-0 w-ful bg-gray-100'>
         <div className="flex justify-between items-center mx-5 py-1">
            <div><a href="#"><img className="w-[70px]" src="logo.PNG" /></a></div>
            <div>
                <ul className="flex gap-5 md:inline-flex 4xs:hidden">
                    <li><a className="text-primary  font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" href="#home">Home</a></li>
                    <li><a className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" href="#service">Service</a></li>
                    <li><a className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" href="#about">About</a></li>
                    <li><a className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" href="#portfolio">Portfolio</a></li>
                    <li><a className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" href="#contact">Contact</a></li>
                </ul>
            </div>
            <div onClick={handleMenu} className=" md:hidden flex flex-col gap-[5px] cursor-pointer group ">
                <div className={`${clicked ? 'rotate-[40deg] translate-y-[6px] translate-x-[-1px]':''} w-[40px] h-[6px] rounded-md bg-primary group-hover:bg-light relative`}></div>
                <div className={`${clicked ? 'translate-y-[20px] hidden':''} w-[45px] h-[6px] rounded-md bg-primary ml-1 group-hover:bg-light relative`}></div>
                <div className={`${clicked ? 'rotate-[-50deg] translate-y-[-5px] translate-x-[-1px]':''} w-[40px] h-[6px] rounded-md bg-primary group-hover:bg-light relative`}></div>
            </div>
        </div>
    </div>
  )
}

export default Navigation
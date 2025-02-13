import React, { useEffect, useState } from 'react'
import { TbMenu3 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { HashLink  as Link} from "react-router-hash-link"

const Navigation:React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    // Event listener to detect scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {   
        setScrolling(true);
      }
      else {
        setScrolling(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 
  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      if (window.innerWidth > 768) {
        setClicked(false);
      } 
    };

    // Check screen width on initial load
    checkScreenWidth();

    // Add event listener to check on resize
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);



const handleMenu = () => {
  setClicked(!clicked)
}

  return (
    <div className={`w-ful ${scrolling ? 'shadow-background shadow-md backdrop-blur-md' :''} mb-[-125px] lg:w-[1120px] m-auto`}>
         <div className="flex justify-between items-center mx-5 py-1">
            <div><Link to="#home" smooth><img className="w-[70px]" src="logo.PNG" /></Link></div>
            <div>
                <ul className="flex gap-5 md:inline-flex 4xs:hidden">
                    <li><Link  className="text-primary  font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to='#home' smooth >Home</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#service" smooth >Service</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#about" smooth >About</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#portfolio" smooth >Portfolio</Link></li>
                    <li><Link  className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#contact" smooth >Contact</Link></li>
                </ul>
            </div>
            <div onClick={handleMenu} className='md:hidden' >
             {clicked ? <IoMdClose className='cursor-pointer text-primary font-black text-[35px]' /> : <TbMenu3 className='cursor-pointer text-primary font-black text-[35px]' /> }
              
            </div>
            <div className='shadow-md bg-slate-50 shadow-[#f3f3f3] w-full overflow-hidden absolute left-0 top-[90px]'>
                <ul className={`flex gap-5 flex-col w-full items-center ${clicked ? '':'mt-[-350px]'} `}>
                    <li><Link className="text-primary w-full font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#home" smooth>Home</Link></li>
                    <li><Link className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#service" smooth>Service</Link></li>
                    <li><Link className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#about" smooth>About</Link></li>
                    <li><Link className="text-primary font-semibold text-[18px] after:rounded-sm hover:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#portfolio" smooth>Portfolio</Link></li>
                    <li><Link className="text-primary font-semibold text-[18px] after:rounded-sm hovers:text-light after:h-1 after:block after:w-full transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out hover:after:bg-light" to="#contact" smooth>Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation
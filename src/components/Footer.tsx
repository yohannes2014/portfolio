import React from 'react';
import { HashLink  as Link} from "react-router-hash-link";

const Footer:React.FC = () => {
  return (
    <footer className="bg-blue-950">
      <div className="">
        <div className="footer-left">
          <p className='text-white text-center'>yohannes manaye</p>
          <p className='text-white text-center'>© 2025 yohannesmanaye. All rights reserved.</p>
        </div>
        <div className="ml-4">
          <ul className='pr-5 text-yellow-300'>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#service">Services</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#portfolio">Portfolio</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

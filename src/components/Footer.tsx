import React from 'react';


const Footer:React.FC = () => {
  return (
    <footer className="bg-blue-950">
      <div className="">
        <div className="footer-left">
          <p className='text-white text-center'>yohannesmanaye</p>
          <p className='text-white text-center'>© 2025 yohannesmanaye. All rights reserved.</p>
        </div>
        <div className="">
          <ul className='pr-5'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

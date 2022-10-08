import React from 'react';

// import logo
import Logo from '../assets/img/LOGO2.png';

// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='pb-[70px]' data-aos='fade-up' data-aos-offset='0'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' className="h-[40px] max-w-[378px]" />
          </a>
          {/* copyright text */}
          <p>&copy; <a href='https://alexcoronado.com' target='_blank' className='text-stroke text-blue hover:text-blue-200'>AlexCL Dev </a>2022. All rights reserved.</p>
          {/* social icons */}
          <div className='flex gap-x-4 text-blue text-lg'>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaYoutube />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaInstagram />
            </div>
            <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

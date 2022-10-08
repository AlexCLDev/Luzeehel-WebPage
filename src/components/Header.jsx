import React, { useState, useEffect } from 'react';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';

// import logo
import Logo from "../assets/img/LOGO1.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <header
      className={`${
        header ? 'top-0 h-[80px]' : 'top-9'
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className='flex items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className="h-[150px] max-w-[378px] "/>
        </a>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex gap-x-4 lg:gap-x-9'>
          <button className='text-heading font-medium text-sm lg:text-base hover:text-blue transition'>
            Sign In
          </button>
          <button className='btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition'>
            Sign Up
          </button>
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';

// import menu btn
import { BiMenu } from 'react-icons/bi';
import {navigation} from '../data'
import {navegacion} from '../datos'

const NavMobile = ({language}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageState, setLanguage] = useState(language)
  return (
    <nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'
      >
        <BiMenu />
      </div>
      <ul
        className={`${
          isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'
        } flex flex-col absolute w-full top-24 left-0 bg-white rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}
      >
        {languageState == 'English' ? 
        <>
        {navigation.map((item, index)=>{
          return(
            <li key={index}>
              <a href=''>{item.name}</a>
            </li>
          );
        })}   
        </>
        :
        <>
        {navegacion.map((item, index)=>{
          return(
            <li key={index}>
              <a href=''>{item.name}</a>
            </li>
          );
        })}   
        </>}
      </ul>
    </nav>
  );
};

export default NavMobile;

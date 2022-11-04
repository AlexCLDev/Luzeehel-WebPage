import React, { useState } from 'react';
import { useEffect } from 'react';
import {navigation} from '../data'
import {navegacion} from '../datos'

const Nav = ({language}) => {
  
  const [languageState, setLanguage] = useState(language);

  useEffect(()=>{
    setLanguage(language)
  },[language])
  return (
    <nav className='ml-[70px]'>
      <ul className='flex gap-x-[42px]'>
        {languageState == true ? 
        <>
        {navigation.map((item, index)=>{
          return(
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}   
        </>
        :
        <>
        {navegacion.map((item, index)=>{
          return(
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}   
        </>}
      </ul>
    </nav>
  );
};

export default Nav;

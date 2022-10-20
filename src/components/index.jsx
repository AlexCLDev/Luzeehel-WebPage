import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './Hero';
import Cards from './Cards';
import Facts from './Facts';
import Features from './Features';
import Courses from './Courses';
import Pricing from './Pricing';
import Newsletter from './Newsletter';
import Contact from './Contact';
import Footer from './Footer';
import Testimonials from './Testimonials';
import { useState } from 'react';
import { navigation } from "../data";
import { navegacion } from "../datos";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import logo
import Logo from "../assets/img/LOGO1.png";
import { useEffect } from 'react';

export const Home = () => {

  Aos.init({
    duration: 1800,
    offset: 100,
  });
  const [header, setHeader] = useState(false);  

  const [languageState, setLanguage] = useState('English')
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    console.log(languageState)
  }, [languageState])
  
  return (
    <div className='overflow-hidden'>
      <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
        <div className="container mx-auto">
          <header
            className={`${
              header ? "top-0 h-[80px]" : "top-9"
            } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
          >
            <div className="flex items-center">
              {/* logo */}
              <a href="#">
                <img src={Logo} alt="" className="h-[150px] max-w-[378px] " />
              </a>
              {/* nav */}
              <div className="hidden lg:flex">
                <Nav language={languageState} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex gap-x-4 lg:gap-x-9">
                {languageState == "English" ? (
                  <>
                    <button className="text-heading font-medium text-sm lg:text-base hover:text-blue transition">
                      Get in touch
                    </button>
                    <button onClick={() => setLanguage('Espanol')} className="btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition">
                      Language
                    </button>
                  </>
                ) : (
                  <>
                    <button className="text-heading font-medium text-sm lg:text-base hover:text-blue transition">
                      Ponte en contacto
                    </button>
                    <button onClick={() => setLanguage('English')} className="btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition">
                      Idioma
                    </button>
                  </>
                )}
              </div>
              {/* nav mobile */}
              <NavMobile />
            </div>
          </header>
          <div className="overflow-hidden">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition absolute"
              >
                Language
              </button>
            </div>
            <ul
              className={`${
                isOpen ? "max-h-60 p-8" : "max-h-0 p-0"
              } flex flex-col absolute w-full top-24 left-0 bg-white rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}
            >
              {languageState == "English" ? (
                <>
                  {navigation.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="">{item.name}</a>
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  {navegacion.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href="">{item.name}</a>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
            <Hero language={languageState} />
          </div>
        </div>
      </section>
      
      <Cards language={languageState}/>
      <Facts language={languageState}/>
      <Features language={languageState}/>
      <Courses language={languageState}/>
      <Pricing language={languageState}/>
      <Testimonials language={languageState}/>
      <Newsletter language={languageState}/>
      <Contact language={languageState}/>
      <Footer language={languageState}/>
    </div>
  )
}

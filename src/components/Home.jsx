import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./Hero";
import Cards from "./Cards";
import Facts from "./Facts";
import Features from "./Features";
import Courses from "./Courses";
import Pricing from "./Pricing";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import { useState } from "react";
import { useEffect } from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import logo
import Logo from "../assets/img/LOGO1.png";

export const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  const [languageState, setLanguage] = useState(true);
  const [header, setHeader] = useState(false);

  const Idioma = () => {
    setLanguage(!languageState);
    console.log(languageState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    });
  }, [header]);

  return (
    <div className="main">
      <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
        <div className="container mx-auto">
          <header
            className={`${
              header ? "top-0 h-[80px]" : "top-9"
            } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
          >
            <div className="flex items-center">
              {/* logo */}
              <a href="#home">
                <img src={Logo} alt="" className="h-[150px] max-w-[378px] " />
              </a>
              {/* nav */}
              <div className="hidden lg:flex">
                <Nav language={languageState} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex gap-x-4 lg:gap-x-9">
                {languageState == true ? (
                  <>
                    <button className="text-heading font-medium text-sm lg:text-base hover:text-blue transition">
                      Schedule
                    </button>
                    <button onClick={Idioma} className="btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition">
                      Spanish
                    </button>
                  </>
                ) : (
                  <>
                    <button className="text-heading font-medium text-sm lg:text-base hover:text-blue transition">
                      Agenda
                    </button>
                    <button onClick={Idioma} className="btn btn-md lg:px-[30px] bg-blue-100 border border-blue text-blue font-medium text-sm lg:text-base hover:bg-blue-200 hover:text-black transition">
                      Ingles
                    </button>
                  </>
                )}
              </div>
              {/* nav mobile */}
              <NavMobile />
            </div>
          </header>
          <Hero language={languageState} />
        </div>
        <Cards language={languageState} />
      </section>

      <div className="overflow-hidden">
        <Facts language={languageState} />
        <Features language={languageState} />
        <Courses language={languageState} />
        <Pricing language={languageState} />
        <Testimonials language={languageState} />
        <Newsletter language={languageState} />
        <Contact language={languageState} />
        <Footer language={languageState} />
      </div>
    </div>
  );
};

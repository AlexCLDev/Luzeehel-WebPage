import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import parallax
import { Parallax } from "react-parallax";
// import image
import Image from "../assets/img/hero/guy.png";
import Header from "./Header";

const Hero = ({ language }) => {
  const [languageState, setLanguage] = useState(language);

  useEffect(()=>{
    setLanguage(language)
  }, [language])
  return (  
    <section className="" id="home">
      <div className="">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32 lg:pt-32">
          <div className="flex-1 lg:mt-12">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {languageState == true? (
                <p>
                  Luzee-heal <br />
                  Be one with your soul
                </p>
              ) : (
                <p>
                  Luzee-heal <br />
                  Se uno contigo y tu alma
                </p>
              )}
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              {languageState == true
                ? "Meditation and sound healing facilitator 🧘‍♀️ - Reiki Practitioner - Healing my mind, heart and body one day at a time"
                : "Facilitador de meditación y sanación con sonido 🧘‍♀️ - Practicante de Reiki - Sanando mi mente, corazón y cuerpo un día a la vez"}
            </p>
            <div
              className="mb-12 space-x-4"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              {languageState == true ? (
                <>
                   <a href="#services"><button className="btn btn-sm lg:btn-lg btn-blue">
                    Get started
                  </button>
                  </a>
                  <a href="#aboutus"><button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 lg:px-4 hover:bg-stroke-3 transition">
                    Learn more
                  </button>
                  </a>
                </>
              ) : (
                <>
                <a href="#services"><button className="btn btn-sm lg:btn-lg btn-blue">
                    Inicia con Nosotros
                  </button>
                  </a>
                  <a href="#aboutus"><button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 lg:px-4 hover:bg-stroke-3 transition">
                    Conoce más
                  </button>
                  </a>
                  </>
              )}
            </div>
          </div>
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div
              className="flex-1 flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-28 lg:p-16 "
                  bgImage={Image}
                  bgImageAlt="logo"
                  strength={200}
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

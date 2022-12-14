import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// import react countup
import CountUp from "react-countup";
// import image
import Image from "../assets/img/LOGO2.png";
// import data
import { facts } from "../data";
import { about } from "../data";
import { acerca } from "../datos";
import { acercada } from "../datos";

const Facts = ({ language }) => {
  const [languageState, setLanguage] = useState(language);

  useEffect(()=>{
    setLanguage(language)
  }, [language])
  return (
    <section className="section-sm lg:section-lg" id='aboutus'>
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
        <div
          className="flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]"
          data-aos="fade-up"
        >
          {languageState == true ? (
            <>
              {about.map((item, index) => {
                const { title, desc } = item;
                return (
                  <div className="w-[100%]" key={index}>
                    <div className="h2 mb-2 lg:mb-4">{title}</div>
                    <p className="max-w-[480px]">{desc}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {acerca.map((item, index) => {
                const { title, desc } = item;
                return (
                  <div className="w-[100%]" key={index}>
                    <div className="h2 mb-2 lg:mb-4">{title}</div>
                    <p className="max-w-[480px]">{desc}</p>
                  </div>
                );
              })}
            </>
          )}
          {languageState == true ? (
            <>
              {facts.map((item, index) => {
                const { startNumber, endNumber, unit, title, desc } = item;
                return (
                  <div className="w-[45%]" key={index}>
                    <h2 className="h2 mb-2 lg:mb-4">
                      <CountUp
                        start={startNumber}
                        end={endNumber}
                        duration={2}
                        enableScrollSpy
                      />
                      {unit}+
                    </h2>
                    <div className="text-xl text-heading font-bold mb-3">
                      {title}
                    </div>
                    <p className="max-w-[240px]">{desc}</p>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {acercada.map((item, index) => {
                const { startNumber, endNumber, unit, title, desc } = item;
                return (
                  <div className="w-[45%]" key={index}>
                    <h2 className="h2 mb-2 lg:mb-4">
                      <CountUp
                        start={startNumber}
                        end={endNumber}
                        duration={2}
                        enableScrollSpy
                      />
                      {unit}+
                    </h2>
                    <div className="text-xl text-heading font-bold mb-3">
                      {title}
                    </div>
                    <p className="max-w-[240px]">{desc}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="flex-1 -order-1 lg:order-none">
          <div className="flex flex-col justify-center h-full lg:pl-[100px]">
            <h2
              className="h2 mb-12 max-w-[295px] md:max-w-none"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {languageState == true
                ? "Relax And Enjoy a Personalized Day Yoga With Us."
                : "Relajate y disfruta un dia personalizado de Yoga con nosotros."}
            </h2>
            <div className="mb-2" data-aos="fade-down" data-aos-delay="600">
              <img src={Image} alt="" />
            </div>
            <div
              className="text-lg font-bold mb-6 text-heading"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Luciely Castillo
              <span className="text-base text-paragraph font-normal">
                /Founder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

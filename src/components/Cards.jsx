import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// images
import CardImage1 from "../assets/img/cards/card-1.png";
import CardImage2 from "../assets/img/cards/card-2.png";
import CardImage3 from "../assets/img/cards/card-3.png";

const Cards = ({ language }) => {
  const [languageState, setLanguage] = useState(language);

  useEffect(()=>{
    setLanguage(language)
  }, [language])
  return (
    <section
      className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="1600"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
        {/* card group */}
        <div className="flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px] lg:-mt-[77px] z-10 mx-auto">
          {/* card 1 */}
          <div
            className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                {languageState == true ? 'Guided Meditation' : 'Meditacion Guiada'}
              </h4>
              <h2 className="h2 text-stroke-2">1</h2>
            </div>
            <div>
              <img src={CardImage1} alt="" />
            </div>
          </div>
          {/* card 2 */}
          <div
            className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                {languageState == true ? <p>Reiki &nbsp; &nbsp; therapy</p> : <p>Terapia &nbsp; &nbsp; Reiki</p>}
              </h4>
              <h2 className="h2 text-stroke-2">2</h2>
            </div>
            <div>
              <img src={CardImage2} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          className="bg-white w-full max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="max-w-[240px]">
            <div className="flex items-center mb-4 lg:mb-8">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
              {languageState == true ? 'Know more about us.' : 'Conoce mas sobre nosotros'}
              </h4>
              <h2 className="h2 text-stroke-2">3</h2>
            </div>
            <p className="mb-4 lg:mb-3">
            {languageState == true ? 'We re a company that offers alternative and complementary therapy services with the aim of balancing your soul.' 
            :
             'Somos una empresa que ofrece servicios de terapias con el objetivo de equilibrar tu alma.'}
            </p>
            <a
              className="text-xs lg:text-sm font-bold uppercase text-heading"
              href="#"
            >
             {languageState == true ? 'Read more' : 'Leer mas'}
            </a>
          </div>
          <div>
            <img src={CardImage3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;

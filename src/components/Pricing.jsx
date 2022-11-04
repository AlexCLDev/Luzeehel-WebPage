import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PopupModal } from "react-calendly";

// import data
import { pricing } from "../data";
import { precios } from "../datos";

const Pricing = ({ language }, props) => {
  const [languageState, setLanguage] = useState(language);
  const [isOpen, setisOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [modalUrl, setmodalUrl] = useState();

  const ModalO = async (e) => {
    setmodalUrl(e);

    setisOpen(true);
  };

  useEffect(() => {
    setLanguage(language);
    console.log(languageState)
  }, [language]);

  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        <div className="text-center mb-7 lg:mb-[70px]" id='services'>
          <h2
            className="h2 mb-3 lg:mb-[18px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {languageState == true
              ? "Pick a Services and Schedule"
              : "Selecciona un Servicio y Agenda"}
          </h2>
          <p
            className="max-w-[398px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {languageState == true
              ? "Pick a service and get started your journey with us for build your body and mind"
              : "Escoge un servicio y comienza tu viaje con nosotros para convertir tu cuerpo y alma"}
          </p>
        </div>
        {/* pricing cards */}
        <div className="flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px] flex-wrap">
          {languageState == true ? (
            <>
              {pricing.map((card, currentIndex) => {
                const {
                  id,
                  title,
                  price,
                  list,
                  buttonIcon,
                  buttonText,
                  delay,
                  calendlyurl,
                } = card;
                return (
                  <>
                    <div
                      onClick={() => setIndex(currentIndex)}
                      className="w-full max-w-[368px] min-h-[668px] h-full bg-white cursor-pointer relative"
                      key={currentIndex}
                      data-aos="fade-up"
                      data-aos-offset="400"
                      data-aos-delay={delay}
                    >
                      {/* card top */}
                      <div
                        className={`${
                          index === currentIndex
                            ? "bg-blue text-white"
                            : "bg-white text-heading"
                        } text-center pb-[34px] pt-[70px] border-b border-stroke-3 transition `}
                        onClick={() => ModalO(calendlyurl)} 
                      >
                        <div className="text-[24px] font-medium mb-[10px]">
                          {title}
                        </div>
                        <div className="text-[34px] font-semibold ">
                          {price}
                        </div>
                      </div>
                      <div className="px-[30px] pt-[18px] pb-[30px] ">
                        <p className="text-center mb-6 text-sm">
                          Discover your favorite class!
                        </p>
                        {/* card list */}
                        <ul className="flex flex-col gap-3 mb-14 flex-wrap">
                          {list.map((item, index) => {
                            const { icon, name } = item;
                            return (
                              <>
                                <li
                                  className="border border-stroke-3 p-4 rounded-md flex items-center gap-4"
                                  key={index}
                                >
                                  <div className="flex justify-center items-center bg-green-100 w-7 h-7 text-2xl text-green-300 rounded-full">
                                    {icon}
                                  </div>
                                  {name}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <div className="absolute bottom-[30px] left-0 right-0 w-full px-[30px]">
                          <button
                            onClick={() => ModalO(calendlyurl)}
                            className={`${
                              index === currentIndex
                                ? " bg-blue text-white"
                                : " border-blue"
                            } w-full h-[50px] rounded border border-blue flex items-center justify-center text-blue font-medium transition relative`}
                          >
                            {buttonText}
                            <div
                              className={`${
                                index === currentIndex
                                  ? "bg-green-200"
                                  : "bg-blue"
                              } w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}
                            >
                              {buttonIcon}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              {precios.map((card, currentIndex) => {
                const {
                  id,
                  title,
                  price,
                  list,
                  buttonIcon,
                  buttonText,
                  delay,
                  calendlyurl,
                } = card;
                return (
                  <>
                    <div
                      onClick={() => setIndex(currentIndex)}
                      className="w-full max-w-[368px] min-h-[668px] h-full bg-white cursor-pointer relative"
                      key={currentIndex}
                      data-aos="fade-up"
                      data-aos-offset="400"
                      data-aos-delay={delay}
                    >
                      {/* card top */}
                      <div
                        className={`${
                          index === currentIndex
                            ? "bg-blue text-white"
                            : "bg-white text-heading"
                        } text-center pb-[34px] pt-[70px] border-b border-stroke-3 transition `}
                        onClick={() => ModalO(calendlyurl)} 
                      >
                        <div className="text-[24px] font-medium mb-[10px]">
                          {title}
                        </div>
                        <div className="text-[34px] font-semibold ">
                          {price}
                        </div>
                      </div>
                      <div className="px-[30px] pt-[18px] pb-[30px] ">
                        <p className="text-center mb-6 text-sm">
                          Discover your favorite class!
                        </p>
                        {/* card list */}
                        <ul className="flex flex-col gap-3 mb-14 flex-wrap">
                          {list.map((item, index) => {
                            const { icon, name } = item;
                            return (
                              <>
                                <li
                                  className="border border-stroke-3 p-4 rounded-md flex items-center gap-4"
                                  key={index}
                                >
                                  <div className="flex justify-center items-center bg-green-100 w-7 h-7 text-2xl text-green-300 rounded-full">
                                    {icon}
                                  </div>
                                  {name}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <div className="absolute bottom-[30px] left-0 right-0 w-full px-[30px]">
                          <button
                            onClick={() => ModalO(calendlyurl)}
                            className={`${
                              index === currentIndex
                                ? " bg-blue text-white"
                                : " border-blue"
                            } w-full h-[50px] rounded border border-blue flex items-center justify-center text-blue font-medium transition relative`}
                          >
                            {buttonText}
                            <div
                              className={`${
                                index === currentIndex
                                  ? "bg-green-200"
                                  : "bg-blue"
                              } w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}
                            >
                              {buttonIcon}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>

        <PopupModal
          url={modalUrl}
          pageSettings={props.pageSettings}
          utm={props.utm}
          prefill={props.prefill}
          onModalClose={() => setisOpen(false)}
          open={isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
        />
      </div>
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import { useEffect } from "react";

// import icons
import { BsPlayCircleFill } from "react-icons/bs";

const Features = ({language}) => {
  const [isOpen, setOpen] = useState(false);
  const [languageState, setLanguage] = useState(language)

  useEffect(()=>{
    setLanguage(language)
  },[language])
  return (
    <section className="bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]">
      <div className="container mx-auto">
        <div
          className="bg-video bg-cover bg-center bg-no-repeat h-[310px] lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px] mb-[28px] lg:mb-20"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="500"
        >
          {/* play btn */}
          <div
            onClick={() => setOpen(!isOpen)}
            className="text-6xl lg:text-[120px] text-blue cursor-pointer hover:scale-110 transition"
          >
            <BsPlayCircleFill />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex-1" data-aos="fade-right">
            <div className="w-9 h-[2px] bg-blue mb-2 lg:w-[70px] rounded-full"></div>
            <h2 className="h2 mb-3 lg:mb-0">
              {languageState == true ? (
                <p>
                  The Better Way to <br /> Start Yoga
                </p>
              ) : (
                <p>
                  El mejor camino para <br /> Iniciar en Yoga
                </p>
              )}
            </h2>
          </div>
          <div className="flex-1" data-aos="fade-left">
            {languageState == true ? (
              <>
                <p className="max-w-[360px] mb-[18px] lg:mb-[38px]">
                  Practice anywhere, anytime. Explore a new way to exercise and
                  learn more about yourself. We are providing the best.
                </p>
                <a href="#services"><button className="btn btn-sm btn-blue">Get started</button></a>
              </>
            ) : (
              <>
                <p className="max-w-[360px] mb-[18px] lg:mb-[38px]">
                  Practica donde sea, en cualquier momento. Explora un nuevo camino
                  para ejercitarte y aprender mas sobre ti mismo.
                  Te proveemos los mejores servicios.
                </p>
                <a href="#services"><button className="btn btn-sm btn-blue">Inicia ahora</button></a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* video
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='klmBssEYkdU'
        onClose={() => setOpen(false)}
      /> */}
    </section>
  );
};

export default Features;

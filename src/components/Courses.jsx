import React, { useState, useEffect } from 'react';
import { PopupModal } from "react-calendly";


// import data
import { courses } from '../data';
import {cursos} from '../datos'


// import icons
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Courses = ({language}, props) => {

  const [isOpen, setisOpen] = useState(false);
  const [modalUrl, setmodalUrl] = useState();
  const [languageState, setLanguage] = useState(language);


  const ModalO = async (e) => {
    setmodalUrl(e);

    setisOpen(true);
  };

  useEffect(() => {
    setLanguage(language);
    console.log(languageState)
  }, [language]);

  return (
    <section className='section-sm lg:section-lg' id='classes'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-16 lg:mb-32'>
          <h2
            className='h2 mb-3 lg:mb-[18px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            {languageState == true ? 'Group Classes'
            : 'Clases en Grupo'}
          </h2>
          <p
            className='max-w-[480px] mx-auto'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            {languageState == true ? 'Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.'
            : 'Practica donde quieras, a cualquier momento. Explora un nuevo camino y aprende mas acerca de ti mismo. Nosotros solo ofrecemos lo mejor.'}
          </p>
        </div>
        {/* course list */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
          {languageState == true ? 
          <>
          {courses.map((item, index) => {
            const { image, title, desc, link, delay, calendlyurl } = item;
            return (
              <div
                className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
                data-aos='fade-up'
                data-aos-delay={delay}
                key={index}
                onClick={() => ModalO(calendlyurl)} 
              >
                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                  <img src={image} alt='' />
                </div>
                <div>
                  <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                  {/* stars */}
                  <div className='flex gap-x-2 text-blue'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <button className='font-medium hover:text-blue' onClick={() => ModalO(calendlyurl)}>
                    {link}
                  </button>
                </div>
              </div>
            );
          })}
          </>
          :
          <>
          {cursos.map((item, index) => {
            const { image, title, desc, link, delay, calendlyurl } = item;
            return (
              <div
                className='w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition'
                data-aos='fade-up'
                data-aos-delay={delay}
                key={index}
                onClick={() => ModalO(calendlyurl)} 
              >
                <div className='-mt-[38px] lg:-mt-12 mb-4 lg:mb-6'>
                  <img src={image} alt='' />
                </div>
                <div>
                  <h4 className='text-lg lg:text-xl font-semibold mb-2 lg:mb-4'>
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
                  {/* stars */}
                  <div className='flex gap-x-2 text-blue'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <button className='font-medium hover:text-blue' onClick={() => ModalO(calendlyurl)}>
                    {link}
                  </button>
                </div>
              </div>
            );
          })}
          </>}

        </div>
        <div className='flex justify-center'>
          <button
            className='btn btn-sm btn-blue'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            Browse all
          </button>
        </div>
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
    </section>
  );
};

export default Courses;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// import icons
import { MdEmail } from 'react-icons/md';

const Newsletter = ({language}) => {
  const [languageState, setLanguage] = useState(language)

  useEffect(()=>{
    setLanguage(language)
  },[language])

  return (
    <section className='section-sm lg:section-lg bg-green min-h-[520px] mt-[100px]'>
      <div className='container mx-auto'>
        <div
          className='border-[8px] border-green-300 rounded-lg text-center pt-[70px] pb-12'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-offset='300'
        >
          <h4
            className='text-[26px] text-white font-bold mb-[14px]'
            data-aos='fade-up'
            data-aos-delay='600'
            data-aos-offset='300'
          >
            {languageState == true ? 'Subscribe Our Newsletter'
            : 'Suscrebete a Nuestro Periodico'}
          </h4>
          <p
            className='text-green-200 mb-12'
            data-aos='fade-up'
            data-aos-delay='800'
            data-aos-offset='300'
          >
            {languageState == true ? 'Subscribe our newsletter for further updates about us'
            : 'Suscribete a nuestro periodico para futuras actualizaciones sobre nosotros'}
          </p>
          <form
            className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4'
            data-aos='fade-up'
            data-aos-delay='1000'
          >
            <div className='w-full relative flex'>
              <div className='absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-green-300'>
                <MdEmail />
              </div>
              <input
                type='text'
                className='form-control w-full border border-green-300 bg-transparent outline-none placeholder:text-green-200 text-white pl-[60px]'
                placeholder='Enter your email address'
              />
            </div>
            <button className='btn btn-lg bg-brown text-white w-full lg:max-w-[180px]'>
              {languageState == true ? 'Suscribe'
              : 'Suscribirse'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

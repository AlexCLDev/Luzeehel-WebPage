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


export const Home = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='overflow-hidden'>
      
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Testimonials/>
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

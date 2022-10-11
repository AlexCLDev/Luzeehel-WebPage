import React from "react";
import TestiSlider from "./TestiSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="h2 mb-3 lg:mb-[18px] mt-[100px]"
          data-aos="fade-up"
          data-aos-delay="600">
            What other people say
          </h2>
          <p 
          className="max-w-[398px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="700"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;

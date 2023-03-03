import React from "react";
import Image from "../assets/img/hero/guy.png";
// import logo
import Logo from "../assets/img/LOGO1.png";
import bg from "../assets/img/hero/bg.png";

const ComingSoon = () => {
  return (
    <div className="mx-auto text-center flex">
      <img src={bg} className="w-[900px] mx-auto absolute right-0" />
      <img src={Logo} className="w-[700px] mx-auto absolute mt-[5%]" />
      <div className="ml-[55%] mt-[18%] z-10">
        <h1 className="text-[55px] font-medium text-heading ">Coming Soon!</h1>
        <span className="text-[20px]">We're doing some really amazing stuff!</span>
        <div className="mt-5 space-x-10">
          <a href="#services">
            <button className="btn btn-sm lg:btn-lg btn-blue">
              Instagram
            </button>
          </a>
          <a href="#aboutus">
            <button className="btn btn-sm lg:btn-lg text-heading bg-blue border border-stroke-1 px-4 lg:px-4 hover:bg-stroke-3 transition">
              Schedule
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

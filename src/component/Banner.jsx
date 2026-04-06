import React from "react";
import bannerImg from "../assets/bannerImg-removebg-preview.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto p-2  mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#1313130d] rounded-xl p-8 gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl lg:text-[58px] font-bold text-[#131313] leading-[1.2] mb-12 max-w-[550px]">
            Books to freshen up your bookshelf
          </h1>

          <button className="px-8 py-5 bg-[#23BE0A] text-white text-xl font-bold rounded-lg hover:bg-[#1fa308] transition-all duration-300 hover:shadow-lg active:scale-95">
            View The List
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={bannerImg}
            alt="Banner Book"
            className="w-full max-w-[300px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

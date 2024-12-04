import Image from "next/image";
import React from "react";

const PromoBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center justify-between p-8 sm:p-16"
      style={{ backgroundImage: "url('/icons/image 1.png')" }}
    >
      <div className="text-white max-w-lg sm:max-w-md">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-gray-200 mb-6 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
          pellentesque feugiat gravida tincidunt lobortis mi.
        </p>
        <button
          type="button"
          className="h-10 px-14 py-2 m-1 text-[#14b8a6] transition-colors duration-200 transform bg-white rounded-md"
        >
          Buy Now
        </button>
      </div>

      <div className="absolute bottom-0 right-[14rem] sm:right-10 lg:right-[14rem] lg:bottom-[2rem] transform translate-x-4 sm:translate-x-8 translate-y-8">
        <Image
          src="/icons/promo-2.png"
          alt="Promo"
          className="w-60 sm:w-72 lg:w-80 object-contain"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white text-[#14b8a6] font-bold rounded-full p-3 sm:p-4 shadow-lg flex items-center justify-center">
        <div className="text-lg sm:text-2xl text-center">
          60%
          <br />
          <span className="text-sm sm:text-base">off</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;

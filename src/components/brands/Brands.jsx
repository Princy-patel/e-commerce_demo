import React from "react";
import BrandsCard from "./BrandsCard";

function Brands() {
  return (
    <>
      <div className="flex justify-between pt-16">
        <h1 className="text-3xl font-bold mb-8">Feature Products</h1>
        <button
          type="button"
          className="h-10 px-14 py-2 m-1 text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
        >
          View All
        </button>
      </div>

      <div>
        <BrandsCard />
      </div>
    </>
  );
}

export default Brands;

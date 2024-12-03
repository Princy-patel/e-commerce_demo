import Image from "next/image";
import React from "react";

const CategoryCard = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer">
      <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-2">
        <Image
          src={icon}
          alt={label}
          className="w-12 h-12"
          width={100}
          height={100}
        />
      </div>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
};

export default CategoryCard;

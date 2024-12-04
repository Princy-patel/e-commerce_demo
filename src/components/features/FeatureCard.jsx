import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start px-4 py-4">
      <div className="text-gray-700 mb-2 sm:mr-4 flex items-center">
        <Image
          src={icon}
          alt={title}
          className="w-12 h-12"
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

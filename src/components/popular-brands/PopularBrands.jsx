import Image from "next/image";
import React from "react";

const brands = [
  { id: 1, name: "Converse", logo: "/icons/brand-1.png" },
  { id: 2, name: "Adidas", logo: "/icons/brand-2.png" },
  { id: 3, name: "Chanel", logo: "/icons/brand-3.png" },
  { id: 4, name: "Puma", logo: "/icons/brand-4.png" },
  { id: 5, name: "Skechers", logo: "/icons/brand-5.png" },
  { id: 6, name: "Forever 21", logo: "/icons/brand-6.png" },
  { id: 7, name: "Fila", logo: "/icons/brand-7.png" },
];

const PopularBrands = () => {
  return (
    <div className="py-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">Popular Brands</h1>
      <div className="flex flex-wrap justify-center items-center gap-10 px-6 md:px-20">
        {brands.map((brand) => (
          <Image
            key={brand.id}
            src={brand.logo}
            alt={brand.name}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
            height={100}
            width={100}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;

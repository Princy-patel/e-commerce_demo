import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { icon: '/icons/men.png', label: 'Men' },
  { icon: '/icons/women.png', label: 'Women' },
  { icon: '/icons/kids.png', label: 'Kids' },
  { icon: '/icons/cosmetics.png', label: 'Cosmetics' },
  { icon: '/icons/accessories.png', label: 'Accessories' },
  { icon: '/icons/home.png', label: 'Home' },
  { icon: '/icons/footwear.png', label: 'Footwears' },
  { icon: '/icons/sports.png', label: 'Sports' },
];

const Categories = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold mb-8">Categories</h2>
      <div className="flex justify-between gap-8 flex-wrap">
        {categories.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} label={category.label} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

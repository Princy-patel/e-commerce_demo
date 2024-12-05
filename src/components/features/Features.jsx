import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/icons/truck.png",
    title: "Free Shipping",
    description: "Above all Orders over 200rs.",
  },
  {
    icon: "/icons/indian-rupee.png",
    title: "Money Guarantee",
    description: "45 Days for Exchange",
  },
  {
    icon: "/icons/headphones.png",
    title: "Online Support",
    description: "24/7 Customer Care",
  },
  {
    icon: "/icons/credit-card.png",
    title: "Flexible Payment",
    description: "Pay with multiple Credit Card",
  },
];

const Features = (props) => {
  return (
    <div className="bg-white py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 bg-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-r last:border-none sm:border-gray-200"
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

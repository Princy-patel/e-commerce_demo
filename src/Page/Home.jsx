import Brands from "@/components/brands/Brands";
import Categories from "@/components/categories/Categories";
import Features from "@/components/features/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container" style={{ padding: "0rem 4rem" }}>
        <Categories />
        <Brands />
        <Features />
      </div>
    </div>
  );
}

export default Home;

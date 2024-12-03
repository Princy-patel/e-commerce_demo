import Categories from "@/components/categories/Categories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container px-16 mx-auto">
        <Categories />
      </div>
    </div>
  );
}

export default Home;

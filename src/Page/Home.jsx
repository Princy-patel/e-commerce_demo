import Brands from "@/components/brands/Brands";
import Categories from "@/components/categories/Categories";
import FAQ from "@/components/faq/FAQ";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/promobanner/PromoBanner";
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
        <PromoBanner />
        <Brands />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

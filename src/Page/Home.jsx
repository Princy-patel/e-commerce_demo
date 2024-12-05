import Categories from "@/components/categories/Categories";
import CustomerReview from "@/components/customer-review/CustomerReview";
import FAQ from "@/components/faq/FAQ";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularBrands from "@/components/popular-brands/PopularBrands";
import PromoBanner from "@/components/promobanner/PromoBanner";
import React from "react";
import Products from "@/components/products/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container" style={{ padding: "0rem 4rem" }}>
        <Categories />
        <Products title="Feature Products" />
        <Features />
        <PromoBanner />
        <Products title="Most Popular Products" />
        <PopularBrands />
        <FAQ />
        <CustomerReview />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

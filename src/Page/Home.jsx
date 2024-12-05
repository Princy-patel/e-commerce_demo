"use client";

import Categories from "@/components/categories/Categories";
import CustomerReview from "@/components/customer-review/CustomerReview";
import FAQ from "@/components/faq/FAQ";
import Features from "@/components/features/Features";
import Hero from "@/components/Hero";
import PopularBrands from "@/components/popular-brands/PopularBrands";
import PromoBanner from "@/components/promobanner/PromoBanner";
import React, { useEffect } from "react";
import Products from "@/components/products/Products";
import { useDispatch } from "react-redux";
import { fetchProduct } from "@/slice/getProductData";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
}

export default Home;

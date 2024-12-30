import React from "react";
import ProductCard from "../products/ProductCard";
import { useSelector } from "react-redux";
import Link from "next/link";

function Wishlist() {
  const productDataSelector = useSelector((state) => state.productData.data);

  return productDataSelector && productDataSelector.length > 0 ? (
    <ProductCard />
  ) : (
    <div className="flex flex-col items-center justify-center my-10 [&>*]:p-2">
      <p>Oops, your wishlist is empty. Let’s fill it up!</p>
      <Link href={"/"}>
        <button
          type="button"
          className="w-56 h-10 px-14 py-2 bg-[#14b8a6] transition-colors duration-200 transform border text-white border-[#14b8a6] rounded-md hover:bg-white hover:text-[#14b8a6]"
        >
          Home
        </button>
      </Link>
    </div>
  );
}

export default Wishlist;

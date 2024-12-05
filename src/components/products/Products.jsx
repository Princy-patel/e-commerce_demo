import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function Products(props) {
  const productData = useSelector((state) => state.productData.data);

  return (
    <>
      <div className="flex justify-between pt-16">
        <h1 className="text-3xl font-bold mb-8">{props.title}</h1>
        <button
          type="button"
          className="h-10 px-14 py-2 m-1 text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
        {productData && productData.length > 0 ? (
          productData?.map((product, index) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Products;

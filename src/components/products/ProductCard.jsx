import { addToCart, toggleLikes } from "@/slice/getProductData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { toast, Toaster } from "sonner";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  const toggleDescription = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(toggleLikes(product.id));

    if (product?.isLiked) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
        <Link href="#">
          <div className="relative w-full h-64">
            <Image
              src={product?.image}
              className="w-full h-full object-cover"
              alt={product?.title}
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute bottom-2 left-2 bg-white px-1 py-1 rounded-sm text-black text-sm font-semibold hover:bg-white hover:text-[#14b8a6] transition duration-500 ease-in-out">
              {product?.rating.rate} ⭐
            </div>
            <div
              onClick={handleLike}
              className={`text-sm absolute top-0 right-0 ${
                product.isLiked ? "" : "bg-[#14b8a6]"
              } px-4 text-white rounded-full h-8 w-8 flex flex-col items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out`}
            >
              {product.isLiked ? (
                <FaHeart className="text-red-500" size={30} />
              ) : (
                <FaRegHeart />
              )}
            </div>
          </div>
          <div className="px-4 py-3">
            <h3 className="font-semibold text-lg truncate hover:text-[#14b8a6] transition duration-500 ease-in-out">
              {product?.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {isExpanded
                ? product?.description
                : `${product?.description.slice(0, 100)}...`}
              <button
                onClick={toggleDescription}
                className="text-[#14b8a6] font-semibold ml-2"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </p>
            <div className="flex flex-row items-center gap-3 mt-2">
              <p className="font-semibold text-lg">{product?.price}</p>
              <p className="text-sm text-red-400">(81% off)</p>
            </div>
          </div>
          <div className="px-4 py-3 mt-auto">
            <button
              className="h-10 w-full text-white transition-colors duration-200 transform bg-[#14b8a6] rounded-md hover:bg-[#2e988b]"
              onClick={(e) => handleAddToCart(product.id, e)}
            >
              Add To Cart
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;

import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="relative w-full h-64 bg-gray-300"></div>
      <div className="px-4 py-3">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
        <div className="flex flex-row items-center gap-3">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;

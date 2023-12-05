import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-xs border border-gray-300 rounded overflow-hidden shadow-lg">
      <div className="animate-pulse bg-gray-300 px-4 md:w-full md:m-2 md:h-40 w-full m-auto h-24 flex justify-center items-center">
        {/* Placeholder for image */}
        <div className="w-full h-full bg-gray-400"></div>
      </div>
      <div className="px-4 py-4">
        <div className="animate-pulse bg-gray-300 h-4 w-2/3 mb-2"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-1/2 mb-2"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-1/3 mb-2"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-2/3 mb-2"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-1/2 mb-2"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-1/4"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

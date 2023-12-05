import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCardSkeleton from "./ProductCardSkeleton";

export const AllItems = ({ products }: any) => {
  const isLoading = useSelector((state: any) => state.app.isLoading);
  const isError = useSelector((state: any) => state.app.isError);

  return (
    <div className="bg-white border rounded-md px-6 py-6 m-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 uppercase">All Items</h2>
        <Link to={`/search?query=${encodeURIComponent("all")}`}>
          <p className="text-sm text-cyan-500 font-semibold">
            see more &#8250;
          </p>
        </Link>
      </div>
      {isError == true || (isLoading == false && products?.length == 0) ? (
        <p className="text-center text-red-500 font-semibold">
          No data available
        </p>
      ) : (
        ""
      )}
      <div className={`grid grid-cols-2 md:grid-cols-5 gap-4`}>
        {isLoading
          ? Array(10)
              .fill(0)
              .map((e: any, index: number) => (
                <div key={index} className="">
                  <ProductCardSkeleton />
                </div>
              ))
          : products?.slice(0, 10)?.map((product: any, index: number) => (
              <div key={index} className="">
                <ProductCard product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};

import React from "react";
import "slick-carousel/slick/slick.css";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const BestSellingItemsSliderMobile = ({ bestSellingProducts, title }: any) => {
  const isLoading = useSelector((state: any) => state.app.isLoading);
  const isError = useSelector((state: any) => state.app.isError);

  return (
    <div className="md:hidden bg-white px-4 mt-4 rounded-md">
      <h2 className="text-lg font-bold mb-4 uppercase">{title}</h2>
      {isError == true ||
      (isLoading == false && bestSellingProducts?.length == 0) ? (
        <p className="text-center text-red-500 font-semibold mb-4">
          No data available
        </p>
      ) : (
        ""
      )}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {bestSellingProducts
          ?.slice(0, 10)
          ?.map((product: any, index: number) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSellingItemsSliderMobile;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSelector } from "react-redux";

const BestSellingItemsSlider = ({ bestSellingProducts, title }: any) => {
  //   const settings = {
  //     centerMode: true,
  //     centerPadding: "2px",
  //     slidesToShow: 1,
  //     speed: 500,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: false,
  //   };
  const isLoading = useSelector((state: any) => state.app.isLoading);
  const isError = useSelector((state: any) => state.app.isError);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="hidden md:block border rounded-md px-6 md:px-6 py-4 bg-white md:m-4">
      <h2 className="text-2xl font-bold mb-4 ml-2 uppercase">{title}</h2>
      {isError == true ||
      (isLoading == false && bestSellingProducts?.length == 0) ? (
        <p className="text-center text-red-500 font-semibold">
          No data available
        </p>
      ) : (
        ""
      )}
      <Slider {...settings}>
        {isLoading
          ? Array(10)
              .fill(0)
              .map((e: any, index: number) => (
                <div key={index} className="">
                  <ProductCardSkeleton />
                </div>
              ))
          : bestSellingProducts
              ?.slice(0, 10)
              ?.map((product: any, index: number) => (
                <div key={index} className=" ">
                  <ProductCard product={product} />
                </div>
              ))}
      </Slider>
    </div>
  );
};

// You can customize the NextArrow and PrevArrow components as per your design
const NextArrow = (props: any) => (
  <div className="text-red-500" {...props}>
    <button>Next</button>
  </div>
);

const PrevArrow = (props: any) => (
  <div className="text-red-500" {...props}>
    <button>Prev</button>
  </div>
);

export default BestSellingItemsSlider;

import React from "react";
import Slider from "react-slick";

interface ProductsProps {
  products: ProductProps[];
}

interface ProductProps {
  image: string;
  title: string;
}

export const MobileViewCategoryCard = ({ products }: ProductsProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" md:hidden bg-white rounded-md container max-w-sm w-full p-4 sm:w-1/2">
      <h2 className=" font-semibold mb-4 px-4 uppercase">{`Best Selling Categories`}</h2>

      <Slider {...settings} className="flex">
        {products.map((product, index) => (
          <div
            key={index}
            className="card flex border-2 border-gray-300 flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
          >
            <div className="prod-img">
              <img
                src={product.image}
                className="w-full object-cover object-center"
                alt={product.title}
              />
            </div>
            <div className="prod-title text-center">
              <p className="text-l text-gray-500 font-bold">{product.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

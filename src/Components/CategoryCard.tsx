import React from "react";

interface CategoryProps {
  title: string;
  image: string;
}

export const CategoryCard = ({ title, image }: CategoryProps) => {
  return (
    <div className="container max-w-sm w-full p-4 sm:w-1/2">
      <div className="card flex border-2 border-gray-300 flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="prod-img">
          <img src={image} className="w-36 h-36 object-cover object-center" />
        </div>
        <div className="prod-title text-center">
          <p className="text-l  text-gray-500 font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

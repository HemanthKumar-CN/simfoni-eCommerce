import React, { useState } from "react";
import BestSellingItemsSlider from "./BestSellingItemsSlider";
import BestSellingItemsSliderMobile from "./MobileViewComponents/BestSellingItemsMobile";
import { useSelector } from "react-redux";
import Furniture from "../assets/officeFurniture.png";
import { useParams } from "react-router-dom";

const ProductDescriptionMobileView = ({ product }: any) => {
  return (
    <div className="flex flex-col bg-white  md:hidden p-4">
      {/* Main Image */}
      <img
        src={Furniture}
        alt={product.title}
        className="w-full h-auto cursor-zoom-in transition-transform duration-300 transform hover:scale-125 md:w-1/2 md:mr-4"
      />

      <div className="flex flex-col mt-4 md:w-1/2">
        {/* Additional Images */}
        <div className="flex justify-center md:justify-start space-x-2 mb-4">
          {Array(3)
            .fill(Furniture)
            .map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional ${index + 1}`}
                className="w-20 h-auto cursor-pointer hover:opacity-80"
              />
            ))}
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">mobile{product.title}</h2>
          <p className="text-gray-600 mb-2">ID: {product.id}</p>
          <p className="text-lg font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-2">Quantity: {product.quantity}</p>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">
            Add to Cart
          </button>

          {/* Additional Information */}
          <div className="mt-4 text-xs text-gray-500 text-justify">
            <h2 className="font-bold text-gray-500">Additional Information</h2>
            {/* Add more product information as needed */} Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur totam alias odit?
            Laudantium, blanditiis! Quo omnis recusandae quia consequatur sed
            quam optio rem? Totam, voluptates placeat voluptate sint assumenda
            architecto. Eos animi quidem, distinctio fuga voluptates dignissimos
            sequi suscipit odio iste nostrum ad recusandae reprehenderit ab
            impedit sunt iusto. Tempora aliquam nostrum molestias necessitatibus
            veritatis voluptatibus quod. Laudantium, ducimus porro.
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDescription = () => {
  const product = useSelector((state: any) => state.app.products);
  const [productImage, setProductImage] = useState(
    "https://m.media-amazon.com/images/I/71NANIn2jhL._SX679_.jpg",
  );
  const params = useParams();

  console.log(params);

  return (
    <div>
      <div className=" bg-white m-4 rounded-md hidden md:flex justify-between p-4">
        <div className="w-1/2">
          {/* Main Image */}
          <img
            src={productImage}
            //   src={product.mainImage}
            alt={product.title}
            className="w-96 ml-4 h-auto cursor-zoom-in transition-transform duration-300 transform hover:scale-125"
          />

          {/* Additional Images */}
          <div className="flex mt-4">
            {[
              "https://m.media-amazon.com/images/I/61FyHHb-izL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/81RJ69XCwdL._SX679_.jpg",
              "https://m.media-amazon.com/images/I/71NANIn2jhL._SX679_.jpg",
            ].map((image: any, index: number) => (
              <img
                key={index}
                src={image}
                onClick={() => setProductImage(image)}
                alt={`Additional ${index + 1}`}
                className="md:w-40 h-auto cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-1/2 ml-4">
          <h2 className="text-2xl font-bold mb-2">
            Pintola All Natural Peanut Butter Crunchy 1kg | Unsweetened | 30g
            Protein | Vegan Peanut Butter, 100% Pure Roasted Peanuts | Non Gmo |
            High in Protein Spread, Gluten & Cholesterol Free, Nut Butter
            {product.title}
          </h2>
          <p className="text-gray-500 mb-2 text-sm font-semibold">
            SKU Number {params.productId} {product.id}
          </p>
          <p className="text-xl font-bold mb-2">
            Price: $6.70/each{product.price}
          </p>
          <p className="text-gray-600 mb-2 font-semibold">
            Quantity: 1kg {product.quantity}
          </p>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>

          {/* Additional Information */}
          <div className="mt-4 text-sm text-gray-500 text-justify">
            {/* Add more product information as needed */}
            <h2 className="font-bold text-gray-500">Additional Information</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            dolorum vel odit temporibus officia iusto autem quibusdam
            consequuntur expedita, assumenda saepe quis quas minima modi.
            Dolorum reiciendis vero repellendus numquam? Quis beatae quidem
          </div>
        </div>
      </div>

      <ProductDescriptionMobileView product={product} />

      <BestSellingItemsSlider
        bestSellingProducts={product}
        title={"Best Selling Items"}
      />
      <BestSellingItemsSliderMobile
        title={"Best Selling items"}
        bestSellingProducts={product}
      />
    </div>
  );
};

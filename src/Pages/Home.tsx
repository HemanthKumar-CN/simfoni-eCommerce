import React, { useEffect } from "react";
import { Carousel } from "../Components/Carousel";
import { CategoryCard } from "../Components/CategoryCard";
import Rugs from "../assets/rugs.png";
import Lighting from "../assets/lighting.png";
import Kids from "../assets/kids.png";
import Furniture from "../assets/officeFurniture.png";
import Appliance from "../assets/applicance.png";
import { MobileViewCategoryCard } from "../Components/MobileViewComponents/MobileViewCategoryCard";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import BestSellingItemsSlider from "../Components/BestSellingItemsSlider";
import BestSellingItemsSliderMobile from "../Components/MobileViewComponents/BestSellingItemsMobile";
import { AllItems } from "../Components/AllItems";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import { SearchTags } from "../Components/SearchTags";
import { useSelector } from "react-redux";
import { getProducts } from "../Redux/action";

export const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const product = useSelector((state: any) => state.app.products);

  useEffect(() => {
    dispatch(getProducts("all"));
  }, []);

  const products = [
    {
      image: Appliance,
      title: "Appliances",
    },
    {
      image: Furniture,
      title: "Office Furniture",
    },
    {
      image: Rugs,
      title: "Rugs",
    },
    {
      image: Lighting,
      title: "Lighting",
    },
    {
      image: Kids,
      title: "Baby & Kids",
    },
  ];

  // const product = {
  //   image: Furniture,
  //   title: "Robinsons Orange Squash No added sugar 1 ltr",
  //   code: "432267",
  //   price: "0.93/each",
  //   discount: "Saving % 4.60",
  //   supplier: "Supplier",
  //   deliveryDate: "22nd Jan",
  //   quantity: 0,
  // };

  const BestSellingProducts = [
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.83/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.83/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.83/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.83/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.83/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
    {
      image: Furniture,
      title: "Robinsons Orange Squash No added sugar 1 ltr",
      code: "432267",
      price: "0.73/each",
      discount: "Saving % 4.60",
      supplier: "Supplier",
      deliveryDate: "22nd Jan",
      quantity: 0,
    },
  ];

  console.log(product, "!!!!!!!!!!!!!!!!!!!!!!!!!");

  return (
    <div>
      <Carousel />
      <div className="px-14 py-4 bg-white hidden md:block m-4 rounded-md">
        <h2 className=" font-bold mb-4 px-4 uppercase text-lg">{`Best Selling Categories`}</h2>
        <div className=" flex">
          <CategoryCard title={"Appliances"} image={Appliance} />
          <CategoryCard title={"Furniture"} image={Furniture} />
          <CategoryCard title={"Rugs"} image={Rugs} />
          <CategoryCard title={"Lighting"} image={Lighting} />
          <CategoryCard title={"Baby & Kids"} image={Kids} />
        </div>
      </div>
      <MobileViewCategoryCard products={products} />
      {/* <div className="flex">
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div> */}
      <BestSellingItemsSlider
        bestSellingProducts={product}
        title={"Best Selling Items"}
      />
      <BestSellingItemsSliderMobile
        title={"Best Selling items"}
        bestSellingProducts={product}
      />
      <AllItems products={product} />
      <BestSellingItemsSlider
        bestSellingProducts={product}
        title={"New Arrivals"}
      />
    </div>
  );
};

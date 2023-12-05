import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import Navbar from "../Components/Navbar";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import { Footer } from "../Components/Footer";
import { SearchPage } from "../Pages/SearchPage";
import { ProductDescription } from "../Components/ProductDescription";

export const MainRoutes = () => {
  return (
    <>
      <Navbar />
      {/* <ScrollToTopButton /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
      </Routes>
      <Footer />
    </>
  );
};

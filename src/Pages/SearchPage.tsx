import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import { filterProducts, searchProducts, sortProducts } from "../Redux/action";
import { useSelector } from "react-redux";
import { ProductTypes } from "../Utils/ProductTypes";
import ProductCard from "../Components/ProductCard";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";

export const SearchPage = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  // const [filterData, setFilterData] = useState([]);
  const dispatch: Dispatch<any> = useDispatch();

  const searchQuery: string =
    new URLSearchParams(location.search).get("query") || "all";

  const sortBy = new URLSearchParams(location.search).get("sortBy") || "";
  const maxValue = new URLSearchParams(location.search).get("maxVal") || "";
  const minValue = new URLSearchParams(location.search).get("minVal") || "";
  const searchData = useSelector(
    (state: any) => state.app.search.searchProducts,
  );
  const searchDataLoading = useSelector(
    (state: any) => state.app.search.isLoading,
  );

  const filteredData = useSelector((state: any) => state.app.filterData);

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollTop + container.clientHeight >=
        container.scrollHeight - 100
    ) {
      // Trigger fetchProducts when scrolling near the bottom (adjust threshold as needed)
      setPage((prev) => prev + 1);
      dispatch(searchProducts(searchQuery, page.toString()));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    console.log("Entering the main search api call!!!!");
    dispatch(filterProducts([], maxValue, minValue));
    dispatch(searchProducts(searchQuery, "1"));
    return () => {};
  }, [searchQuery]);

  useEffect(() => {
    if (filteredData.length) {
      dispatch(sortProducts(filteredData, sortBy));
    } else {
      dispatch(sortProducts(searchData, sortBy));
    }
  }, [sortBy]);

  useEffect(() => {
    console.log(maxValue, minValue, "!!!!----");
    dispatch(filterProducts(searchData, maxValue, minValue));
  }, [maxValue, minValue]);

  console.log(filteredData, "SSSSSSSSSS!!!");

  return (
    <div className="bg-white md:p-4 p-2 m-0 md:m-4">
      <h2 className="text-2xl font-bold mb-2 ml-4">"{searchQuery}"</h2>
      <h2 className="text-xs font-semibold text-gray-400 mb-4 ml-8">
        Found {filteredData.length ? filteredData.length : searchData.length}{" "}
        items
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-5 gap-6 p-4"
        style={{ minHeight: "300px" }}
      >
        {searchDataLoading == true
          ? Array(10)
              .fill(0)
              .map((e) => <ProductCardSkeleton />)
          : ""}

        {filteredData.length ? (
          filteredData.map((product: ProductTypes, index: number) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))
        ) : searchData.length ? (
          searchData.map((product: ProductTypes, index: number) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 font-semibold">
            No data available
          </p>
        )}
      </div>
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import { searchProducts, sortProducts } from "../Redux/action";
import { useSelector } from "react-redux";
import { ProductTypes } from "../Utils/ProductTypes";
import ProductCard from "../Components/ProductCard";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";

export const SearchPage = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const dispatch: Dispatch<any> = useDispatch();

  const searchQuery: string =
    new URLSearchParams(location.search).get("query") || "all";

  const sortBy = new URLSearchParams(location.search).get("sortBy") || "";
  const searchData = useSelector(
    (state: any) => state.app.search.searchProducts,
  );
  const searchDataLoading = useSelector(
    (state: any) => state.app.search.isLoading,
  );

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
    dispatch(searchProducts(searchQuery, "1"));
    return () => {};
  }, [searchQuery]);

  useEffect(() => {
    dispatch(sortProducts(searchData, sortBy));
  }, [sortBy]);

  console.log(sortBy, "SSSSSSSSSS");

  return (
    <div className="bg-white md:p-4 p-2 m-0 md:m-4">
      <h2 className="text-2xl font-bold mb-2 ml-4">"{searchQuery}"</h2>
      <h2 className="text-xs font-semibold text-gray-400 mb-4 ml-8">
        Found {searchData.length} items
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

        {searchData?.map((product: ProductTypes, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
};

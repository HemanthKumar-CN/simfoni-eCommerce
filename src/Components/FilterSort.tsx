import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { DropdownButton } from "./DropdownButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MultiRangeSlider from "multi-range-slider-react";

export const FilterSort = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownFilter, setDropdownFilter] = useState(false);
  const [dropdownSort, setDropdownSort] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10000);
  const [sortBy, setSortBy] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSort = (str: string) => {
    setSortBy(str);
    setDropdownSort(false);
    // navigate();
    const currentURL = new URL(window.location.href);
    const params = new URLSearchParams(currentURL.search);

    // console.log(params);

    params.set("sortBy", str);
    // params.set('filter', `${minValue}to${maxValue}`);

    currentURL.search = params.toString();

    // console.log(currentURL.href, currentURL, params);
    // console.log(`${currentURL.pathname}${currentURL.search}`);
    navigate(`${currentURL.pathname}${currentURL.search}`);
  };

  const handleInput = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleFilter = () => {
    const currentURL = new URL(window.location.href);
    const params = new URLSearchParams(currentURL.search);

    // console.log(params);

    params.set("minVal", minValue.toString());
    params.set("maxVal", maxValue.toString());
    // params.set('filter', `${minValue}to${maxValue}`);

    currentURL.search = params.toString();

    navigate(`${currentURL.pathname}${currentURL.search}`);
    setDropdownFilter(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // console.log(
  //   JSON.parse(localStorage.getItem("trending") || ""),
  //   trendingSearches,
  //   "----",
  // );

  return (
    <>
      {/* <div className=" p-4 flex  md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <DropdownButton title="Purchase Organization" />
        <DropdownButton title="Company" />
        <DropdownButton title="Plant" />
      </div> */}

      <div className="p-4 flex flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-4">
        <DropdownButton
          title="Purchase Organization"
          className="mb-2 md:mb-0 w"
          buttonClassName="w-full"
        />

        {/* Wrap the next two buttons in a div for mobile layout */}
        <div className="md:flex">
          <DropdownButton
            title="Company"
            className="mb-2 md:mb-0 md:mr-4"
            buttonClassName="w-36"
          />
          <DropdownButton title="Plant" buttonClassName="w-36" />
        </div>
      </div>

      {/* <div className="flex items-center space-x-0">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow h-full border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        />
        <button className="bg-blue-500 text-white h-full px-4 py-1  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
          Search
        </button>
      </div> */}

      <DropdownButton
        title="All Categories"
        className="md:hidden px-4"
        buttonClassName="w-72"
      />

      <div className="flex justify-between items-center p-4 w ">
        {/* First Div */}
        <div className="flex items-center space-x-4 w ">
          {/* {input box} */}
          {/* <div className="flex items-center space-x-0">
            <input
              type="text"
              placeholder="Search"
              className=" border md:w-96 flex-grow p-2 rounded-md"
            />
            <button className="bg-blue-500 rounded-md text-white px-4 py-2 ">
              Search
            </button>
          </div> */}

          <div className="flex items-center space-x-0 relative " ref={inputRef}>
            <input
              type="text"
              placeholder="Search"
              className="border md:w-96 flex-grow p-2 rounded-md"
              onClick={toggleDropdown}
              value={searchQuery}
              onChange={(e: any) => setSearchQuery(e.target.value)}
            />
            {/* Search Button */}
            <Link
              to={`/search?query=${encodeURIComponent(searchQuery || "all")}`}
            >
              <button
                className="bg-blue-500 rounded-md text-white px-4 py-2"
                onClick={() => setDropdownVisible(false)}
              >
                Search
              </button>
            </Link>

            {/* Dropdown */}
            {dropdownVisible && (
              <div className="absolute top-full z-50 left-0 w-48 md:w-96 max-h-48 overflow-y-auto border border-t-0 rounded-b-md bg-white">
                {["all", "light camera"].map((e: string) => (
                  <Link to={`/search?query=${encodeURIComponent(e)}`}>
                    <div
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSearchQuery(e);
                        setDropdownVisible(false);
                      }}
                    >
                      {e}
                    </div>
                  </Link>
                ))}

                {/* <div className="p-2 cursor-pointer hover:bg-gray-100">
                  Option 2
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-100">
                  Option 3
                </div> */}
                {/* Add more items as needed */}
              </div>
            )}
          </div>

          <button className="hidden md:flex  rounded-md ml-2 bg-transparent border-2 bg-white border-green-700 px-4 py-2 font-semibold text-green-500 hover:bg-green-500 hover:text-white transition duration-300">
            Upload
          </button>
        </div>

        {/* Second Div */}
        <div className=" hidden md:flex space-x-4 ">
          {/* Dropdown Button 1 */}
          <div>
            <DropdownButton
              title="Filter"
              handleClick={() => setDropdownFilter(!dropdownFilter)}
            />
            {dropdownFilter && (
              <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4">
                {/* Price Range Boxes */}
                <div className="flex justify-between mb-4">
                  <input
                    type="number"
                    max={maxValue}
                    placeholder="Start"
                    className="w-1/3 p-2 border border-gray-300 rounded-md"
                    value={minValue}
                    onChange={(e) => set_minValue(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    placeholder="End"
                    className="w-1/3 p-2 border border-gray-300 rounded-md"
                    value={maxValue}
                    onChange={(e) => set_maxValue(Number(e.target.value))}
                  />
                </div>

                <MultiRangeSlider
                  style={{ border: "none", boxShadow: "none" }}
                  ruler={false}
                  barInnerColor="#01a29d"
                  min={0}
                  max={10000}
                  step={5}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />

                <button
                  onClick={handleFilter}
                  className="border rounded-md px-2 py-1 text-white bg-cyan-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <div>
            <DropdownButton
              title="Sort By"
              handleClick={() => setDropdownSort(!dropdownSort)}
            />
            {dropdownSort && (
              <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
                {/* Add your dropdown content here */}
                <p
                  onClick={() => handleSort("asc")}
                  className={`${
                    sortBy == "asc" ? "bg-blue-600 text-white" : ""
                  } px-4 py-2 hover:bg-slate-200 border-2 cursor-pointer`}
                >
                  Title: From A to Z
                </p>
                <p
                  onClick={() => handleSort("desc")}
                  className={`${
                    sortBy == "desc" ? "bg-blue-600 text-white" : ""
                  }px-4 py-2 hover:bg-slate-200 border-2 cursor-pointer`}
                >
                  Title: From Z to A
                </p>
                <p
                  onClick={() => handleSort("priceDesc")}
                  className={` ${
                    sortBy == "priceDesc" ? "bg-blue-600 text-white" : ""
                  }px-4 py-2 hover:bg-slate-200 border-2 cursor-pointer`}
                >
                  Price: High to Low
                </p>
                <p
                  onClick={() => handleSort("priceAsc")}
                  className={`${
                    sortBy == "priceAsc" ? "bg-blue-600 text-white" : ""
                  }px-4 py-2 hover:bg-slate-200 border-2 cursor-pointer`}
                >
                  Price: Low to High
                </p>
                {/* Add more items as needed */}
              </div>
            )}
          </div>
          {/* <button className="  px-8 py-2  border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
            Filter
          </button> */}
          {/* Dropdown Button 2 */}
          {/* <button className="bg-red-500 text-white px-6 py-2 rounded-md">
            Dropdown 2
          </button> */}
        </div>
      </div>
    </>

    // <div className=" p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    //   <DropdownButton title="Purchase Organization" />
    //   <DropdownButton title="Company" />
    //   <DropdownButton title="Plant" />
    // </div>
  );
};

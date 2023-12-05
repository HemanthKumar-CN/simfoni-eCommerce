// Navbar.js

import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaHistory,
  FaChartBar,
  FaHeart,
  FaAngleDown,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart, CiWallet, CiShoppingCart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FilterSort } from "./FilterSort";
import { CategoryNav } from "./CategoryNav";
import { MobileNav } from "./MobileViewComponents/MobileNav";
import { useNavigate } from "react-router-dom";

// import Avatar from './Avatar'; // Assume you have a separate Avatar component

const Navbar = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <MobileNav />
      <nav className="hidden md:flex  flex-col bg-white md:flex-row justify-between items-center ">
        {/* Logo */}
        <div
          className="flex items-center mb-4 md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div>{/* <GiHamburgerMenu /> */}</div>
          <img
            src="https://www.google.com/s2/favicons?domain=simfoni.com&sz=128"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          {/* <span className="font-bold text-xl">Your Logo</span> */}
        </div>

        {/* Navigation Buttons */}
        <div className=" flex text-gray-800 font-semibold  flex-col md:flex-row md:space-x-4 mb-4 md:mb-0">
          <button className=" mb-2 md:mb-0">Catalog</button>
          <button className=" mb-2 md:mb-0">BuyDesk</button>
          <button className=" mb-2 md:mb-0">History</button>
          <button className=" mb-2 md:mb-0">Dashboard</button>
        </div>

        {/* Search Input */}
        <div className="flex  items-center mb-4 md:mb-0">
          {/* <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 mr-2 rounded border"
        />
        <FaSearch className="" /> */}
          <div className="relative flex items-center">
            {/* <!-- Dropdown Button with Box --> */}
            <div className="relative inline-block">
              <button className="py-2 px-4  rounded-l-md focus:outline-none border">
                <span className="block">PO</span>
                <span className="absolute inset-y-0 right-0 flex items-center ">
                  <FaAngleDown />
                </span>
              </button>
            </div>

            {/* <!-- Search Input Box --> */}
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 w-64"
            />

            {/* <!-- Search Icon on the right side --> */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35M15 10a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z"
                ></path>
              </svg>
            </div>
          </div>

          <button className=" ml-2 bg-transparent border-2 border-green-700 rounded-md px-4 py-2 font-semibold text-green-500 hover:bg-green-500 hover:text-white transition duration-300">
            Help
          </button>
        </div>

        {/* Icon Buttons */}
        <div className="flex space-x-8">
          <button className="">
            {" "}
            <CiWallet fontSize={25} />{" "}
          </button>
          <button className="">
            {" "}
            <CiHeart fontSize={25} />{" "}
          </button>
          <button className="">
            {" "}
            <CiShoppingCart fontSize={25} />{" "}
          </button>
          <button className="">
            {" "}
            <CiBellOn fontSize={25} />{" "}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setAccountDropdown(!accountDropdown)}
              className="text-gray-800 font-semibold focus:outline-none"
            >
              Username
            </button>
            {/* <!-- Dropdown Menu --> */}
            <div
              className={`absolute right-0 mt-6 bg-white border rounded shadow-md ${
                accountDropdown ? "" : "hidden"
              }`}
            >
              {/* <!-- Dropdown content goes here --> */}
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <FilterSort />
      <CategoryNav />
    </>
  );
};

export default Navbar;

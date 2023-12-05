import React from "react";
import { CiBellOn, CiHeart, CiShoppingCart, CiWallet } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <div className="md:hidden flex items-center justify-between">
      {/* Logo and Hamburger Menu */}
      <div className="flex items-center" onClick={() => navigate("/")}>
        <div>
          <GiHamburgerMenu />
        </div>
        <img
          src="https://www.google.com/s2/favicons?domain=simfoni.com&sz=128"
          alt="Logo"
          className="w-6 h-6 mr-2"
        />
        {/* <span className="font-bold text-xl">Your Logo</span> */}
      </div>

      {/* List of Icons */}
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

      {/* Avatar */}
      <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

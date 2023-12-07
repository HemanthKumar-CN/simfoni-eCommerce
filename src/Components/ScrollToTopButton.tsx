import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down enough to show the button
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 z-40 right-8 bg-orange-500 p-3 rounded-full cursor-pointer transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp color="white" size={20} />
    </div>
  );
};

export default ScrollToTopButton;

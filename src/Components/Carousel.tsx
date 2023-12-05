import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Carousel = () => {
  const images: string[] = [
    "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1532795986-dbef1643a596?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length,
    );
  };

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden p-4 md:p-0">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

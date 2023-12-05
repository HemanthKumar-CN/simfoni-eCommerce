import React from "react";

interface DropdownItem {
  title: string;
  className?: string;
  buttonClassName?: string;
  handleClick?: () => void;
}

export const DropdownButton = ({
  title,
  className,
  buttonClassName,
  handleClick,
}: DropdownItem) => {
  return (
    <div
      onClick={handleClick}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        className={`inline-flex md:w-60 justify-between items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ${buttonClassName}`}
      >
        {title}
        {/* <!-- Angle Down Icon --> */}
        <svg
          className="h-4 w-4 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

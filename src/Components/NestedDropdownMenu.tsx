import React from "react";

export const NestedDropdownMenu = () => {
  return (
    <div className="absolute right-0 top-0 mt-0 ml-48 w-48 bg-white border border-gray-300 rounded-md shadow-md hidden">
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        Nested Option 1
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        Nested Option 2
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
        Nested Option 3
      </a>
    </div>
  );
};

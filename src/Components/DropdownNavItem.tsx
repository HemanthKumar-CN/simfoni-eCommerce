import React from "react";

interface DropdownNavItemProps {
  title: string;
  hasNestedMenu?: boolean;
  children?: string | JSX.Element;
}

export const DropdownNavItem = ({
  title,
  hasNestedMenu,
  children,
}: DropdownNavItemProps) => {
  const [isNestedMenuOpen, setNestedMenuOpen] = React.useState(false);

  const handleToggleNestedMenu = () => {
    setNestedMenuOpen(!isNestedMenuOpen);
  };

  return (
    <li className="relative inline-block text-left">
      <button
        type="button"
        onClick={handleToggleNestedMenu}
        className="inline-flex justify-center items-center w-full px-4 py-2   rounded-md shadow-sm  text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
      >
        {title}
        {/* Angle Icon */}
        <svg
          className={`h-4 w-4 ml-2  ${
            hasNestedMenu == false && "transform rotate-90"
          }`}
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
      {/* {hasNestedMenu && children} */}
    </li>
  );
};

import React from "react";

export const SearchTags = () => {
  const tags = [
    "Construction Helmet",
    "Saws",
    "Cider",
    "Apple Juice",
    "Construction Costume Blue",
    "Tapes",
    "Construction Suit",
    "Pullers",
    "Pickaxes and Crowbars",
    "Carrots",
    "Construction Hammer",
    "Wrenches",
    "Screwdrivers",
    "Construction Shovels",
    "Pullers",
    "Kinoa",
    "Banana",
    "Apple Cider Vinegar",
    "Storage Container",
    "Orange Squash",
  ];

  return (
    <div className="bg-white md:mx-4 mx-0 my-4 p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        People Searching for
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-200 border-2 border-gray-300 text-gray-600 px-2 py-1 rounded-md"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

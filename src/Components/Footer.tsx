import React from "react";
import { SearchTags } from "./SearchTags";

export const Footer = () => {
  return (
    <div>
      <SearchTags />
      <div className="text-center mt-16 mb-8 text-gray-500">
        {" "}
        &#169;2022 - Simfoni
      </div>
    </div>
  );
};

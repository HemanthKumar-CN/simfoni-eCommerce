import React from "react";
import { DropdownNavItem } from "./DropdownNavItem";
import { NestedDropdownMenu } from "./NestedDropdownMenu";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export const CategoryNav = () => {
  return (
    <div className=" hidden md:flex bg-white mx-4 rounded-md">
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>All Categories</span>
          <FaAngleDown />
        </button>
        <ul className="dropdown-content z-30 absolute hidden text-gray-700 pt-1 ml-4 ">
          <li>
            <a
              className="rounded-t bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Beverages
            </a>
          </li>
          <li className="dropdown">
            <a
              className=" inline-flex bg-white border-b-2 hover:text-blue-600 py-2 px-4 items-center w-64"
              href="#"
            >
              Cleaning Supplies
              <FaAngleRight className="ml-auto" />
            </a>

            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-60 -mt-10 whitespace-nowrap">
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block"
                  href="#"
                >
                  ANCILLARIES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  CATERING & KITCHEN SUPPLIES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  FLOOR CARE MACHINES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Janitorial & tools
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  PAPER
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className=" inline-flex bg-white border-b-2 hover:text-blue-600 py-2 px-4 items-center w-64"
              href="#"
            >
              Food & Beverage
              <FaAngleRight className="ml-auto" />
            </a>

            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-60 -mt-10 whitespace-nowrap">
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  ANCILLARIES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  CATERING & KITCHEN SUPPLIES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  FLOOR CARE MACHINES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Janitorial & tools
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  PAPER
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              className="rounded-b  bg-white border-b-2 hover:text-blue-600 py-2 px-4 block w-64"
              href="#"
            >
              Medical Equipment & Supplies
            </a>
          </li>
          <li className="dropdown">
            <a
              className=" inline-flex bg-white border-b-2 hover:text-blue-600 py-2 px-4 items-center w-64"
              href="#"
            >
              Office Supplies
              <FaAngleRight className="ml-auto" />
            </a>

            <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-60 -mt-10 whitespace-nowrap">
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block"
                  href="#"
                >
                  ANCILLARIES
                </a>
              </li>
              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  CATERING & KITCHEN SUPPLIES
                </a>
              </li>

              <li>
                <a
                  className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  PAPER
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>Beverages</span>
        </button>
      </div>
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>Cleaning Supplies</span>
          <FaAngleDown />
        </button>
        <ul className="dropdown-content z-30 absolute hidden text-gray-700 pt-1 ml-4 w-72">
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block"
              href="#"
            >
              ANCILLARIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              CATERING & KITCHEN SUPPLIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              FLOOR CARE MACHINES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Janitorial & tools
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              PAPER
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>Food & Beverages</span>
          <FaAngleDown />
        </button>
        <ul className="dropdown-content z-30 absolute hidden text-gray-700 pt-1 ml-4 w-72">
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block"
              href="#"
            >
              ANCILLARIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              CATERING & KITCHEN SUPPLIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              FLOOR CARE MACHINES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Janitorial & tools
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              PAPER
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>Medical Equipment & Supplies</span>
        </button>
      </div>
      <div className="dropdown inline-block relative">
        <button className=" font-semibold py-2 px-4 rounded inline-flex items-center space-x-1">
          <span>Office Supplies</span>
          <FaAngleDown />
        </button>
        <ul className="dropdown-content z-30 absolute hidden text-gray-700 pt-1 ml-4 w-72">
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block"
              href="#"
            >
              ANCILLARIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              CATERING & KITCHEN SUPPLIES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              FLOOR CARE MACHINES
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Janitorial & tools
            </a>
          </li>
          <li>
            <a
              className=" bg-white border-b-2 hover:text-blue-600 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              PAPER
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

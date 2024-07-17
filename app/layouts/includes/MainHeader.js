"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const MainHeader = () => {
  const [shopCategoryOpen, setShopCategoryOpen] = useState(false);

  const handlePopupOpen = () => {
    setShopCategoryOpen(true);
  };

  const handlePopupClose = () => {
    setShopCategoryOpen(false);
  };

  const categoryOptions = [
    "Antiques",
    "Art",
    "Automatic",
    "Baby",
    "Books",
    "Business & Industrial",
    "Cameras",
    "Laptops",
    "Computers",
    "Mobiles",
    "Tablets",
    "Clothes",
    "Steels",
    "Toys",
    "Makeup Kits",
    "Sports",
    "Skin Care",
    "Stationary",
    "Home & Garden",
    "Jewellery & Watches",
    "Travel",
    "Video Games & Console",
    "EveryThing Else",
  ];

  return (
    <>
      <div id="MainHeader" className="border-b">
        <div className="flex justify-between items-center w-full max-auto max-w-[1200px]">
          <div className="flex items-center bg-white w-full">
            <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  width={120}
                  height={0}
                  alt="logo"
                />
              </Link>
              <div id="ShopByCategory" className="relative text-[14px]">
                <div
                  className="relative flex items-center text-[14px] text-[#333333] hover:text-[#0654ba] cursor-pointer"
                  onMouseOver={handlePopupOpen}
                  onMouseLeave={handlePopupClose}
                >
                  Shop by category
                  <div className="absolute z-999999 right-0">
                    <BsChevronDown
                      size={15}
                      style={{ color: "black", strokeWidth: "0.76" }}
                    />
                  </div>
                </div>
                <div
                  id="CategoryDropdown"
                  className={`absolute ${
                    shopCategoryOpen ? "flex" : "hidden"
                  } bg-white w-[700px] h-[550px] text-[#333333] z-40 top-[44px] left-0 border shadow-lg`}
                  onMouseOver={handlePopupOpen}
                  onMouseLeave={handlePopupClose}
                >
                  <CategoryCard />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center">
                  <div className="relative flex items-center justify-between border-2 border-gray-900 w-full">
                    <div className="p-2 flex items-center w-[90%]">
                      <button className="flex items-center text-gray-400">
                        <AiOutlineSearch size={22} />
                      </button>
                      <input
                        className="w-full placeholder-gray-400 text-[16px] pl-3 focus:outline-none"
                        placeholder="Search for anything"
                        type="text"
                      />
                    </div>
                    <div className="h-10 flex items-center border-l border-[#cdcbcb] text-[11px]">
                      <select
                        id="categories"
                        name="categories"
                        className="w-full h-full pl-2"
                      >
                        <option>All Categories</option>
                        {categoryOptions.map((category, index) => (
                          <option key={index}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button className="flex items-center bg-[#3665f3] text-sm font-semibold text-white p-[11px] ml-2 px-14">
                    Search
                  </button>
                  <div className="text-[11px] text-[#767676] px-2 hover:text-blue-500 cursor-pointer">
                    Advanced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;

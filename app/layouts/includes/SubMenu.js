"use client";

import { IoIosHeart } from "react-icons/io";

const SubMenu = () => {
  const subMenuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Saved" },
    { id: 3, name: "Motors" },
    { id: 4, name: "Trading Cards" },
    { id: 5, name: "Collectibles" },
    { id: 6, name: "Sneakers" },
    { id: 7, name: "Motors" },
    { id: 8, name: "Fashion" },
    { id: 9, name: "Electronics" },
    { id: 10, name: "Sporting Goods" },
    { id: 11, name: "Toys & Hobbies" },
    { id: 12, name: "Business & Industrial" },
    { id: 13, name: "Home & Garden" },
  ];
  return (
    <>
      <div id="MainHeader" className="border-b">
        <div className="flex justify-between items-center w-full max-auto max-w-[1250px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[13px] text-[#333333] px-2 h-8"
          >
            {subMenuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center px-3 hover:underline cursor-pointer"
                >
                  {item.name === "Saved" ? (
                    <span className="mr-1 text-[#333333]">
                      <IoIosHeart />{" "}
                    </span>
                  ) : null}
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubMenu;

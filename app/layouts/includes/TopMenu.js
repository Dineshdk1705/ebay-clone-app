"use client";

import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopMenu = () => {
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex justify-between items-center w-full max-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="relative px-3">
              <Link
                href="/auth"
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <div>Login</div>
                <BsChevronDown />
              </Link>
              <div
                id="AuthDropdown"
                className="hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
              >
                <div className="flex items-center justify-start gap-1 p-3">
                  <Image
                    src="https://picsum.photos/id/1/200"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    objectFit="contain"
                  />
                  <div className="font-bold text-[13px]">Dinesh</div>
                </div>
                <hr />
                <ul className="bg-white">
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders">My Orders</Link>
                  </li>
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    Signout
                  </li>
                </ul>
              </div>
            </li>

            <li className="px-3 hover:underline cursor-pointer">eBay Deals</li>
            <li className="px-3 hover:underline cursor-pointer">
              Help & Contact
            </li>
          </ul>

          <ul
            id="TopMenuRight"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
              <Image
                src="/images/india.png"
                width={32}
                height={32}
                alt="country-logo"
              />
              Ship to
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="relative">
                <IoMdNotificationsOutline size={22} />
                <div className="absolute text-[10px] -top-[2px] -right-[4px] bg-red-500 text-white rounded-full w-[14px] h-[14px]">
                  <div className="flex items-center justify-center -mt-[1px]">
                    5
                  </div>
                </div>
              </div>
            </li>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="relative">
                <AiOutlineShoppingCart size={22} />
                <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 text-white rounded-full w-[14px] h-[14px]">
                  <div className="flex items-center justify-center -mt-[1px]">
                    2
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;

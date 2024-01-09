import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuMousePointer2 } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { HiOutlineBolt } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { PiSpeakerSimpleHighBold } from "react-icons/pi";
import company from "./company.png";

import { FaHome } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div>
      <div className="flex py-[16px] px-[10px] w-[224px] h-full bg-[#1E2640]">
        {/* Nav top */}
        <div className="h-[80px]">
          <img src={company} alt="company-logo" className="ml-1" />
          {/* Pages */}
          <div className="w-48 text-white text-sm mt-4">
            <ul className="mt-[12px] flex py-[8px] flex-col gap-[4px]">
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <FaHome className="w-[20px] h-[20px]" />
                <span className="">Home</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <LuClipboardList className="w-[20px] h-[20px]" />
                <span className="">Orders</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <BiCategory className="w-[20px] h-[20px]" />
                <span className="">Products</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <CiDeliveryTruck className="w-[20px] h-[20px]" />
                <span className="">Delivery</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <PiSpeakerSimpleHighBold className="w-[20px] h-[20px]" />
                <span className="">Marketing</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <HiOutlineChartBar className="w-[20px] h-[20px]" />
                <span className="">Analytics</span>
              </li>
              <li className="bg-white/10 rounded-md flex gap-[12px] px-[12px] h-[36px] items-center ">
                <FaHome className="w-[20px] h-[20px]" />
                <span className="">Payments</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <LuMousePointer2 className="w-[20px] h-[20px]" />
                <span className="">Tools</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <CiDiscount1 className="w-[20px] h-[20px]" />
                <span className="">Discounts</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <GoPeople className="w-[20px] h-[20px]" />
                <span className="">Audience</span>
              </li>
              <li className="flex gap-[12px] px-[16px] h-[36px] w-full items-center ">
                <FaHome className="w-[20px] h-[20px]" />
                <span className="">Appearance</span>
              </li>
              <li className="flex gap-[12px] px-[12px] h-[36px] w-full items-center ">
                <HiOutlineBolt className="w-[20px] h-[20px]" />
                <span className="">Plugins</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

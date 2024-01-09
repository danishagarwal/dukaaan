import React from "react";
import company from "./company.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="bg-white w-[1216px] h-[64px] px-[32px] py-[12px] flex items-center">
      <div className="items-center gap-4 flex w-[360px]">
        <p className="text-[15px]">Payments</p>
        <div className="flex">
          <CiCircleQuestion />
          <aside className="text-[12px] item-center font-light">
            How it works?
          </aside>
        </div>
      </div>

      <div className="w-[400px] px-[16px] ml-4 py-[9px] flex gap-1 h-[40px] bg-[#F2F2F2] font-light rounded-md items-center">
        <CiSearch className="w-[18px] h-[20px]" />
        <span className="text-[16px]"> Search features, tutorials, etc.</span>
      </div>
      <div className="ml-5 w-[360px] flex h-[40px] items-center justify-end">
        <img src=""></img>
        <MdOutlineArrowDropDown className="bg-[#E6E6E6] rounded-full h-[40px] w-[40px]" />
      </div>
    </nav>
  );
};

export default Navbar;

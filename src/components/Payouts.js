import React from "react";
import company from "./company.png";
import { FaHome } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Overview from "./Overview";
const Payouts = () => {
  return (
    // Window
    <div className="w-[1440px] h-[1482px] bg-slate-500">
      <div className="flex h-full">
        <Sidebar />
        <div>
          <Navbar />
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default Payouts;

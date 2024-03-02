import React from "react";
import { NavIcon } from "../../../Icon.jsx";
import {
  IoIosArrowDropright,
  IoMdPeople,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaAddressCard, FaRegEdit } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div>
      <div className="absolute left-0 w-12 top-[-10%] h-full flex justify-center items-center">
        <div className="">
          <NavIcon />
        </div>
      </div>
      <div className="z-1 absolute flex flex-col left-2 top-[24%]">
        <IoIosArrowDropright className="text-white text-lg" />
      </div>
      <div className="z-1 absolute flex flex-col left-2 top-[32%]">
        <MdDashboard className="text-white text-md" />
      </div>

      <div className="z-1 absolute flex flex-col left-2 top-[40%]">
        <FaAddressCard className="text-white text-md" />
      </div>
      <div className="z-1 absolute flex flex-col left-2 top-[48%]">
        <IoMdPeople className="text-white text-md" />
      </div>
      <div className="z-1 absolute flex flex-col left-2 top-[56%]">
        <TfiMenuAlt className="text-white text-md" />
      </div>
      <div className="z-1 absolute flex flex-col left-2 top-[64%]">
        <FaRegEdit className="text-white text-md" />
      </div>
      <div className="z-1 absolute flex flex-col left-1.5 top-[72%]">
        <IoMdCheckmarkCircle className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Navbar;

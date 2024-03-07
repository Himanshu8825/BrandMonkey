import React from "react";
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
    <div className="flex flex-col items-start justify-center mt-[5rem] gap-8 bg-black w-full sm:w-[30%] pt-8 pb-8 rounded-r-full">
      <div className="ml-3">
        <IoIosArrowDropright className="text-white text-2xl sm:text-xl" />
      </div>
      <div className="ml-3">
        <MdDashboard className="text-white text-xl sm:text-lg" />
      </div>
      <div className="ml-3">
        <FaAddressCard className="text-white text-xl sm:text-lg" />
      </div>
      <div className="ml-3">
        <IoMdPeople className="text-white text-xl sm:text-lg" />
      </div>
      <div className="ml-3">
        <TfiMenuAlt className="text-white text-xl sm:text-lg" />
      </div>
      <div className="ml-3">
        <FaRegEdit className="text-white text-xl sm:text-lg" />
      </div>
      <div className="ml-2.5">
        <IoMdCheckmarkCircle className="text-white text-2xl sm:text-xl" />
      </div>
    </div>
  );
};

export default Navbar;

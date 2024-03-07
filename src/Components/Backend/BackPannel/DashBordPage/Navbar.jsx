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
    <div className=" bg-red-500">
      {" "}
      {/* Apply background color using Tailwind's bg-<color> class */}
      <div className="absolute top-[25%] ml-3">
        <div className="flex gap-2">
          <IoIosArrowDropright className="text-white text-2xl" />
        </div>
      </div>
      <div className="absolute top-[32%] ml-3">
        <div className="flex gap-2">
          <MdDashboard className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute top-[40%] ml-3">
        <div className="flex gap-2">
          <FaAddressCard className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute top-[48%] ml-3">
        <div className="flex gap-2">
          <IoMdPeople className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute top-[56%] ml-3">
        <div className="flex gap-2">
          <TfiMenuAlt className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute top-[64%] ml-3">
        <div className="flex gap-2">
          <FaRegEdit className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute left-0 top-[72%] ml-2.5">
        <div className="flex gap-2">
          <IoMdCheckmarkCircle className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

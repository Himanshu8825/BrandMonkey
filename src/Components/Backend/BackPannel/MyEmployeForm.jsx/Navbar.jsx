import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaAddressCard, FaRegEdit } from "react-icons/fa";
import { IoBackspaceOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import Profile from "../../../../../public/Profile.png";
import { AllEmp, ArchiveBook } from "../../../Icon";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div>
      <div className=" absolute   left-8 top-[20%] ml-8">
        <div className="flex  flex-col  mt-[-10px] justify-center items-center">
          <span className="text-2xl top-[-30px] right-[-3rem] absolute flex">
            <IoBackspaceOutline />
          </span>
          <img src={Profile} width={60} height={60} alt="" />
          <p className="font-poppins font-medium mt-0">
            Sourav Kumar{" "}
            <span className="flex justify-center items-center font-normal">
              (Designer)
            </span>
          </p>
        </div>
      </div>

      <div className=" absolute   left-8 top-[40%] ml-8">
        <div className="flex gap-2">
          <MdDashboard className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">Dashboard</p>
        </div>
      </div>

      <div className=" absolute  left-8 top-[48%]  ml-8">
        <div className="flex gap-2">
          <FaAddressCard className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">My Client</p>
        </div>
      </div>

      <div className=" absolute  left-8 top-[56%] ml-8">
        <div className="flex gap-2">
          <AllEmp />
          <p className="font-poppins  mt-0">All Employee</p>
        </div>
      </div>
      <div className=" absolute  left-7 top-[64%] ml-8">
        <div className="flex gap-2">
          <TfiMenuAlt className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">COmplain List</p>
        </div>
      </div>

      <div className=" absolute  left-7 top-[72%] ml-8">
        <div className="flex gap-2">
          <FaRegEdit className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">Raised Complaint</p>
        </div>
      </div>
      <div className=" absolute  left-7 top-[80%] ml-8">
        <div className="flex gap-2">
          <IoMdCheckmarkCircle className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">Resolved Complaint</p>
        </div>
      </div>

      <div className=" absolute  left-8 top-[92%] ml-8">
        <div className="flex gap-2">
          <AiOutlineLogout className="text-2xl" />
          <p className="font-poppins font-semibold mt-0">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

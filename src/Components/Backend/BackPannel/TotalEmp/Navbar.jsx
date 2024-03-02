import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { ClientProfile, Home, People, Service } from "../../../Icon";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBackspaceOutline } from "react-icons/io5";
import Profile from "../../../../../public/Profile.png";

const Navbar = () => {
  return (
    <div className="md:flex md:flex-col md:items-start md:mt-8">
      <div className="md:absolute md:left-8 md:top-[22%] ml-8">
        <div className="flex flex-col mt-[-20px] justify-center items-center">
          <span className="text-2xl top-[-30px] right-[-3rem] absolute flex">
            <IoBackspaceOutline />
          </span>
          <img src={Profile} width={60} height={60} alt="" />

          <p className="font-poppins font-medium mt-0">
            Sourav Kumar{" "}
            <span className="flex justify-center items-center font-normal">
              (CEO)
            </span>
          </p>
        </div>
      </div>

      <div className="md:absolute md:left-8 md:top-[45%] ml-8">
        <div className="flex gap-2">
          <Home />
          <p className="font-poppins font-semibold mt-0">Home</p>
        </div>
      </div>

      <div className="md:absolute md:left-8 md:top-[52%]  ml-8">
        <div className="flex gap-2">
          <Service />
          <p className="font-poppins font-semibold mt-0">Services </p>
        </div>
      </div>
      <div className="md:absolute md:left-8 md:top-[60%] ml-8">
        <div className="flex gap-2">
          <FaAddressCard className="text-black text-2xl" />
          <p className="font-poppins font-semibold mt-0">All Client</p>
        </div>
      </div>
      <div className="md:absolute md:left-8 md:top-[67%] ml-8">
        <div className="flex gap-2">
          <People />
          <p className="font-poppins font-semibold mt-0">All Employee</p>
        </div>
      </div>

      <div className="md:absolute md:left-8 md:top-[92%] ml-8">
        <div className="flex gap-2">
          <AiOutlineLogout className="text-2xl" />
          <p className="font-poppins font-semibold mt-0">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

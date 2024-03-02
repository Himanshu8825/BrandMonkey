import React, { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { AllEmp, Home, People, Service } from "../../../Icon";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBackspaceOutline } from "react-icons/io5";
import Profile from "../../../../../public/Profile.png";
import Exit from "../../../../../public/Exit.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const clickHandler = () => {
    setShowNavbar(false);
  };

  return (
    <div>
      {showNavbar && (
        <div className="md:flex md:flex-col md:items-start md:mt-8">
          <div className="md:absolute md:left-8 md:top-[22%] ml-8">
            <div className="flex flex-col mt-[-20px] justify-center items-center">
              <span className="text-2xl top-[-30px] right-[-3rem] absolute flex cursor-pointer">
                <IoBackspaceOutline onClick={clickHandler} />
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
              <p className="font-poppins font-semibold mt-0">All Services </p>
            </div>
          </div>
          <div className="md:absolute md:left-8 md:top-[60%] ml-8">
            <div className="flex gap-2">
              <FaAddressCard className="text-black text-2xl" />
              <p className="font-poppins font-semibold mt-0">All Client</p>
            </div>
          </div>
          <div className="md:absolute md:left-8 md:top-[68%] ml-8 navbg">
            <div className="flex gap-2   ">
              <AllEmp />
              <p className="font-poppins  mt-0">All Employee</p>
            </div>
          </div>

          <div className="md:absolute md:left-8 md:top-[85%] ml-8">
            <div className="flex gap-2">
              <img src={Exit} width={20} height={20} alt="" />
              <p className="font-poppins font-semibold mt-0">BackPannel</p>
            </div>
            <div className="flex gap-2">
              <AiOutlineLogout className="text-2xl" />
              <p className="font-poppins font-semibold mt-0">Logout</p>
            </div>
          </div>
        </div>
      )}
      {!showNavbar && (
        <div className="fixed top-0 left-0 w-[22%] h-screen  bg-black opacity-100">
          <GiHamburgerMenu
            className=" text-white"
            onClick={() => setShowNavbar(true)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

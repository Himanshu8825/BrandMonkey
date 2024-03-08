import React, { useState } from "react";
import { IoIosArrowDropright, IoMdPeople } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaAddressCard, FaToolbox } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Profile from "../../../../../public/Profile.png";
import { IoBackspaceOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Exit from "../../../../../public/Exit.png";
import { Home, People, Service } from "../../../Icon";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  const clickhandler = () => {
    setShowNavbar(false);
  };

  return (
    <>
      {showNavbar && (
        <div className="flex flex-col items-start justify-center mt-[5rem] w-full font-poppins ml-4 ">
          <div className="flex flex-col mt-[-6rem] justify-center items-center">
            <span className="text-2xl ml-[10rem] cursor-pointer p-4">
              <IoBackspaceOutline onClick={clickhandler} />
            </span>
            <img src={Profile} width={60} height={60} alt="" />
            <p className="font-poppins font-medium mt-0">
              Sourav Kumar{" "}
              <span className="flex justify-center items-center font-normal">
                (CEO)
              </span>
            </p>
          </div>

          <Link to="/">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <Home />
              <p className="font-poppins font-semibold mt-[-1]">Home</p>
            </div>
          </Link>
          <Link to="/allserve" className="">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <Service />
              <p className="font-poppins font-semibold mt-[-1]">
                All Services{" "}
              </p>
            </div>
          </Link>
          <Link to="/totalemp">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <FaAddressCard className="text-black text-2xl" />
              <p className="font-poppins font-semibold mt-[-1]">All Client</p>
            </div>
          </Link>
          <Link to="/submitemp">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <People />
              <p className="font-poppins font-semibold mt-[-1]">All Employee</p>
            </div>
          </Link>
          <div className="ml-2.5 flex items-center gap-3 font-semibold">
            <RiLogoutCircleRLine className="text-black text-3xl sm:text-xl" />
            <p>Logout</p>
          </div>
        </div>
      )}
      {!showNavbar && (
        <div className="flex flex-col items-start justify-center mt-[5rem] gap-8 bg-black w-[35%]  pt-8 pb-8 rounded-r-full">
          <div className="ml-3">
            <IoIosArrowDropright
              onClick={() => setShowNavbar(true)}
              className="text-white text-2xl sm:text-2xl cursor-pointer"
            />
          </div>
          <div className="ml-3 text-white">
            <MdHome className="text-white text-2xl" />
          </div>
          <div className="ml-3">
            <FaToolbox className="text-white text-xl" />
          </div>
          <div className="ml-3">
            <FaAddressCard className="text-white text-xl" />
          </div>
          <div className="ml-3">
            <IoMdPeople className="text-white text-2xl" />
          </div>

          <div className="ml-3">
            <RiLogoutCircleRLine className="text-white text-2xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

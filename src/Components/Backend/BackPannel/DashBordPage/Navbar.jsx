import React, { useState } from "react";
import {
  IoIosArrowDropright,
  IoMdPeople,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Profile from "../../../../../public/Profile.png";
import { IoBackspaceOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

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
              <MdDashboard className="text-black text-3xl sm:text-lg" />
              <p>Dashbord</p>
            </div>
          </Link>
          <Link to="/myclient" className="">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <FaAddressCard className="text-black text-3xl sm:text-lg" />
              <p>My Client</p>
            </div>
          </Link>
          <Link to="/myemp">
            <div className="ml-3 flex items-center gap-3 font-semibold">
              <IoMdPeople className="text-black text-3xl sm:text-lg" />
              <p>My Employee</p>
            </div>
          </Link>
          <div className="ml-3 flex items-center gap-3 font-semibold">
            <IoMdCheckmarkCircle className="text-black text-3xl sm:text-xl" />
            <p>Resolved Complaint</p>
          </div>
          <div className="ml-3 flex items-center gap-3 font-semibold">
            <IoMdCheckmarkCircle className="text-black text-3xl sm:text-xl" />
            <p>Back Panel</p>
          </div>
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
              className="text-white text-2xl sm:text-xl cursor-pointer"
            />
          </div>
          <div className="ml-3">
            <MdDashboard className="text-white text-2xl" />
          </div>
          <div className="ml-3">
            <FaAddressCard className="text-white text-2xl" />
          </div>
          <div className="ml-3">
            <IoMdPeople className="text-white text-2xl" />
          </div>
          <div className="ml-3">
            <IoMdCheckmarkCircle className="text-white text-2xl" />
          </div>
          <div className="ml-3">
            <IoMdCheckmarkCircle className="text-white text-2xl" />
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

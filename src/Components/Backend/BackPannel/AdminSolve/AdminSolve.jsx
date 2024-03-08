import React from "react";
import Card from "./Card";
import { BrandIcon } from "../../../Icon";
import Navbar from "../DashBordPage/Navbar";
import { FaChevronDown } from "react-icons/fa";

const AdminSolve = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden ">
          <span className="text-white underline absolute right-[4rem] top-6 font-poppins cursor-pointer">
            Mark all as read
          </span>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 mt-[4rem] gap-4 " id="card-grid">
              {Array.from({ length: 4 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-1 bottom-6">
            <FaChevronDown className="text-xl  " />
          </span>
        </div>
      </div>
    </>
  );
};

export default AdminSolve;

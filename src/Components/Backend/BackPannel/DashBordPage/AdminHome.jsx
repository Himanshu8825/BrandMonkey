import React from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "./Navbar";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

const AdminHome = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row bg-[#f5cd15]">
        {/* Sidebar */}
        <div className="w-full sm:w-[15%] bg-[#f5cd15]">
          <div className="ml-4 sm:ml-16 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full sm:w-[85%] bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden">
          <div className="ml-0 sm:ml-[-3rem] mt-0 sm:mt-[-3rem]">
            <Card />
          </div>
          <div className="w-full sm:w-[114%] flex flex-col sm:flex-row mb-4 gap-0 mt-2">
            <div className="w-full sm:w-1/2 ml-0 sm:ml-[-2rem] mb-2 sm:mb-0">
              <ProgressBar />
            </div>
            <div className="w-full sm:w-1/2 ml-0 sm:ml-[-8rem]">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;

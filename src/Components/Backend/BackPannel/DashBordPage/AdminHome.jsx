import React from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "./Navbar";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

const AdminHome = () => {
  return (
    <>
      <div className="w-full h-full flex bg-[#f5cd15]">
        <div className="w-[15%] h-full bg-[#f5cd15]">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <div className="w-[85%]  bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden ">
          <div className="ml-[-3rem] mt-[-3rem]">
            <Card />
          </div>
          <div className="w-full  flex mb-4 gap-6">
            <div className="w-1/2 ml-[-2rem]">
              <ProgressBar />
            </div>
            <div className="w-1/2">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;

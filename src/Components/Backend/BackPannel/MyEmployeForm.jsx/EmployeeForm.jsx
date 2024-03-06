import React from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "./Navbar";
import Card from "./Card";

const EmployeeForm = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <span className="absolute top-1 left-[18rem]">
          <button
            id="btn2"
            className="text-white  font-medium rounded-lg text-base  px-6  py-1  ml-[35px] mt-4"
          >
            3 March 2024
          </button>
          <button
            id="btn2"
            className="text-white  font-medium rounded-lg text-base  px-6  py-1 ml-[35px] mt-4"
          >
            Download
          </button>
        </span>
        <div className="child2 overflow-y-scroll flex justify-center items-center ">
          <div className="w-[95%]   rounded-lg mt-5 " id="empborder">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;

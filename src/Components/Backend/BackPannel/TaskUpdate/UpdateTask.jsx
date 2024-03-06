import React from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "./Navbar";
import Button from "./Button";
import Card from "./Card";
import { FaChevronDown } from "react-icons/fa6";

const UpdateTask = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <div className="child2 overflow-y-scroll ">
          <button
            id="btn2"
            className="text-white  font-medium rounded-lg text-base  px-6  py-0.5  ml-[35px] mt-4"
          >
            3 March 2024
          </button>
          <span>
            <Card />
          </span>
          <button
            id="btn2"
            className="text-white  font-medium rounded-lg text-base  px-6  py-0.5  ml-[25px]"
          >
            Add A New Coulmn
          </button>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-8 bottom-2 ">
            <FaChevronDown className="text-xl  " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;

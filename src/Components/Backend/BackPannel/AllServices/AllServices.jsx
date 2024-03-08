import React from "react";
import { BrandIcon, Notification, Setting } from "../../../Icon";
import Navbar from "./Navbar";
import Button from "./Button";
import { IoMdSearch } from "react-icons/io";
import Card from "./Card";
import { FaChevronDown } from "react-icons/fa6";

const TotalEmploye = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black h-screen rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden">
          <div className="flex m-4">
            <p className="text-white font-poppins ml-8 mt-2 text-lg">
              Add Service Name:
            </p>
            <div className=" flex mt-12   " id="searchbox3">
              <input
                type="text"
                placeholder="Service Name"
                className="w-full border rounded-xl  input-field2"
              />
              <span>
                <button
                  className="text-white gradient font-medium rounded-lg text-base  px-8 py-2 text-center me-2 mb-2 "
                  id="serve-btn"
                >
                  Total:50{" "}
                </button>
              </span>
            </div>
          </div>
          <div className="flex justify-between mr-8 ml-12 mt-[3rem]   ">
            <div className="">
              <Button name={"Submit "} />
            </div>
          </div>
          <div className="flex   justify-around  pr-4">
            <p className="text-white absolute left-[22rem] top-[150px] text-lg  font-poppins">
              Name Of Services:
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10 ">
              {Array.from({ length: 10 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEmploye;

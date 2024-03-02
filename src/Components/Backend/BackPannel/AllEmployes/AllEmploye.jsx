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
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <div className="child2">
          <div className="flex m-4 gap-6 flex-row-reverse  mr-9 ">
            <div className=" flex" id="searchbox2">
              <IoMdSearch className="text-white text-2xl absolute  z-10 m-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-xl  input-field"
              />
            </div>
          </div>
          <div className="flex justify-between mr-8 ml-8 mt-[4rem]   ">
            <div className="">
              <Button name={"+ Add New Clients"} />
            </div>
            <div>
              <button className="text-white gradient font-medium rounded-lg text-base  px-8 py-2 text-center me-2 mb-2">
                Total:50{" "}
              </button>
            </div>
            <div>
              <Button name={"Download"} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4 mt-10 " id="card-grid">
              {Array.from({ length: 2 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-2 bottom-12 ">
            <FaChevronDown className="text-xl  " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalEmploye;

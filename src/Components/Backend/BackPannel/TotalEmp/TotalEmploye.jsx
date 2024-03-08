import React from "react";
import { BrandIcon, Notification, Setting } from "../../../Icon";
import Navbar from "../AllServices/Navbar";
import Button from "./Button";
import { IoMdSearch } from "react-icons/io";
import Card from "./Card";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <div className="flex m-4 gap-6 flex-row-reverse  mr-9 ">
            <div className=" flex" id="searchbox">
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
              <Link to="/createcli">
                <Button name={"+ Add New Clients"} />
              </Link>
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
            <div className="grid grid-cols-2 mt-10 " id="card-grid">
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

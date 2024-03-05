import React from "react";
import Card from "./Card";
import { BrandIcon, Notification, Setting } from "../../../Icon";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";

const RaisedComplained = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <div className="child2 ">
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

export default RaisedComplained;

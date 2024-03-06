import React from "react";
import { BrandIcon, Notification, Setting } from "../../../Icon";
import Navbar from "./Navbar";
import Button from "./Button";
import { IoMdSearch } from "react-icons/io";
import Card from "./Card";
import { FaChevronDown } from "react-icons/fa6";

const ProgressClient = () => {
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
          <div className="flex justify-center items-center gap-5 mt-10  ">
            <span>
              <Button name={"Regular"} />
            </span>

            <span>
              <Button name={"One Time"} />
            </span>
          </div>
          <div className="flex justify-evenly  ">
            <div className="grid grid-cols-2 mt-2 gap-4  " id="card-grid">
              {Array.from({ length: 4 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-8 bottom-8 ">
            <FaChevronDown className="text-xl  " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressClient;

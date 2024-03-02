import React from "react";
import Card from "./Card";
import { BrandIcon, Notification, Setting } from "../../../Icon";
import Button from "./Button";
import Navbar from "./Navbar";
import { CiCircleChevDown } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const MyClient = () => {
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
          <div className="flex justify-center items-center gap-5 mt-10 ">
            <div>
              <Button />
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 mt-4 gap-4" id="card-grid">
              {Array.from({ length: 9 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-4 bottom-6">
            <FaChevronDown className="text-xl  " />
          </span>
        </div>
      </div>
    </>
  );
};

export default MyClient;

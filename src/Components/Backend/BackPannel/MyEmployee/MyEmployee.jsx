import React from "react";
import Card from "./Card";
import { BrandIcon } from "../../../Icon";
import Button from "./Button";
import Navbar from "../DashBordPage/Navbar";
import { FaChevronDown } from "react-icons/fa";

const MyClient = () => {
  return (
    <>
      <div className="w-full   flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden">
          <div className="flex justify-center items-center gap-5 mt-6">
            <div>
              <Button />
            </div>
            <div>
              <Button />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3  gap-0 ">
              {Array.from({ length: 12 }, (_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
          <span className="bg-[#f5cc15d4] rounded-full p-2 flex absolute right-4 bottom-6">
            <FaChevronDown className="text-xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default MyClient;

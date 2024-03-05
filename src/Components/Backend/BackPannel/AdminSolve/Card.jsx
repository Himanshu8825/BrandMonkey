import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";

const Card = () => {
  return (
    <div className="">
      <div className="gradient-color rounded-2xl w-full flex justify-center items-center font-poppins ">
        <p className="  font-light text-white m-1 p-4">
          Sourav Kumar has done all the changes of the problem that you have
          raised.
        </p>
        <div className="flex text-xl  gap-2  pl-[10rem] mr-2   ">
          <div>
            <button className="flex   bg-transparent border border-white text-[#f5cc15d4] rounded-lg px-6 py-1 cursor-pointer">
              <p className="m-0 ml-2 text-base text-white">Decline</p>
            </button>
          </div>
          <div>
            <button className="flex bg-black text-[#f5cc15d4] rounded-lg px-6  py-2 cursor-pointer  ">
              <p className="m-0 ml-2  text-base font-semibold">Accept</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

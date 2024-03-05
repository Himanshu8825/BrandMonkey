import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuCheckSquare } from "react-icons/lu";

const Card = () => {
  return (
    <div className="">
      <div className="gradient-color rounded-2xl w-full flex justify-center items-center font-poppins ">
        <p className=" text-lg text-white m-1 p-4">
          <span className="font-semibold">Admin</span> raised a ticket against
          you related to Exchange 22 Carousel.
        </p>
        <div className="flex text-xl  gap-2  pl-[10rem] mr-2  ">
          <div>
            <button className="flex bg-black text-[#f5cc15d4] rounded-lg px-4  py-2 ">
              <FaPlay />
              <p className="m-0 ml-2  text-base">Start</p>
            </button>
          </div>
          <div>
            <button className="flex   bg-transparent border border-white text-[#f5cc15d4] rounded-lg px-2 py-1">
              <LuCheckSquare className="text-white text-xl" />
              <p className="m-0 ml-2 text-base text-white">Done</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

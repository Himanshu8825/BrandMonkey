import React from "react";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// gradient;
const Card = () => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg w-full h-full ">
      <div className="w-full h-[90%]">
        <div className="py-1  gradient-color flex items-center justify-around  rounded-lg ">
          <p className="font-bold text-lg text-white m-0 flex" id="para">
            Bluewillow
          </p>
          <div className="flex  justify-center items-center  text-xl  gap-2  pl-[10rem] mr-2 ">
            <div>
              <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4  py-2">
                <MdModeEdit />
                <p className="m-0 ml-2  text-base">Edit</p>
              </button>
            </div>
            <div>
              <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2">
                <RiDeleteBin6Line />
                <p className="m-0 ml-2 text-base">Delete</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

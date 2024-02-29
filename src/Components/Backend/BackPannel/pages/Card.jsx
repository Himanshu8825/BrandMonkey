import React from "react";
import { ViewMore, CardIcon } from "../../../Icon.jsx";

const Card = () => {
  return (
    <div className="w-[250px] h-[170px]  ">
      <div className="BR gradient    rounded-2xl  border border-[#F5CD15] w-full h-full ">
        <div className="flex justify-center items-center flex-col">
          <p className=" text-white font-semibold text-lg">Total Clients(50)</p>
          <div id="card-icon" className=" ">
            <CardIcon />
          </div>
        </div>

        <div className="relative flex justify-end items-end">
          <div className="absolute bottom-0 top-2 right-4 flex items-center gap-1 cursor-pointer ">
            <p className="text-white font-medium text-xs ">View more</p>
            <ViewMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

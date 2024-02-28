import React from "react";
import { ViewMore, CardIcon } from "../../../Icon.jsx";

const Card = () => {
  return (
    <div>
      <div className="gradient p-5 w-[328px] h-[236px] rounded-xl border-2 border-bm-primary">
        <div>
          <p className="flex justify-center items-center text-white font-semibold text-2xl">
            Total Clients(50)
          </p>
          <div className="flex justify-center items-center ">
            <CardIcon />
          </div>
        </div>
        <div className="relative flex justify-end items-end">
          <div className="absolute bottom-0 top-4 right-0 flex items-center gap-1">
            <p className="text-white font-medium text-base">View more</p>
            <ViewMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

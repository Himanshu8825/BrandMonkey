import React from "react";
import { ViewMore, CardIcon } from "../../../Icon.jsx";

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="BR gradient p-1 max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl w-full h-[236px] rounded-xl border-2 border-bm-primary">
        <div>
          <p className="flex justify-center items-center text-white font-semibold text-xl">
            Total Clients(50)
          </p>
          <div className="flex justify-center items-center ">
            <CardIcon />
          </div>
        </div>
        <div className="relative flex justify-end items-end">
          <div className="absolute bottom-0 top-4 right-2 flex items-center gap-1">
            <p className="text-white font-medium text-base">View more</p>
            <ViewMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

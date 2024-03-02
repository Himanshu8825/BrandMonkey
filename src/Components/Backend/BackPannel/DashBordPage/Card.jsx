import React from "react";
import { ViewMore, CardIcon } from "../../../Icon.jsx";
import Notes from "./Notes.jsx";
import Calendar from "react-calendar";

import ProgressBar from "./ProgressBar";
import "react-calendar/dist/Calendar.css";

const Card = () => {
  return (
    <>
      <div className="flex flex-wrap   mx-20 w-full">
        <div className="  w-[335px] mx-3">
          <div className="BR gradient    rounded-2xl  border border-[#F5CD15] mt-28 ">
            <div className="flex justify-center items-center  flex-col mt-8">
              <p className=" text-white font-semibold text-lg ">
                Total Clients(50)
              </p>
              <div id="card-icon" className=" ">
                <CardIcon />
              </div>
            </div>

            <span className="flex items-center justify-end mb-3 ">
              <p className="text-white font-medium text-[13px]  pe-1 cardglow  ">
                View more
              </p>
              <span className="pe-3">
                {" "}
                <ViewMore />
              </span>
            </span>
          </div>
        </div>

        <div className="  w-[335px] mx-3 ">
          <div className="BR gradient    rounded-2xl  border border-[#F5CD15] mt-28 ">
            <div className="flex justify-center items-center  flex-col mt-8">
              <p className=" text-white font-semibold text-lg ">
                Total Employees(50)
              </p>
              <div id="card-icon" className=" ">
                <CardIcon />
              </div>
            </div>

            <span className="flex items-center justify-end mb-3 ">
              <p className="text-white font-medium text-[13px]  pe-1 cardglow  ">
                View more
              </p>
              <span className="pe-3">
                {" "}
                <ViewMore />
              </span>
            </span>
          </div>
        </div>
        <span className="mx-3">
          <Notes />
        </span>

        <div className="  w-[335px] mx-3">
          <div className="BR gradient    rounded-2xl  border border-[#F5CD15] mt-9 ">
            <div className="flex justify-center items-center  flex-col mt-8">
              <p className=" text-white font-semibold text-lg ">
                Total Clients(50)
              </p>
              <span id="card-icon" className=" ">
                <CardIcon />
              </span>
            </div>

            <span className="flex items-center justify-end mb-3 ">
              <p className="text-white font-medium text-[13px]  pe-1 cardglow  ">
                View more
              </p>
              <span className="pe-3">
                {" "}
                <ViewMore />
              </span>
            </span>
          </div>
        </div>

        <div className="  w-[335px] mx-3">
          <div className="BR gradient    rounded-2xl  border border-[#F5CD15] mt-9 ">
            <div className="flex justify-center items-center  flex-col mt-8">
              <p className=" text-white font-semibold text-lg ">
                Total Clients(50)
              </p>
              <div id="card-icon" className=" ">
                <CardIcon />
              </div>
            </div>

            <span className="flex items-center justify-end mb-3 ">
              <p className="text-white font-medium text-[13px]  pe-1 cardglow  ">
                View more
              </p>
              <span className="pe-3">
                {" "}
                <ViewMore />
              </span>
            </span>
          </div>
        </div>
        <span className="gradient rounded-xl w-[300px] BR mx-3 mt-9 ">
          <Calendar />
        </span>
      </div>
    </>
  );
};

export default Card;

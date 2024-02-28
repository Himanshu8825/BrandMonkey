import React from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import Calender from "./Calender";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

const AdminHome = () => {
  return (
    <div className="bg-[#F5CD15]   flex">
      <div className="w-1/12">
        <Navbar />
      </div>

      <div className="flex-1 h-screen rounded-tl-[30px] rounded-bl-[30px] bg-black  grid grid-flow-cols">
        <div className="flex justify-between p-8">
          <div className="w-1/3 px-2">
            <Card />
          </div>
          <div className="w-1/3 px-2">
            <Card />
          </div>
          <div className="w-1/3 px-2">
            <Notes />
          </div>
        </div>

        <div className="flex justify-between flex-1 ml-8 ">
          <div className=" w-1/2 px-2 ">
            <ProgressBar />
          </div>
          <div className=" w-1/2 px-2 ">
            <ProgressBar />
          </div>
          {/* <div className="w-1/3 px-2">
            <Card />
          </div>
          <div className="w-1/3 px-2">
            <Card />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

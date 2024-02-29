import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Notes from "./Notes";
import Calender from "./Calender";
import ProgressBar from "./ProgressBar";
import Header from "./Header";

const AdminHome = () => {
  return (
    <div className="bg-[#F5CD15] flex">
      <div className="w-[10%]">
        <Navbar />
      </div>

      <div id="container" className="rounded-tl-[30px] rounded-bl-[30px]">
        <div className="header2 ">
          <Header />
        </div>
        <div id="container2" className="grid grid-cols-3 gap-3">
          {/* First row */}
          <div className="w-full">
            <Card />
          </div>
          <div className="w-full">
            <Card />
          </div>
          <div className="w-full">
            <Notes />
          </div>

          {/* Second row */}
          <div className="w-full">
            <Card />
          </div>
          <div className="w-full">
            <Card />
          </div>
          <div className="w-full">
            <Calender />
          </div>

          {/* Third row */}
          <div className="w-full">
            <ProgressBar />
          </div>
          <div className="w-full " id="progress2">
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

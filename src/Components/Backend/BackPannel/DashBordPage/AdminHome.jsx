import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

import ProgressBar from "./ProgressBar";
import Header from "./Header";

const AdminHome = () => {
  return (
    <div className="bg-[#F5CD15] flex">
      <div className="w-[10%]">
        <Navbar />
      </div>

      <div id="container" className="rounded-tl-[30px] rounded-bl-[30px]">
        <div className="header2">
          <Header />
        </div>
        <div id="container2">
          <span className="w-full">
            <Card />
          </span>

          <div className="flex flex-wrap  items-center ">
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

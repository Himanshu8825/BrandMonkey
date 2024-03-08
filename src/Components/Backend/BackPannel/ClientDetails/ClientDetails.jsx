import React from "react";
import ExchangeCard from "./ExchangeCard";
import { BrandIcon } from "../../../Icon";
import Navbar from "../DashBordPage/Navbar";
import DeliverCard from "./ReviewList";
import Card from "./Card";

const ClientDetails = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden ">
          <div className="  ">
            <ExchangeCard />
          </div>
          <div className="flex justify-center mt-8 ">
            <Card />
            <Card />
            <Card />
            {/* <Card />
            <Card />
            <Card /> */}
          </div>
          <div className="">
            <DeliverCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetails;

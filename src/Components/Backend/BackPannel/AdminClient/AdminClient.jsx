import React, { useState } from "react";
import ExchangeCard from "./ExchangeCard";
import { BrandIcon } from "../../../Icon";
import Navbar from "../DashBordPage/Navbar";
import DeliverCard from "./DeliverCard";
import ListCard from "./ListCard";

const AdminClient = () => {
  return (
    <>
      <div className="w-full   flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden">
          <div className="  ">
            <ExchangeCard />
          </div>
          <div className="">
            <DeliverCard />
          </div>
          <div className="flex  ">
            <span className="w-full">
              <ListCard name={"Rase Ticket"} title={"Ticket Rase List:"} />
            </span>
            <span className="w-full z-40">
              <ListCard name={"Add MOM"} title={"MOM List:"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClient;

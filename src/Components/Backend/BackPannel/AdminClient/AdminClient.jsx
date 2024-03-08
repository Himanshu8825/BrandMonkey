import React, { useState } from "react";
import ExchangeCard from "./ExchangeCard";
import { BrandIcon } from "../../../Icon";
import Button from "./Button";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import DeliverCard from "./DeliverCard";
import ListCard from "./ListCard";

const AdminClient = () => {
  return (
    <>
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <div className="child2 overflow-y-scroll ">
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

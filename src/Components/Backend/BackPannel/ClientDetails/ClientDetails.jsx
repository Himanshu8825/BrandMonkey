import React from "react";
import ExchangeCard from "./ExchangeCard";
import { BrandIcon } from "../../../Icon";
import Button from "./Button";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import DeliverCard from "./DeliverCard";
import Card from "./Card";

const ClientDetails = () => {
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

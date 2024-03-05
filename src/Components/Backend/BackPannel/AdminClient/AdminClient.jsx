import React from "react";
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
        <div className="child2 overflow-y-scroll">
          <div className="card-container">
            <ExchangeCard />
          </div>
          <div className="card-container">
            <DeliverCard />
          </div>
          <div className="list-cards">
            <ListCard />
            <ListCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClient;

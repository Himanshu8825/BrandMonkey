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
        <div className="child2">
          <div>
            {/* <ExchangeCard /> */}
            {/* <DeliverCard /> */}
            {/* <ListCard /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClient;

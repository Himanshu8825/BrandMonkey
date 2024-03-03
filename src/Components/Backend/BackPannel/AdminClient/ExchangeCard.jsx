import React from "react";
import { ViewMore2 } from "../../../Icon";
import ClientProfile from "../../../../../public/ClientProfile.png";

const ExchangeCard = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white  absolute top-[2.5rem] left-[18rem] font-poppins font-medium text-xl ">
        Client Compony Details:
      </p>
      <div
        className="border-gradient rounded-3xl  m-2 flex flex-col-reverse mt-[6rem] "
        id="card-item2"
      >
        <p className="text-white absolute top-[6rem] left-[26rem] text-2xl font-poppins font-medium">
          Exchange 22
        </p>
        <span className=" absolute top-6 left-[42rem]">
          <img src={ClientProfile} alt="" height={120} width={120} />
        </span>
        <div className="w-full h-2/3 gradient rounded-br-3xl rounded-bl-3xl pt-1 flex  justify-around items-center">
          <div className="w-[48%] h-full  ">
            <p className="text-white font-poppins font-medium  ml-4">
              Name - Exchange 22 Pvt Ltd.
            </p>
            <p className="text-white font-poppins font-normal ml-4">
              Phone - +918825151049
            </p>
            <p className="text-white font-poppins font-normal ml-4">
              Email - Exchange22@gmail.com
            </p>
          </div>
          <div className="w-[48%] h-full ">
            <p className="text-white font-poppins font-medium  ml-4">
              GST - nhsbhx5269841253
            </p>
            <p className="text-white font-poppins font-medium  ml-4">
              Address -our multi - dimension suite of products is created with
              passionh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;

import React from "react";
import { ViewMore2 } from "../../../Icon";
import ClientProfile from "../../../../../public/ClientProfile.png";

const ExchangeCard = () => {
  return (
    <div className="flex flex-col items-center mt-2 w-full h-23 ">
      <p className="text-white font-poppins font-medium text-xl mt-4 ml-[-42rem]">
        Client Company Details:
      </p>
      <div className="border-gradient rounded-3xl m-0 flex flex-col-reverse mt-4 " id="excard">
        <p className="text-white text-2xl font-poppins font-medium pl-8 mt-1 relative top-[-16rem]">
          Exchange 22
        </p>
        <div className="relative">
          <img
            src={ClientProfile}
            alt=""
            className="relative top-[-4rem] left-[22rem]"
            height={120}
            width={120}
          />
          <div className="w-full  gradient rounded-br-3xl rounded-bl-3xl pt-1 flex justify-around items-center">
            <div className="w-[48%]">
              <p className="text-white font-poppins font-medium ml-4">
                Name - Exchange 22 Pvt Ltd.
              </p>
              <p className="text-white font-poppins font-normal ml-4">
                Phone - +918825151049
              </p>
              <p className="text-white font-poppins font-normal ml-4">
                Email - Exchange22@gmail.com
              </p>
            </div>
            <div className="w-[48%]">
              <p className="text-white font-poppins font-medium ml-4">
                GST - nhsbhx5269841253
              </p>
              <p className="text-white font-poppins font-medium ml-4">
                Address -our multi - dimension suite of products is created with
                passionh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;

import React from "react";
import { ViewMore2 } from "../../../Icon";
import ClientProfile from "../../../../../public/ClientProfile.png";

const ExchangeCard = () => {
  return (
    <div className="flex flex-col items-center mt-2">
      <p className="text-white font-poppins font-medium text-xl mt-[1rem] ml-[-46rem]">
        Client Company Details:
      </p>
      <div className="border-gradient rounded-3xl  mt-4 w-[96%] ">
        <p className="text-white text-2xl font-poppins font-medium pl-8 mt-2">
          Exchange 22
        </p>
        <div className="relative">
          <img
            src={ClientProfile}
            alt=""
            className="absolute top-[-8rem] left-[50%] transform -translate-x-1/2"
            height={120}
            width={120}
          />
          <div className="gradient rounded-br-3xl rounded-bl-3xl pt-1 flex justify-around items-center">
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

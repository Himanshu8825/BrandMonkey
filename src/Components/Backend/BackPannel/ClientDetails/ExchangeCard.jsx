import React from "react";
import ClientDetails from "../../../../../public/CliDetails.png";

const ExchangeCard = () => {
  return (
    <div className="flex flex-col items-center mt-2">
      <p className="text-white font-poppins font-medium text-xl mt-[1rem] ml-[-50rem] relative">
        Employee Details:
        {/* Button positioned absolutely */}
      </p>

      <div className="border-gradient rounded-3xl  mt-0 w-[90%] ">
        <p className="text-white text-2xl font-poppins font-medium pl-8 mt-4">
          Annu Garg
        </p>

        <div className="relative">
          <img
            src={ClientDetails}
            alt=""
            className="absolute top-[-8rem] left-[50%] transform -translate-x-1/2"
            height={120}
            width={120}
          />
          <div className="gradient rounded-br-3xl rounded-bl-3xl pt-1 flex justify-around items-center">
            <div className="w-[48%]">
              <p className="text-white font-poppins font-medium ml-[3rem]">
                Name - Annu Garg
              </p>
              <p className="text-white font-poppins font-normal ml-[3rem]">
                Phone - +918825151049
              </p>
              <p className="text-white font-poppins font-normal ml-[3rem]">
                Email - Exchange22@gmail.com
              </p>
            </div>
            <div className="w-[48%]">
              <p className="text-white font-poppins font-medium ml-[4rem]">
                GST - nhsbhx5269841253
              </p>
              <p className="text-white font-poppins font-medium ml-[4rem]">
                Designation - Video Editor
              </p>
              <p className="text-white font-poppins font-medium ml-[4rem]">
                Team - Social Media
              </p>
            </div>
          </div>
          <button className="absolute top-[-3.5rem] right-[8rem] bg-black text-[#f5cd15] text-base px-4 py-1 rounded font-poppins border border-[#f5cd15]">
            Download Task Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;

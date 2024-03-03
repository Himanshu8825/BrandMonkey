import React from "react";

const ListCard = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white  absolute top-[2rem] left-[20rem] font-poppins font-medium text-xl ">
        Ticket List
      </p>
      <div className="mt-[6rem]  flex  flex-col" id="card-item2">
        <div className="w-[48%] h-full  gradient border-gradient rounded-3xl pt-1 flex flex-col   ">
          <p className="text-white font-poppins font-medium ml-[2rem] m-2  ">
            25 Jan 2024
          </p>
          <p className="text-white font-poppins font-medium ml-[2rem] m-0  ">
            25 Jan 2024
          </p>
        </div>
      </div>
      <button></button>
    </div>
  );
};

export default ListCard;

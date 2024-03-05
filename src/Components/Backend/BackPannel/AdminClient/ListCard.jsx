import React from "react";

const ListCard = ({ name, title }) => {
  return (
    <div className="flex justify-center items-center relative">
      <p className="text-white absolute top-[0rem] left-[2rem] font-poppins font-medium text-xl">
        {title}
      </p>
      <div
        className="mt-[3rem] mb-8 flex flex-col items-center"
        id="card-item2"
      >
        <div className="w-[98%] h-full gradient border-gradient rounded-3xl pt-1 flex flex-col m-2">
          <p className="text-white font-poppins font-medium ml-[2rem] m-0 pt-4">
            25 Jan 2024
          </p>
          <p className="text-white font-poppins font-medium ml-[2rem] m-0 pt-4">
            25 Jan 2024
          </p>
        </div>
        <button
          id="btn2"
          className="text-white  font-medium rounded-lg text-base  px-6 py-2 text-center mb-[-1.5rem] mt-1"
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default ListCard;

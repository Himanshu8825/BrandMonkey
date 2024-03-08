import React from "react";

const ReviewList = () => {
  return (
    <div className="flex justify-center items-center relative">
      <p className="text-white  absolute top-[0rem] left-[5rem] font-poppins font-medium text-xl ">
        Review List
      </p>
      <div className=" w-[95%] h-[30%] flex justify-center ">
        <div className="mt-[3rem] mb-8 " id="card-item2">
          <div className="w-[100%] h-full gradient border-gradient rounded-3xl pt-1 flex flex-col m-2">
            <p className="text-white font-poppins font-medium ml-[2rem] m-0 pt-4">
              25 Jan 2024
            </p>
            <p className="text-white font-poppins font-medium ml-[2rem] m-0 pt-4">
              25 Jan 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;

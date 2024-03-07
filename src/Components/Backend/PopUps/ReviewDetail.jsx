import React from "react";

const ReviewDetail = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-[50%] h-[90%]  text-white  font-poppins ">
        <span className="flex justify-center items-center text-2xl">
          <p>Review Details </p>
        </span>
        <span>
          <p className="font-semibold">Client Name</p>
          <p className="p-3 rounded-xl  " id="empborder">
            Our Multi - Dimension.
          </p>
        </span>
        <span>
          <p className="font-semibold">Assigned Employee</p>
          <p>Our Multi - Dimension.</p>
        </span>
        <span>
          <p className="font-semibold">Description</p>
          <p>
            our multi - dimension suite of products is created with passion and
            decades of experience to help you every step of the way. ur multi -
            dimension suite of products is created with passion and decades of
            experience to help you every step of the way.
          </p>
        </span>
      </div>
    </div>
  );
};

export default ReviewDetail;

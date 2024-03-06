import React from "react";
import ErrPAge from "../public/ErrorPage.png";
import Error from "../public/Error.png";

const All = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <img src={ErrPAge} alt="404 Not Found" className="w-full h-full" />

      <img
        src={Error}
        alt=""
        width={400}
        height={200}
        className="absolute mt-[-1]"
      />

      <p className="text-lg text-gray-600 mt-4 absolute">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default All;

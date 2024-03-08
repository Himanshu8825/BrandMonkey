import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ListCard = ({ name, title }) => {
  const [showRaseModal, setShowRaseModal] = useState(false);
  const [showMomModal, setShowMomModal] = useState(false);

  const openRaseModal = () => {
    setShowRaseModal(true);
  };

  const openMomModal = () => {
    setShowMomModal(true);
  };

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
          onClick={name === "Rase Ticket" ? openRaseModal : openMomModal}
          id="btn2"
          className="text-white font-medium rounded-lg text-base px-6 py-2 text-center mb-[-1.5rem] mt-1"
        >
          {name}
        </button>
      </div>
      {showRaseModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-50">
          <div className="p-6 rounded-xl bg-black w-1/2 text-white font-poppins relative">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 m-4 bg-transparent text-white text-xl cursor-pointer"
              onClick={() => setShowRaseModal(false)}
            >
              <RxCross2 />
            </button>
            {/* Rase Ticket Modal content */}
            <span className="flex justify-center items-center text-2xl">
              <p>Ticket Raised Page </p>
            </span>
            <span>
              <p className="font-semibold">Services</p>
              <p>Our Multi - Dimension.</p>
            </span>
            <span>
              <p className="font-semibold">Assigned Employee</p>
              <p>Our Multi - Dimension.</p>
            </span>
            <span>
              <p className="font-semibold">Description</p>
              <p>
                our multi - dimension suite of products is created with passion
                and decades of experience to help you every step of the way. Our
                multi - dimension suite of products is created with passion and
                decades of experience to help you every step of the way.
              </p>
            </span>
          </div>
        </div>
      )}
      {showMomModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-50">
          <div className="p-6 rounded-xl bg-black w-1/2 text-white font-poppins relative">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 m-4 bg-transparent text-white text-xl cursor-pointer"
              onClick={() => setShowMomModal(false)}
            >
              <RxCross2 />
            </button>
            {/* MOM Form content */}
            <p className="text-2xl text-center mb-4 font-semibold">MOM Form</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="client-zone" className="text-white">
                  Client Zone <sup className="text-red-600">*</sup>
                </label>
                <div className="flex gap-2">
                  <div className="bg-[#15E029] p-3 rounded-full cursor-pointer"></div>
                  <div className="bg-[#E04515] p-3 rounded-full cursor-pointer"></div>
                  <div className="bg-[#E01515] p-3 rounded-full cursor-pointer"></div>
                </div>
              </div>
              <div>
                <label htmlFor="topic-discuss" className="text-white">
                  Topic Discuss <sup className="text-red-600">*</sup>
                </label>
                <textarea
                  id="topic-discuss"
                  cols="60"
                  rows="5"
                  className="bg-[#3C3C3C] w-full resize-none rounded-lg "
                ></textarea>
              </div>
              <div>
                <label htmlFor="complain" className="text-white">
                  Complain <sup className="text-red-600 ">*</sup>
                </label>
                <textarea
                  id="complain"
                  cols="60"
                  rows="5"
                  className="bg-[#3C3C3C] w-full resize-none rounded-lg "
                ></textarea>
              </div>
              <div>
                <label htmlFor="feedback" className="text-white ">
                  Feedback <sup className="text-red-600">*</sup>
                </label>
                <textarea
                  id="feedback"
                  cols="60"
                  rows="5"
                  className="bg-[#3C3C3C] w-full resize-none rounded-lg "
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  id="btn2"
                  className="text-white font-medium rounded-lg text-base px-6 py-2 text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListCard;

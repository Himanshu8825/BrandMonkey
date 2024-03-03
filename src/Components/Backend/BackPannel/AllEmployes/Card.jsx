import React from "react";
import { ImLoop } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import AllEmp from "../../../../../public/AllEmp.png";
import CardProfile2 from "../../../../../public/CardProfile2.png";

const Card = () => {
  return (
    <div className="border-gradient rounded-3xl card-item3 m-2 flex flex-col-reverse">
      <div className="w-full h-[80%] gradient rounded-br-3xl rounded-bl-3xl">
        <div
          className="text-white flex  justify-evenly   mt-[-65px]"
          id="card-profile"
        >
          <span className="flex ">
            <img
              src={AllEmp}
              alt=""
              width={40}
              height={40}
              className=" rounded-3xl m-3 mt-2 ml-1.5 "
            />
            <p className=" font-poppins text-md mt-3">Bluewillow</p>
          </span>
          <span></span>
          <button className="bg-[#f5cc15d4] h-[30px] py-2 px-4 rounded m-2">
            Regular
          </button>
        </div>
        <div className="flex text-white font-poppins ">
          <span className="ml-8 ">
            <p className="text-xl font-medium mt-4">Services:</p>
          </span>
          <div>
            <div className="absolute ml-[-80px] mt-10 text-base font-light">
              <p className="m-2  ">
                EID - <span className="ml-[5.5rem]">BM001</span>
              </p>
              <p className="m-2">
                Name - <span className="ml-[4rem]"> Blue Willow</span>
              </p>
              <p className="m-2">
                Designation- <span className="ml-[1.4rem]"> Video Editor</span>
              </p>
              <p className="m-2">
                Email -{" "}
                <span className="ml-[4.5rem]">blueWillow@gmail.com</span>
              </p>
              <p className="m-2">
                Phone Number - <span className="">+910000000000</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around  text-xl mt-[9rem] py-2  ">
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2  cursor-pointer ">
              <img src={CardProfile2} width={20} height={20} />
              <p className="m-0 ml-2 text-base">Alot Client</p>
            </button>
          </div>
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2 cursor-pointer">
              <MdModeEdit />
              <p className="m-0 ml-2 text-base">Edit</p>
            </button>
          </div>
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2 cursor-pointer">
              <RiDeleteBin6Line />
              <p className="m-0 ml-2 text-base">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { ImLoop } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import CardProfile from "../../../../../public/CardProfile.png";

const Card = () => {
  return (
    <div className="border-gradient rounded-3xl card-item2 m-2 flex flex-col-reverse">
      <div className="w-full h-[80%] gradient rounded-br-3xl rounded-bl-3xl">
        <div
          className="text-white flex  justify-evenly   mt-[-65px]"
          id="card-profile"
        >
          <span className="flex ">
            <img
              src={CardProfile}
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
            <div className="absolute ml-[100px] mt-9 text-base font-light">
              <p className="m-2">
                Web Development - <span>yes</span>
              </p>
              <p className="m-2">
                Creatives - <span className="ml-[5.3rem]">No</span>
              </p>
              <p className="m-2">
                M.M. Management- <span className="ml-[0.7rem]">Yes</span>
              </p>
              <p className="m-2">
                Google Ads - <span className="ml-[4.5rem]">No</span>
              </p>
              <p className="m-2">
                Google Ads - <span className="ml-[4.5rem]">No</span>
              </p>
            </div>
            <div className="absolute ml-[-80px] mt-9 text-base font-light">
              <p className="m-2">
                SEO - <span className="ml-[4.2rem]">yes</span>
              </p>
              <p className="m-2">
                Rell - <span className="ml-[4.7rem]">No</span>
              </p>
              <p className="m-2">
                Fb Ads - <span className="ml-[3rem]">Yes</span>
              </p>
              <p className="m-2">
                Google Ads - <span className="ml-[0.5rem]">No</span>
              </p>
              <p className="m-2">
                Google Ads - <span className="ml-[0.5rem]">No</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around  text-xl mt-[10rem] py-2 g">
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2  ">
              <ImLoop className="text-xl" />
              <p className="m-0 ml-2 text-base">Change To One Time</p>
            </button>
          </div>
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2">
              <MdModeEdit />
              <p className="m-0 ml-2 text-base">Edit</p>
            </button>
          </div>
          <div>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-4 py-2">
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

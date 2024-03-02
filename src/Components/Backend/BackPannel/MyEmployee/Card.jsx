import React from "react";
import { ViewMore2 } from "../../../Icon";
import CardProfile from "../../../../../public/CardProfile.png";

const Card = () => {
  return (
    <div className="border-gradient rounded-3xl card-item m-2 flex flex-col-reverse">
      <div className="w-full h-1/2 gradient rounded-br-3xl rounded-bl-3xl">
        <div
          className="text-white flex absolute justify-around  mt-[-60px]"
          id="card-profile"
        >
          <div>
            <img
              src={CardProfile}
              alt=""
              width={35}
              height={35}
              className=" rounded-3xl m-3 mt-2 ml-1.5 "
            />
          </div>
          <div>
            <p className=" font-poppins text-lg mt-3">Bluewillow</p>
          </div>
          <span className="flex mt-[-10px] ml-[4rem] text-lg font-semibold">
            <p className="text-[#f5cd15]">24</p>{" "}
            <p className="text-white">/25</p>
          </span>
        </div>
        <div className="flex text-white font-poppins m-4">
          <div className="font-medium text-lg"> Tickets:2</div>
          <div className="flex items-center ml-auto " id="view-more">
            <span className="text-base mr-1 cardglow">View more</span>
            <div className="mt-2">
              <ViewMore2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

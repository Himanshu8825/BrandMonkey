import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { ImLoop } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import CardProfile from "../../../../../public/CardProfile.png";

const Card = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      // labels: ["A", "B", "C"],
      datasets: [
        {
          data: [88, 12],
          backgroundColor: [
            // "rgba(217, 217, 217, 0.5)",
            "rgba(245, 205, 21, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 0, // To remove border
          // borderRadius: 45,
        },
      ],
    };

    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="border-gradient rounded-3xl card-item4 m-2 flex flex-col-reverse">
      <div className="w-full h-[70%] gradient rounded-br-3xl rounded-bl-3xl">
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
          <span>
            <button className="bg-[#f5cc15d4] h-[30px] py-2 px-4 rounded m-2 font-poppins flex justify-center items-center font-medium">
              Regular
            </button>
          </span>
        </div>
        <div className="flex text-white font-poppins ">
          <span className="absolute ml-[150px] mt-8 text-base font-light ">
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-3 py-1.5 cursor-pointer">
              <p className="m-0 ml-2 text-base">+ Add Review</p>
            </button>
            <button className="flex items-center bg-black text-[#f5cc15d4] rounded-lg px-8 py-1.5 mt-4 cursor-pointer">
              <RiDeleteBin6Line />
              <p className="m-0 ml-2 text-base">Delete</p>
            </button>
          </span>
          <span className="absolute ml-[-80px] mt-9 text-base font-light">
            <div className="card w-[100px] h-[60px] absolute left-[6rem] my-0">
              <Chart type="doughnut" data={chartData} options={chartOptions} />
            </div>
          </span>
        </div>
        <p className="text-white mt-[9.3rem] text-center font-poppins font-medium">
          Work Done in Hrs - 3 Hours
        </p>
      </div>
    </div>
  );
};

export default Card;

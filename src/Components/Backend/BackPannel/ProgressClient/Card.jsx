import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import CardProfile from "../../../../../public/CardProfile.png";

const Card = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      // labels: ["A", "B", "C"],
      datasets: [
        {
          data: [0, 12, 88],
          backgroundColor: [
            "rgba(217, 217, 217, 0.5)",
            "rgba(0, 0, 0, 1)",
            "rgba(245, 205, 21, 1)",
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
    <div className="border-gradient rounded-3xl w-[380px] h-[360px] m-2 flex flex-col-reverse">
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
            <p className=" font-poppins text-md mt-3">Sapient</p>
          </span>

          <button className="bg-[#f5cc15d4] h-[30px] py-2 px-4 rounded m-2">
            Regular
          </button>
        </div>
        <div className="flex text-white font-poppins  flex-col  ml-[2rem] ">
          <p className="m-2 mt-6">
            Client Name - <span className="ml-4">Sapient</span>
          </p>
          <p className="m-2">
            My Work - <span className="ml-[3rem]">15 Single Post Design</span>
          </p>
          <p className="m-2">
            My Service - <span className="ml-8">SEO</span>
          </p>
          <p className="m-2">
            Update Work -{" "}
            <span className="ml-4">
              <select className="bg-transparent rounded-[0.5rem] text-white w-[40%]   p-[2px] border border-white  font-poppins font-medium">
                <option value="">Catogary</option>
                <option value="">Option 1</option>
                <option value="">Option2</option>
              </select>
            </span>
          </p>
          <p className="m-2">
            Work Progress -{" "}
            <span className="ml-2">
              <div className="card w-[100px] h-[60px] ml-[10rem] my-2 mt-[-2rem]">
                <Chart
                  type="doughnut"
                  data={chartData}
                  options={chartOptions}
                />
              </div>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

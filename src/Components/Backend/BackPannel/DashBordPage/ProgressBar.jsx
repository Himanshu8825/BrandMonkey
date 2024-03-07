// ProgressBar.jsx
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function ProgressBar() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      datasets: [
        {
          data: [5, 45, 55],
          backgroundColor: [
            "rgba(217, 217, 217, 0.5)",
            "rgba(0, 0, 0, 1)",
            "rgba(245, 205, 21, 1)",
          ],
          borderWidth: 0,
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
    <div className="mt-4 mx-20">
      <div className="BR gradient rounded-xl flex justify-between relative  w-full  font-poppins   ">
        <div>
          <div className="ml-[7rem]  text-base font-medium p-4 text-white w-full">
            Total Ticket Raised
          </div>
          <div className="card w-[130px] h-[50px] absolute left-8 my-0">
            <Chart type="doughnut" data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="text-white flex flex-col m-4 p-6 relative w-full left-[2rem] top-2 ">
          <div className="border-l-4 border-[#F5CD15] ">
            <p className="text-sm font-light m-0">Solved Ticket</p>
            <span className="text-base">50</span>
          </div>
          <div className="border-l-4 border-[#2e2e2e]">
            <p className="text-sm font-light m-0">In Progress</p>
            <span className="text-base">45</span>
          </div>
          <div className="border-l-4 border-[#969696]">
            <p className="text-sm font-light m-0">In Pending</p>
            <span className="text-base">5</span>
          </div>
        </div>

        <div className="absolute bottom-1 left-[14rem] text-white flex gap-2">
          <div className="">
            <input type="radio" id="monthly" name="subscriptionType" checked />
            <label htmlFor="monthly"> Monthly</label>
          </div>
          <div>
            <input type="radio" id="yearly" name="subscriptionType" />
            <label htmlFor="yearly"> Yearly</label>
          </div>
        </div>
      </div>
    </div>
  );
}

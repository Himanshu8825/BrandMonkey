import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      // labels: ["A", "B", "C"],
      datasets: [
        {
          data: [5, 45, 55],
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
    <div className=" w-[800px] h-[260px] px-28 gradient rounded-xl  border border-[#F5CD15] flex   justify-between relative">
      <div>
        <div className="absolute  tracking-[0.01em] font-semibold flex items-center w-[220px] h-5 text-white top-1">
          Total Ticket Raised
        </div>
        <div className="card w-[120px] h-[50px] absolute left-2  my-6 ">
          <Chart type="doughnut" data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="text-white flex flex-col    ">
        <div className="border-l-4 border-[#F5CD15]  ">
          <p className="text-sm font-light">Solved Ticket</p>
          <span className="font-bold text-xl">50</span>
        </div>
        <div className="border-l-4  border-[#2e2e2e]">
          <p className="text-sm font-light">In Progress</p>
          <span className="font-bold text-xl">45</span>
        </div>
        <div className="border-l-4  border-[#969696]">
          <p className="text-sm font-light">In Pending</p>
          <span className=" font-medium text-lg">5</span>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 text-white flex gap-2">
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
  );
}

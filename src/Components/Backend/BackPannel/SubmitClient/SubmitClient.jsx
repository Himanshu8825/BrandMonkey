import React, { useState } from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "../AllServices/Navbar";

const SubmitClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    employeeId: "",
    designation: "",
    password: "",
    services: "Choose Services",
    team: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col sm:flex-row bg-[#f5cd15]">
        <div className="bg-[#f5cd15]">
          <div className="ml-4 mt-4 sm:mt-0">
            <BrandIcon />
          </div>
          <div className="mt-[-3rem]">
            <Navbar />
          </div>
        </div>
        <div className="w-full bg-black   rounded-tl-[2rem] rounded-bl-[2rem] overflow-x-hidden flex justify-center items-center ">
          <p className="text-white formPara font-poppins text-lg font-medium">
            Submit Employee Form:
          </p>
          <div
            className=" flex justify-around mt-8 overflow-hidden  "
            id="child4"
          >
            <div className=" w-[48%] h-full ml-6 p-6 ">
              <form
                onSubmit={submitHandler}
                className="flex flex-col w-full ml-1"
              >
                <span>
                  <label htmlFor="employeeId" className="w-full">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1 ml-1">
                      Employee ID <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="employeeId"
                      value={formData.employeeId}
                      placeholder="Employee ID"
                      id="employeeId"
                      className="bg-[#D9D9D9] rounded-[0.5rem]  w-[90%] p-[12px] placeholder-black placeholder:font-poppins text-black focus:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="designation">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Designation<sup className="text-pink-600">*</sup>{" "}
                    </p>
                    <input
                      type="text"
                      required
                      name="designation"
                      value={formData.designation}
                      placeholder="Designation"
                      id="designation"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="address">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Password <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="password"
                      required
                      name="password"
                      value={formData.password}
                      placeholder="Enter Password"
                      id="password"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="services" className="w-full">
                    <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Services
                    </p>
                    <select
                      name="services"
                      id="services"
                      value={formData.services}
                      onChange={changeHandler}
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[96%] p-[12px]  font-poppins font-medium"
                    >
                      <option className=" font-poppins" value="Choose Services">
                        Choose Services
                      </option>
                      <option value="USA">Google Ad</option>
                      <option value="America">Fb Ad</option>
                      <option value="India">Youtube Ad</option>
                    </select>
                  </label>
                </span>
              </form>
            </div>
            <div className=" w-[48%] h-full flex flex-col p-6  ">
              <form
                onSubmit={submitHandler}
                className="flex flex-col w-full ml-1"
              >
                <span>
                  <label htmlFor="name" className="w-full">
                    <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Name of the Employee{" "}
                      <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      placeholder="Client Phone Number"
                      id="name"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="email">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Email Id <sup className="text-pink-600">*</sup>{" "}
                    </p>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.gst}
                      placeholder="Client GST No."
                      id="email"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="phone">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Phone Number <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="number"
                      required
                      name="phone"
                      value={formData.phone}
                      placeholder="Phone Number"
                      id="phone"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="team">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                      Team <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="team"
                      value={formData.team}
                      placeholder="Team"
                      id="team"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>

                <span>
                  <button
                    type="submit"
                    id="btn2"
                    className="text-white  font-medium rounded-lg text-base  px-8  py-0.5 mt-[3rem] ml-[-90px]"
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitClient;

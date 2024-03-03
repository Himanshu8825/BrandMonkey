import React, { useState } from "react";
import { BrandIcon } from "../../../Icon";
import Navbar from "./Navbar";

const TotalEmploye = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    facebook: "",
    google: "",
    instragram: "",
    ecommerce: "",
    gst: "",
    reels: "",
    seo: "",
    youtube: "",
    socialMedia: "",
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
      <div className="parent">
        <div className="child">
          <div className="ml-16">
            <BrandIcon />
          </div>
          <Navbar />
        </div>
        <div className="child2 flex justify-center items-center " id="child2">
          <p className="text-white formPara font-poppins text-lg font-medium">
            Submit Client Form:
          </p>
          <div className="child3 flex justify-around mt-8 overflow-y-scroll ">
            <div className=" w-[48%] h-full ml-6 p-6 ">
              <form
                onSubmit={submitHandler}
                className="flex flex-col w-full ml-1"
              >
                <span>
                  <label htmlFor="name" className="w-full">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Name Of The Client <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      placeholder="Name Of The Client"
                      id="name"
                      className="bg-[#D9D9D9] rounded-[0.5rem]  w-[90%] p-[12px] placeholder-black placeholder:font-poppins text-black focus:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="email">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Client Email Id <sup className="text-pink-600">*</sup>{" "}
                    </p>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      placeholder="Email of the client"
                      id="email"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="address">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Clienty Address <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="address"
                      value={formData.address}
                      placeholder=" Client Address"
                      id="address"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="facebook">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Flayers <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="facebook"
                      value={FormData.facebook}
                      placeholder="Facebook Ad "
                      id="facebook"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="google">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Google Ads <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="google"
                      value={formData.google}
                      placeholder="Google Ads"
                      id="google"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="instragram">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      GMB <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="instragram"
                      value={formData.instragram}
                      placeholder="Instragram Handle"
                      id="instragram"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="ecomarce">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Ecomarce <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="ecommerce"
                      value={formData.ecommerce}
                      placeholder="Ecomace"
                      id="ecomarce"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
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
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Client Phone Number <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="Number"
                      required
                      name="phone"
                      value={formData.phone}
                      placeholder="Client Phone Number"
                      id="name"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="email">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Client GST No. <sup className="text-pink-600">*</sup>{" "}
                    </p>
                    <input
                      type="email"
                      required
                      name="gst"
                      value={formData.gst}
                      placeholder="Client GST No."
                      id="email"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="address">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Reels <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="reels"
                      value={formData.reels}
                      placeholder="Reels"
                      id="address"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="facebook">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Facebook Ads <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="facebook"
                      value={formData.facebook}
                      placeholder="Facebook Ad "
                      id="facebook"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="google">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      SEO <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="seo"
                      value={formData.seo}
                      placeholder="SEO"
                      id="google"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="instragram">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      YouTube Management <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="youtube"
                      value={formData.youtube}
                      placeholder="YouTube Management"
                      id="instragram"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <label htmlFor="ecomarce">
                    <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-3">
                      Social Media Managment{" "}
                      <sup className="text-pink-600">*</sup>
                    </p>
                    <input
                      type="text"
                      required
                      name="socialMedia"
                      value={formData.socialMedia}
                      placeholder="Social Media Managment"
                      id="ecomarce"
                      className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                      onChange={changeHandler}
                    />
                  </label>
                </span>
                <span>
                  <button
                    type="submit"
                    id="btn2"
                    className="text-white  font-medium rounded-lg text-base  px-8  py-0.5 m-4 ml-[-90px]"
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

export default TotalEmploye;

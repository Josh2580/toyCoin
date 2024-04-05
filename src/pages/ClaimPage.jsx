import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

import CheckImg from "../assets/home3.png";
import SampleImg from "../assets/sample.png";
import MyTimer from "./../components/MyTimer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetToyCoinByIdQuery, useSpinByIdMutation } from "../api/toyCoinApi";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const ClaimPage = () => {
  const navigate = useNavigate();
  const notify = () => toast("In Progress");
  const time = new Date();

  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const { data, error, isLoading, isSuccess } = useGetToyCoinByIdQuery(1);
  //   isSuccess && console.log(data);

  const [
    spinNow,
    {
      data: spinData,
      error: spinError,
      isLoading: spinIsLoading,
      isSuccess: spinIsSuccess,
    },
  ] = useSpinByIdMutation();

  const SpinHandler = async () => {
    console.log("time");
  };

  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <div>
        <HeaderComp />
      </div>
      <div className=" flex items-center justify-center">
        <img src={SampleImg} className="rounded-full" alt="icon" />
      </div>
      <div className="flex gap-2 items-center bg-pink-100 p-4 rounded-xl">
        <div className=" w-max">
          <img src={CheckImg} className="icon-img " alt="Check Image" />
        </div>
        <div className="flex flex-1 flex-col  w-10">
          <ProgressBar completed={60} />
        </div>
        <button onClick={() => SpinHandler()} className="primary-btn">
          Claim Toy
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

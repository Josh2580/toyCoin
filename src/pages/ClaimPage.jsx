import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Footer2 from "./../components/Footer2";

import CheckImg from "../assets/home3.png";
import SampleImg from "../assets/sample.png";

const ClaimPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp />
      <div className=" flex items-center justify-center">
        <img src={SampleImg} className="rounded-full" alt="icon" />
      </div>

      <div className="flex gap-2 items-center bg-pink-100 p-4 rounded-xl">
        <div className=" w-max">
          <img src={CheckImg} className="icon-img " alt="Check Image" />
        </div>
        <div className="flex flex-1 flex-col  w-max ">
          <p>Storage</p>
          <p>Date</p>
        </div>
        <button className="primary-btn">Claim Toy</button>
      </div>
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

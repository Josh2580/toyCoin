import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Footer2 from "./../components/Footer2";

import CheckImg from "../assets/home3.png";
import SampleImg from "../assets/sample.png";
import MyTimer from "./../components/MyTimer";

const ClaimPage = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

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
        <div className="flex flex-1 flex-col  w-10">
          <MyTimer expiryTimestamp={time} />
        </div>
        <button className="primary-btn">Claim Toy</button>
      </div>
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

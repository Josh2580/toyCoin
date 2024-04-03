import React from "react";
import SampleImg from "../assets/sample.png";

const Footer2 = () => {
  return (
    <div className="flex  gap-2 bg-pink-100 rounded-2xl">
      <div className="card-col bg-transparent  gap-0 ">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-8" />
        <p>Bot</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-8" />
        <p>Apps</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-8" />
        <p>Apps</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-8" />
        <p>Apps</p>
      </div>
    </div>
  );
};

export default Footer2;

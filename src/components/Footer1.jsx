import React from "react";
import SampleImg from "../assets/sample.png";

const Footer1 = () => {
  return (
    <div className="card-row gap-2 bg-pink-200 p-2">
      <div className="card-col flex-1 bg-transparent  gap-0 ">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-10" />
        <p>Bot</p>
      </div>
      <div className="flex-1 card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-10" />
        <p>Apps</p>
      </div>
    </div>
  );
};

export default Footer1;

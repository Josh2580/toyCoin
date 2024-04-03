import React from "react";
import SampleImg from "../assets/sample.png";

const Gain = () => {
  return (
    <div className="card-row gap-6">
      <div className="card-col">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-20" />
        <button className="primary-btn bg-yellow-100 w-full text-gray-950">
          Earn
        </button>
      </div>
      <div>
        <p>icon</p>
      </div>
      <div className="card-col">
        <img src={SampleImg} alt="Earn Image" className="rounded-full w-20" />
        <button className="primary-btn bg-blue-200 w-full text-gray-950">
          Boost
        </button>
      </div>
    </div>
  );
};

export default Gain;

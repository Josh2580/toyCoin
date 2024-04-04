import React from "react";
import EarnImg from "../assets/earn.png";
import BoostImg from "../assets/homeBoost.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Gain = () => {
  const navigate = useNavigate();
  const NavHandler = (to) => {
    navigate(`/${to}`);
  };
  return (
    <div className="card-row gap-6">
      <div onClick={() => NavHandler("earn")} className="card-col">
        <img src={EarnImg} alt="Earn Image" className="rounded-full w-20" />
        <button className="primary-btn bg-yellow-100 w-full text-gray-950">
          Earn
        </button>
      </div>
      <div>
        <FaArrowRightLong size={30} />
      </div>
      <div onClick={() => NavHandler("boost")} className="card-col">
        <img src={BoostImg} alt="Earn Image" className="rounded-full w-20" />
        <button className="primary-btn bg-blue-200 w-full text-gray-950">
          Boost
        </button>
      </div>
    </div>
  );
};

export default Gain;

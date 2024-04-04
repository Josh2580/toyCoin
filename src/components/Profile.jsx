import React from "react";
import HomeImg from "../assets/home1.png";
import CheckImg from "../assets/home3.png";
import IconImg from "../assets/homeBoost.png";
import ArrowImg from "../assets/arrow3.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const ClaimHandler = () => {
    navigate("/claim");
  };

  return (
    <div className="bg-yellow-100 px-4 py-2 rounded-2xl">
      <div className="card-row ">
        <div className=" flex p-0 m-0 flex-col gap-0 ">
          <span className="p-0 m-0">Total Claimed</span>
          <span className="p-0 m-0">0.32 TOY</span>
        </div>
        <div className="flex gap-3 items-center">
          <img src={IconImg} alt="check icon image" className="icon-img" />
          <img src={ArrowImg} alt="check icon image" className="arrow-img " />
        </div>
      </div>
      <div className="card-row">
        <img src={HomeImg} className=" profile-img" alt="icon" />
        <button onClick={() => ClaimHandler()} className="primary-btn">
          Play for TOY
        </button>
      </div>
      <div className="card-row">
        <p>Recent Transactions</p>
        <p>See All icon</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className=" w-max">
          <img src={CheckImg} alt="check icon image" className="icon-img" />
        </div>
        <div className="flex flex-1 flex-col  w-max ">
          <p>Claim</p>
          <p>Date</p>
        </div>
        <div className="flex flex-1 flex-col  w-max  items-end">
          <p>+0.0450</p>
          <p>---</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

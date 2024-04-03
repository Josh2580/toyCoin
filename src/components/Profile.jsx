import React from "react";
import SampleImg from "../assets/sample.png";

const Profile = () => {
  return (
    <div className="bg-yellow-100 px-4 py-2 rounded-lg">
      <div className="card-row ">
        <div className=" flex p-0 m-0 flex-col gap-0 ">
          <span className="p-0 m-0">Total Claimed</span>
          <span className="p-0 m-0">0.32 TOY</span>
        </div>
        <div>
          <span>icon</span>
          <span>icon</span>
        </div>
      </div>
      <div className="card-row">
        <img src={SampleImg} className="rounded-full" alt="icon" />
        <button className="primary-btn">Play for TOY</button>
      </div>
      <div className="card-row">
        <p>Recent Transactions</p>
        <p>See All icon</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-yellow-800 w-max">
          <p>ICON</p>
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

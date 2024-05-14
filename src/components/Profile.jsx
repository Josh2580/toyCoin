import React, { useEffect, useState } from "react";
import HomeImg from "../assets/home1.png";
import CheckImg from "../assets/home3.png";
import IconImg from "../assets/homeBoost.png";
import ArrowImg from "../assets/arrow3.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useGetToyCoinByIdQuery } from "../api/toyCoinApi";
import MyTimer from "./MyTimer";

import { HiUsers } from "react-icons/hi";

const Profile = ({ telegram_id, data, isSuccess }) => {
  const navigate = useNavigate();

  // console.log(telegram_id);

  const [myData, setMyData] = useState();
  const [time, setTime] = useState();

  const ClaimHandler = (path) => {
    navigate(path);
  };

  useEffect(() => {
    isSuccess && setMyData(data);
    isSuccess && setTime(new Date(data.launch_date));
  }, [data]);

  return (
    <div className="bg-yellow-100 px-4 py-2 rounded-2xl">
      <div className="card-row ">
        <div className=" flex p-0 m-0 flex-col gap-0 ">
          <span className="p-0 m-0 card-row text-base text-gray-700 font-semibold">
            Total Claimed
          </span>
          <span className="p-0 m-0 text-2xl font-bold text-gray-700">
            {" "}
            {isSuccess ? data.quantity_mined : 0.0} $TOY
          </span>
        </div>
        <div
          onClick={() => ClaimHandler("/referal")}
          className="flex gap-2 items-center"
        >
          <HiUsers color="#f07330" size={30} />
          {/* <img src={ArrowImg} alt="check icon image" className="arrow-img " /> */}
          <IoIosArrowForward size={20} />
        </div>
      </div>
      <div className="card-row">
        <img src={HomeImg} className=" profile-img" alt="icon" />
        <button
          onClick={() => ClaimHandler("/claim")}
          className={`primary-btn ${!data && "cursor-not-allowed  opacity-50"}`}
          disabled={!data}
        >
          Play for TOY.!
        </button>
      </div>
      <div className="card-row text-base text-gray-700 font-semibold">
        <p>Launch Date</p>
        <p>Count Down</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className=" w-max">
          <img
            src={CheckImg}
            alt="check icon image"
            className="icon-img w-8 h-8"
          />
        </div>

        <div className="text-sm text-gray-700 font-semibold">01-Aug-2024</div>
        <div className="flex flex-1 flex-col  w-max  items-end">
          {isSuccess && myData && <MyTimer expiryTimestamp={time} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;

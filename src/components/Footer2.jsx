import React from "react";
import BotImg from "../assets/bot.png";
import AppsImg from "../assets/apps.png";
import BoostImg from "../assets/boost.png";
import EarnImg from "../assets/earn.png";

const Footer2 = () => {
  return (
    <div className="flex  gap-2 bg-pink-100 rounded-2xl">
      <div className="card-col bg-transparent  gap-0 ">
        <img src={BotImg} alt="Earn Image" className="icon-img" />
        <p>Bot</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={AppsImg} alt="Earn Image" className="icon-img" />
        <p>Apps</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={EarnImg} alt="Earn Image" className="icon-img" />
        <p>Earn</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={BoostImg} alt="Earn Image" className="icon-img" />
        <p>Boost</p>
      </div>
    </div>
  );
};

export default Footer2;

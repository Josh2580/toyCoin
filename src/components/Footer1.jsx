import React from "react";
import AppsImg from "../assets/apps.png";
import BotImg from "../assets/bot.png";

const Footer1 = () => {
  return (
    <div className="card-row gap-2 bg-pink-200 p-2">
      <div className="card-col bg-transparent  gap-0 ">
        <img src={BotImg} alt="Earn Image" className="icon-img" />
        <p>Bot</p>
      </div>
      <div className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent">
        <img src={AppsImg} alt="Earn Image" className="icon-img" />
        <p>Apps</p>
      </div>
    </div>
  );
};

export default Footer1;

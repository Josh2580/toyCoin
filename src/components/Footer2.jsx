import React from "react";
import BotImg from "../assets/bot.png";
import AppsImg from "../assets/app.png";
import BoostImg from "../assets/boost.png";
import EarnImg from "../assets/earn.png";
import { useNavigate } from "react-router-dom";

const Footer2 = () => {
  const navigate = useNavigate();
  const NavHandler = (to) => {
    // console.log(`${to}`);
    navigate(`/${to}`);
  };

  return (
    <div className="flex  gap-2 bg-pink-100 rounded-2xl">
      <div
        onClick={() => NavHandler("bot")}
        className="card-col bg-transparent  gap-0 "
      >
        <img src={BotImg} alt="Bot Image" className="icon-img" />
        <p>Bot</p>
      </div>
      <div
        onClick={() => NavHandler("app")}
        className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent"
      >
        <img src={AppsImg} alt="Apps Image" className="icon-img" />
        <p>Apps</p>
      </div>
      <div
        onClick={() => NavHandler("earn")}
        className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent"
      >
        <img src={EarnImg} alt="Earn Image" className="icon-img" />
        <p>Earn</p>
      </div>
      <div
        onClick={() => NavHandler("boost")}
        className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent"
      >
        <img src={BoostImg} alt="Boost Image" className="icon-img" />
        <p>Boost</p>
      </div>
    </div>
  );
};

export default Footer2;

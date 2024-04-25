import React from "react";
import AppsImg from "../assets/app.png";
import BotImg from "../assets/bot.png";
import { useNavigate } from "react-router-dom";

const Footer1 = () => {
  const navigate = useNavigate();
  const NavHandler = (to) => {
    navigate(`/${to}`);
  };

  return (
    <div className="card-row h-16 gap-2 bg-pink-200 py-0">
      <div
        onClick={() => NavHandler("bot")}
        className="card-col bg-transparent  gap-0 "
      >
        <img src={BotImg} alt="Bot Image" className="icon-img h-8 w-8" />
        <p className="nav-title">Bot</p>
      </div>
      <div
        onClick={() => NavHandler("app")}
        className=" card-col gap-0 h-max border-l p-0 border-gray-400 rounded-none bg-transparent"
      >
        <img src={AppsImg} alt="Apps Image" className="icon-img h-8 w-8" />
        <p className="nav-title">Apps</p>
      </div>
    </div>
  );
};

export default Footer1;

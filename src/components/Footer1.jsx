import React from "react";
import AppsImg from "../assets/apps.png";
import BotImg from "../assets/bot.png";
import { useNavigate } from "react-router-dom";

const Footer1 = () => {
  const navigate = useNavigate();
  const NavHandler = (to) => {
    navigate(`/${to}`);
  };

  return (
    <div className="card-row gap-2 bg-pink-200 p-2">
      <div
        onClick={() => NavHandler("bot")}
        className="card-col bg-transparent  gap-0 "
      >
        <img src={BotImg} alt="Earn Image" className="icon-img" />
        <p>Bot</p>
      </div>
      <div
        onClick={() => NavHandler("app")}
        className=" card-col gap-0 border-l border-gray-400 rounded-none bg-transparent"
      >
        <img src={AppsImg} alt="Earn Image" className="icon-img" />
        <p>Apps</p>
      </div>
    </div>
  );
};

export default Footer1;

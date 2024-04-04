import React from "react";
import LogoImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderComp = () => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/home");
  };

  return (
    <div className=" card-row ">
      <img
        src={LogoImg}
        className="logo-img"
        alt="Logo Images"
        onClick={() => ClickHandler()}
      />
      <button className="primary-btn">Connect Wallet</button>
    </div>
  );
};

export default HeaderComp;

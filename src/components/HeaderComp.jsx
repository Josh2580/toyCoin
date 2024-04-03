import React from "react";
import LogoImg from "../assets/logo.png";

const HeaderComp = () => {
  return (
    <div className=" card-row ">
      <img src={LogoImg} className="logo-img" alt="Logo Images" />
      <button className="primary-btn">Connect Wallet</button>
    </div>
  );
};

export default HeaderComp;

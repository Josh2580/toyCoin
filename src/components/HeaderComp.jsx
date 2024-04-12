import React from "react";
import LogoImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const HeaderComp = ({ visible }) => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/home");
  };
  const NavHandler = () => {
    navigate(-1);
  };

  return (
    <div className=" card-row ">
      <div className="flex gap-3">
        {visible && <IoIosArrowBack size={20} onClick={() => NavHandler()} />}
        <img
          src={LogoImg}
          className="logo-img"
          alt="Logo Images"
          onClick={() => ClickHandler()}
        />
      </div>
      <button className="primary-btn">Connect Wallet</button>
    </div>
  );
};

export default HeaderComp;

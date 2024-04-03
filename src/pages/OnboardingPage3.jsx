import React from "react";
import SampleImg from "../assets/sample.png";
import { useNavigate } from "react-router-dom";

const OnboardingPage3 = () => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col bg-blue-950 h-screen justify-between p-10">
      <h2 className="text-white text-4xl text-center">
        Toy the Aggregator Dex on Ton
      </h2>
      <img src={SampleImg} alt="Onboard Toy Image" />
      <button
        className="bg-white p-2.5 text-xl rounded-md"
        onClick={ClickHandler}
      >
        Earn Toy
      </button>
    </div>
  );
};

export default OnboardingPage3;

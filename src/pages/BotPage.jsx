import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BotPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp visible={true} />
      {/* <div>
        <h2 className="text-5xl text-center">Mine by Shaking Box</h2>
        <p className=" text-center">
          After activation, participants can now mine by spinning. Activate
          Below !!!
        </p>
      </div> */}

      <div onClick={() => NavHandler("boost")} className="card-col flex gap-6">
        <h2 className="text-2xl text-center text-green-200">0.9 TON</h2>
        <h2 className="text-2xl text-center text-green-200">
          Auto Claiming Bot
        </h2>

        <button className="primary-btn bg-green-200 w-full text-gray-950">
          Buy
        </button>
      </div>

      <Footer2 />
    </div>
  );
};

export default BotPage;

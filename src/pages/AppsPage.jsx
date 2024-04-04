import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import Toy1Img from "../assets/Toycash.png";
import Toy2Img from "../assets/Toycaser.png";

const AppsPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-8 p-6 justify-between bg-gray-100">
      <HeaderComp />

      <div>
        <p className="text-center font-bold text-3xl">Apps</p>
        <p className="text-center text-blue-500 font-semibold">
          Check out other apps on Toy
        </p>
      </div>
      <div
        onClick={() => NavHandler("boost")}
        className="card-col relative h-44 justify-end gap-4 pb-7"
      >
        <img
          className=" absolute rounded-full w-24 -top-12"
          src={Toy1Img}
          alt="Toy Cash Image"
        />
        <p className="text-center font-bold text-3xl text-green-300">TOY DEX</p>

        <button className="primary-btn bg-green-300 w-full font-bold text-gray-950">
          Coming Soon
        </button>
      </div>
      <div
        onClick={() => NavHandler("boost")}
        className="card-col relative h-44 justify-end gap-4 pb-7"
      >
        <img
          className=" absolute rounded-full w-24 -top-12"
          src={Toy2Img}
          alt="Toy Cash Image"
        />
        <p className="text-center font-bold text-3xl text-green-300">TOY DEX</p>

        <button className="primary-btn bg-green-300 w-full font-bold text-gray-950">
          Coming Soon
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default AppsPage;

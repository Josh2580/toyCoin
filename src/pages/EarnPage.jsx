import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Task = ({ color }) => {
  return (
    <div className={`flex gap-2 items-center ${color} p-4 rounded-xl`}>
      <div className=" w-max">
        <img src={CheckImg} className="icon-img " alt="Check Image" />
      </div>
      <div className="flex flex-1 flex-col  w-10">
        <h3 className="text-xl font-bold">Task 1</h3>
        <p className="text-xs leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore?
        </p>
        <div className="flex pt-1 gap-1">
          <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
        </div>
      </div>
      <FaArrowRightLong size={30} />
    </div>
  );
};

const EarnPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp />

      <div>
        <p className="text-center font-semibold text-gray-400">Your Balance</p>
        <p className="text-center font-bold text-3xl">1.320098 TOY</p>
        <p className="text-center text-blue-500 font-semibold">How it works</p>
      </div>

      <Task color="bg-pink-100" />
      <Task color="bg-green-100" />
      <Task color="bg-yellow-100" />
      <Task color="bg-violet-100" />
      <Task color="bg-pink-100" />
      <Footer2 />
    </div>
  );
};

export default EarnPage;

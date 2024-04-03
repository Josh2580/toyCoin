import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";
import Gain from "./../components/Gain";
import More from "../components/More";

const HomePage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 justify-between bg-gray-100">
      <div className="m-3 mx-6 flex flex-col justify-between h-full ">
        <HeaderComp />
        <Profile />
        <Gain />
      </div>
      <More />
    </div>
  );
};

export default HomePage;

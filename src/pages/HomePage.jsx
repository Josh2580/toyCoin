import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";
import Gain from "./../components/Gain";
import More from "../components/More";

const HomePage = () => {
  return (
    <div className=" gap-2 h-screen flex flex-col justify-between">
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

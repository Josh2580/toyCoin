import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";
import Gain from "./../components/Gain";

const HomePage = () => {
  return (
    <div className="m-3">
      <HeaderComp />
      <Profile />
      <Gain />
      <h1 className="text-4xl">Homepage</h1>
    </div>
  );
};

export default HomePage;

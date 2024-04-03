import React from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";

const HomePage = () => {
  return (
    <div className="m-3">
      <HeaderComp />
      <Profile />
      <h1 className="text-4xl">Homepage</h1>
    </div>
  );
};

export default HomePage;

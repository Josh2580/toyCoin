import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

const BoostPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp />
      <h2 className="text-center text-5xl text-bold">Boost Coming Coming</h2>
      <Footer2 />
    </div>
  );
};

export default BoostPage;

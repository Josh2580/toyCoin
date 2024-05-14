import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

const BoostPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2 justify-between bg-gray-100">
      <div className="flex flex-col gap-4">
        <HeaderComp visible={true} />
        <h2 className="text-center text-5xl text-bold">Boost Coming Soon</h2>
      </div>
      <Footer2 />
    </div>
  );
};

export default BoostPage;

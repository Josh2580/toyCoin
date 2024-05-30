import React from "react";
import HeaderComp from "./../components/HeaderComp";

const UpdatingPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2  bg-gray-100">
      <HeaderComp />

      <div className="flex flex-col items-center gap-4 bg-yellow-100 px-4 py-2 rounded-2xl">
        <p className=" text-center font-bold text-gray-800 text-xl ">
          We are updating our server to accomodate our growing community. Please
          bear with us;{" "}
        </p>
        <p className=" text-center font-bold text-gray-800 text-xl ">
          This will be completed in few ours. Thank you for your understanding
        </p>
      </div>
    </div>
  );
};

export default UpdatingPage;

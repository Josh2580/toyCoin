import React from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

const ConnectWalletPage = () => {
  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp visible={true} />
      <h2 className="text-center text-5xl text-bold">
        Connect-Wallet Coming Soon
      </h2>
      <Footer2 />
    </div>
  );
};

export default ConnectWalletPage;

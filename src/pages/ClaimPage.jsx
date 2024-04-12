import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

import SampleImg from "../assets/claimImg.png";

import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
  useCreateToyMutation,
} from "../api/toyCoinApi";

import ClaimToy from "../components/ClaimToy";

const ClaimPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  // console.log(telegram_id);

  const { data, isError, error, isLoading, isSuccess } =
    useGetToyCoinByIdQuery(telegram_id);

  // isSuccess && console.log(data);
  isError && console.log(error);

  //   From Local Storage
  useEffect(() => {
    let a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, telegram_id]);

  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <div>
        <HeaderComp visible={true} />
      </div>
      <div className=" flex items-center justify-center">
        <img src={SampleImg} className="w-60 h-60" alt="icon" />
      </div>
      {/* // {data && ( */}
      <ClaimToy
        data={data}
        isSuccess={isSuccess}
        error={error}
        tele_id={telegram_id}
      />
      {/* // )} */}
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

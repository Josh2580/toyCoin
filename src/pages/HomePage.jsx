import React, { useEffect, useState } from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";
import Gain from "./../components/Gain";
import Footer1 from "../components/Footer1";
import { useParams } from "react-router-dom";
import { useGetToyCoinByIdQuery } from "../api/toyCoinApi";

const HomePage = () => {
  const { telegram_id } = useParams();
  const [myTelegramId, setMyTelegramId] = useState();

  useEffect(() => {
    if (telegram_id) {
      localStorage.setItem("telegram-id", telegram_id);
      setMyTelegramId(telegram_id);
    } else if (!telegram_id) {
      setMyTelegramId(localStorage.getItem("telegram-id"));
    }
  }, [myTelegramId, telegram_id]);

  // console.log(myTelegramId);
  const { data, isError, error, isLoading, isSuccess } = useGetToyCoinByIdQuery(
    myTelegramId,
    {
      skip: !myTelegramId,
    }
  );
  // console.log(data);

  return (
    <div className=" h-screen flex flex-col gap-4 justify-between bg-gray-100">
      <div className="m-3 mx-6 flex flex-col justify-between h-full ">
        <HeaderComp />
        {/* // {data && ( */}
        <Profile telegram_id={myTelegramId} data={data} isSuccess={isSuccess} />
        {/* // )} */}
        <Gain />
      </div>
      <Footer1 />
    </div>
  );
};

export default HomePage;

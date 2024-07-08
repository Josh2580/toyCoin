import React, { useEffect, useState } from "react";
import HeaderComp from "./../components/HeaderComp";
import Profile from "./../components/Profile";
import Gain from "./../components/Gain";
import Footer2 from "../components/Footer2";
import { useParams } from "react-router-dom";
import { useGetToyCoinByIdQuery } from "../api/toyCoinApi";
import {
  useGetTelegramUserQuery,
  useUpdateTelegramUserMutation,
} from "../api/usersApi";
import FreeAutoBotComp from "../components/FreeAutoBotComp";

const HomePage = () => {
  const { telegram_id } = useParams(); // Get telegram-id from the URL
  const [myTelegramId, setMyTelegramId] = useState(); // telegram-id state
  const [autoBotActivated, setAutoBotActivated] = useState(false); // telegram-id state

  useEffect(() => {
    if (telegram_id) {
      localStorage.setItem("telegram-id", telegram_id);
      setMyTelegramId(telegram_id);
    } else if (!telegram_id) {
      setMyTelegramId(localStorage.getItem("telegram-id"));
    }
  }, [myTelegramId, telegram_id]);

  // console.log(myTelegramId);
  const { data, isSuccess } = useGetToyCoinByIdQuery(myTelegramId, {
    skip: !myTelegramId,
  });

  const { data: userData } = useGetTelegramUserQuery(myTelegramId, {
    skip: !myTelegramId,
  });

  const [updateTelegramUser] = useUpdateTelegramUserMutation();

  const formData = new FormData();
  let currentDate = new Date();
  let isoDate = currentDate.toISOString();

  useEffect(() => {
    if (myTelegramId && userData) {
      formData.append("last_active", isoDate);
      updateTelegramUser({ formData, telegram_id: myTelegramId });
    }
  }, [myTelegramId]); // Empty dependency array means this effect will only run once, similar to componentDidMount
  // }, [myTelegramId, userData]); // Empty dependency array means this effect will only run once, similar to componentDidMount

  useEffect(() => {
    // useEffect to check if auto-bot is activated

    if (userData && userData.user_bot) {
      setAutoBotActivated(true);
    } else {
      setAutoBotActivated(false);
    }
  }, [userData]);

  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2 justify-between bg-gray-100">
      <div className="flex flex-col gap-4">
        <HeaderComp />
        <Profile telegram_id={myTelegramId} data={data} isSuccess={isSuccess} />

        <>
          <FreeAutoBotComp
            telegram_id={myTelegramId}
            autoBotActivated={autoBotActivated}
            coinData={data}
          />
        </>
        <Gain />
      </div>
      <Footer2 />
    </div>
  );
};

export default HomePage;

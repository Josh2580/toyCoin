import React, { useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { useParams } from "react-router-dom";
import { useGetToyCoinByIdQuery } from "../api/toyCoinApi";

const StatsPage = () => {
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

  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2 justify-between bg-gray-100">
      <div className="flex flex-col gap-4">
        <HeaderComp visible={true} />

        <div>
          <p className="text-center font-bold text-3xl pt-3">Statisics</p>
        </div>
        <div className="my-2 flex flex-col gap-2 ">
          <div
            className={`flex justify-center gap-2 text-left bg-purple-200  p-4 rounded-xl `}
          >
            <img src={CheckImg} className="icon-img " alt="Check Image" />

            <div className="flex flex-1 flex-col w-10">
              <p className="text-sm text-gray-700 font-bold">
                Total ToyCoin Minned
              </p>

              <div className="w-max p-0 m-0 text-2xl text-gray-800 font-bold rounded-full">
                {isSuccess &&
                  parseFloat(data.get_total_quantity_mined).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center gap-2 text-left bg-purple-200  p-4 rounded-xl `}
          >
            <img src={CheckImg} className="icon-img " alt="Check Image" />

            <div className="flex flex-1 flex-col w-10">
              <p className="text-sm text-gray-700 font-bold">Total Users</p>

              <div className="w-max p-0 m-0 text-2xl text-gray-800 font-bold rounded-full">
                {isSuccess &&
                  parseFloat(data.get_total_users).toLocaleString("en-US")}
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center gap-2 text-left bg-purple-200  p-4 rounded-xl `}
          >
            <img src={CheckImg} className="icon-img " alt="Check Image" />

            <div className="flex flex-1 flex-col w-10">
              <p className="text-sm text-gray-700 font-bold">Daily Users</p>

              <div className="w-max p-0 m-0 text-2xl text-gray-800 font-bold rounded-full">
                {isSuccess &&
                  parseFloat(data.get_daily_users).toLocaleString("en-US")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default StatsPage;

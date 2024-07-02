import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  useCreateFreeAutoBotMutation,
  useGetAllFreeAutoBotQuery,
  useAddFreeAutoBotByIdMutation,
  useGetFreeAutoBotByIdQuery,
} from "../api/autoBotApi";

const BotPage = () => {
  const [telegram_id, set_telegram_id] = useState();

  const [timeActivated, setTimeActivated] = useState(); // Time
  const [elapsedTime, setElapsedTime] = useState(); // Total Seconds Used
  const [autoMinedData, setAutoMinedData] = useState();
  const [myTime, setMyTime] = useState(); //Current Time
  const [myPercent, setMyPercent] = useState(0);

  const hourInMilliseconds = 3600; // 60 minutes * 60 seconds * 1000 milliseconds
  const updateInterval = 1000; // Update every second

  // setting the percentage
  const progressPercentage = (elapsedTime / hourInMilliseconds) * 100;

  const { data, isError, error, isLoading, isSuccess } =
    useGetFreeAutoBotByIdQuery(telegram_id, {
      skip: !telegram_id,
    });

  const ActivateAutoBotHandler = () => {
    console.log("Auto bot Activated", data);
  };

  const AutoBotHandler = () => {
    if (!data.activated) {
      ActivateAutoBotHandler();
    } else if (data.activated) {
      console.log("Auto bot handler");
      console.log(data);
    }
  };

  // useEffect for time and percent
  useEffect(() => {
    // console.log(Math.floor(elapsedTime));

    if (elapsedTime >= 2160) {
      console.log("6 hours completed stop");
      setAutoMinedData(2160 * 0.5);
    } else {
      setAutoMinedData(Math.floor(Number(elapsedTime) * 0.5));
      console.log(autoMinedData);
    }

    setTimeout(() => {
      // Current time minus last clicked  time divided by 1000 to get each second count
      setElapsedTime((new Date() - timeActivated) / 1000);
      setMyTime(new Date());
      if (progressPercentage >= 100) {
        setMyPercent(100);
      } else {
        setMyPercent(progressPercentage);
      }
    }, 100);
  }, [data, elapsedTime, myTime]);
  useEffect(() => {
    // Getting and Setting Telegram ID from the Local Storage
    let a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, telegram_id]);

  useEffect(() => {
    //Setting the time from the database
    isSuccess && setTimeActivated(new Date(data.time)); // Setting time to JavaScript Language
  }, [data]);

  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2 justify-between bg-gray-100">
      <div className="flex flex-col gap-4">
        <HeaderComp visible={true} />
        {/* <div>
        <h2 className="text-5xl text-center">Mine by Shaking Box</h2>
        <p className=" text-center">
          After activation, participants can now mine by spinning. Activate
          Below !!!
        </p>
      </div> */}

        <div className="card-col flex gap-6">
          <h2 className="text-2xl text-center text-green-200">0.2 TON</h2>
          <h2 className="text-2xl text-center text-green-200">
            Auto Claiming Bot
          </h2>

          <button
            disabled
            onClick={() => AutoBotHandler("boost")}
            className="primary-btn bg-green-200 w-full text-gray-950"
          >
            Coming Soon...
          </button>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default BotPage;

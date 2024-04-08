import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

import CheckImg from "../assets/home3.png";
import SampleImg from "../assets/sample.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
} from "../api/toyCoinApi";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const ClaimPage = () => {
  const notify = () => toast("In Progress");

  const { data, error, isLoading, isSuccess } = useGetToyCoinByIdQuery(1);

  const [claimNow] = useClaimToyByIdMutation();

  const [isTime, setIsTime] = useState(0);
  const [timeClicked, setTimeClicked] = useState();
  const [elapsedTime, setElapsedTime] = useState();
  const [mineData, setMineData] = useState({});
  const [myTime, setMyTime] = useState();
  const [myPercent, setMyPercent] = useState(0);

  const hourInMilliseconds = 3600; // 60 minutes * 60 seconds * 1000 milliseconds
  const updateInterval = 1000; // Update every second

  // const startTime = Date.now(timeClicked);
  // setting the percentage
  const progressPercentage = (elapsedTime / hourInMilliseconds) * 100;

  // useEffect for time and percent
  useEffect(() => {
    setTimeout(() => {
      // Current time minus last clicked  time divided by 1000 to get each second count
      setElapsedTime((new Date() - timeClicked) / 1000);
      setMyTime(new Date());
      if (progressPercentage >= 100) {
        setMyPercent(100);
      } else {
        setMyPercent(progressPercentage);
      }
    }, 100);
  }, [data, elapsedTime, myTime]);

  useEffect(() => {
    isSuccess && setTimeClicked(new Date(data.time_clicked));
    isSuccess && setMineData(data.quantity_mined);

    setTimeout(() => {
      if (elapsedTime <= hourInMilliseconds) {
        console.log("value");
      }
    }, 1000);
    return () => {
      // console.log("breaking");
    };
  }, [data]);
  // }, [data]);

  const ClaimHandler = async () => {
    // console.log("handler clicked");
    // console.log("elapsedTime: ", elapsedTime);
    // console.log("hourInMilliseconds: ", hourInMilliseconds);
    // console.log("timeClicked: ", timeClicked);
    // console.log("myPercent: ", myPercent);

    if (elapsedTime >= hourInMilliseconds) {
      // setMyPercent(0);

      const now = new Date();
      const formData = new FormData();
      let timeCLick = now.toISOString();
      formData.append("time_clicked", timeCLick);
      formData.append("quantity_mined", Number(mineData) + 100);
      // console.log("its now");
      const result = await claimNow({ formData, id: 1 }).unwrap();
      if (result) {
        // setFirstClicked(result.first_click);
        //         setLastClickedTime(result.time_clicked);
        // console.log("updated");
        // console.log(result);
      }
    } else {
      // console.log("not yet time");
    }
  };

  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <div>
        <HeaderComp />
      </div>
      <div className=" flex items-center justify-center">
        <img src={SampleImg} className="rounded-full" alt="icon" />
      </div>
      <div className="flex gap-2 items-center bg-pink-100 p-4 rounded-xl">
        <div className=" w-max">
          <img src={CheckImg} className="icon-img " alt="Check Image" />
        </div>
        <div className="flex flex-1 flex-col  w-10">
          <ProgressBar
            completed={myPercent == 100 ? myPercent : myPercent.toFixed(2)}
            // completed={70}
            // label={`${progress.toFixed(2)}%`}
            // label={progress.toFixed(2)}
            // label={`${Math.floor(progress)}%`}
          />
        </div>
        <button onClick={() => ClaimHandler()} className="primary-btn">
          Claim Toy
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

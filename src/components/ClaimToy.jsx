import React, { useState, useEffect } from "react";
import {
  useClaimToyByIdMutation,
  useCreateToyMutation,
} from "../api/toyCoinApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import CheckImg from "../assets/home3.png";

const ClaimToy = ({ data, isSuccess, error, tele_id }) => {
  const notify = (msg) => toast(msg);

  //   const [tele_id, set_tele_id] = useState();

  // //   From Local Storage
  //     useEffect(() => {
  //       let a = localStorage.getItem("telegram-id");
  //       set_tele_id(a);
  //       tele_id && console.log(tele_id);
  //     }, [data, tele_id]);

  const [claimNow] = useClaimToyByIdMutation();
  const [createToy] = useCreateToyMutation();

  const [firstClicked, setFirstClicked] = useState(0);
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
  //   }, [elapsedTime, myTime]);

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

  const ClaimHandler = async () => {
    if (error) {
      console.log("create a coin");
      const now = new Date();
      const formData = new FormData();
      let timeCLick = now.toISOString();
      formData.append("time_clicked", timeCLick);
      formData.append("telegram_id", tele_id);
      // console.log("its now");
      const result = await createToy({ formData }).unwrap();
      if (result) {
        console.log(result);
      }
    } else {
      if (elapsedTime >= hourInMilliseconds) {
        // setMyPercent(0);

        const now = new Date();
        const formData = new FormData();
        let nowTimeCLick = now.toISOString();
        formData.append("time_clicked", nowTimeCLick);
        formData.append("quantity_mined", Number(mineData) + 100);
        // console.log("its now");
        const result = await claimNow({ formData, id: tele_id }).unwrap();
        if (result) {
          setFirstClicked(result.first_click);
          setTimeClicked(result.time_clicked);
          // console.log("updated");
          // console.log(result);
          notify("Congatulations..! You just claimed 100 TOY");
        }
      } else {
        // console.log("not yet time");
        notify("In Progress...");
      }
    }
  };

  return (
    <div className="flex gap-2 items-center bg-pink-100 p-4 rounded-xl">
      <ToastContainer />
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
        Claim Toy/1hr
      </button>
    </div>
  );
};

export default ClaimToy;

import { useState, useEffect } from "react";
import { createTimeModel, useTimeModel } from "react-compound-timer";
import { useTimer } from "react-timer-hook";
// import { TimeModelValueView } from "../TimeModelValueView/TimeModelValueView";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpinByIdMutation, useGetToyCoinByIdQuery } from "../api/toyCoinApi";

const timer = createTimeModel({
  // start from 10 seconds
  initialTime: 5000,
  // count down
  direction: "backward",
});

const MyTimer = ({ expiryTimestamp }) => {
  // console.log(expiryTimestamp);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>
        {/* <span>{days}</span>: */}
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "In Progress" : "Pls Claim"}</p>
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default MyTimer;

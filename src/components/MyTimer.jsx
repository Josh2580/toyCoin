import React from "react";
import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp }) => {
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
      <p>{isRunning ? "Running" : "Not running"}</p>

      <div style={{ fontSize: "30px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div className="flex gap-2 text-sm">
        {/* <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button> */}
        {/* <button
          className="text-center  w-full"
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
    </div>
  );
};

export default MyTimer;

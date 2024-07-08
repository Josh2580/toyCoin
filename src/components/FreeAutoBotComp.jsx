import React, { useEffect, useState } from "react";
import {
  useAddFreeAutoBotByIdMutation,
  useGetFreeAutoBotByIdQuery,
} from "../api/autoBotApi";
import { useClaimToyByIdMutation } from "../api/toyCoinApi";

// Imports for the modal pop-up
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../App.css";
import AutoBotPng from "../assets/logo.png";

const FreeAutoBotComp = ({ telegram_id, autoBotActivated, coinData }) => {
  // Query to get AutoBot with the users telegram-id
  const { data, isSuccess } = useGetFreeAutoBotByIdQuery(telegram_id, {
    skip: !telegram_id,
  });

  //Mutation to claim coin from auto mined
  const [claimNow] = useClaimToyByIdMutation();

  const [updateFreeAutoBot] = useAddFreeAutoBotByIdMutation(); // Mutation for the Auto-Bot

  const [timeActivatedState, setTimeActivatedState] = useState(); // Time
  const [elapsedTimeState, setElapsedTimeState] = useState(); // Total Seconds Used
  const [autoMinedDataState, setAutoMinedDataState] = useState();
  const [myTimeState, setMyTimeState] = useState(); //Current Time
  const [runningPerSecondsState, setRunningPerSecondsState] = useState(0); // setting the seconds that the setTimeout function will run

  const [open, setOpen] = useState(false); // state for the modal

  const onOpenModal = () => setOpen(true); // Function to open modal
  const onCloseModal = () => setOpen(false); // Function to close the modal

  // useEffect for 6 hours time, 60 * 60 * 6
  useEffect(() => {
    if (timeActivatedState) {
      if (elapsedTimeState >= 21600) {
        setAutoMinedDataState(21600 * 1.4);
        console.log(autoMinedDataState);
      } else {
        setAutoMinedDataState(Math.floor(Number(elapsedTimeState) * 1.4));
        // autoMinedDataState && console.log(autoMinedDataState);
      }

      let myTimeStateoutFunction = setTimeout(() => {
        setRunningPerSecondsState(runningPerSecondsState + 1);
        // Current time minus last clicked  time divided by 1000 to get each second count
        setElapsedTimeState((new Date() - timeActivatedState) / 1000);
        setMyTimeState(new Date());

        // console.log("Running functions");
      }, 1000);

      // Stop the myTimeStateout Function after 5 seconds
      if (runningPerSecondsState >= 1) {
        clearTimeout(myTimeStateoutFunction);
      }
    }
  }, [data, elapsedTimeState, timeActivatedState, autoMinedDataState]);

  //   autoMinedDataState && console.log(autoMinedDataState);

  useEffect(() => {
    //Setting the time from the database
    isSuccess && setTimeActivatedState(new Date(data.time)); // Setting time to JavaScript Language
  }, [data]);

  // Function to call a PATCH request to update the time of AutoBot

  // AutoBot Helper for Patch request
  useEffect(() => {
    if (autoMinedDataState) {
      (async () => {
        // console.log(autoMinedDataState);

        const now = new Date();
        const formData = new FormData();
        let nowTimeCLick = now.toISOString();
        formData.append("time", nowTimeCLick);

        // console.log("its now");
        const result = await updateFreeAutoBot({
          formData,
          id: telegram_id,
        }).unwrap();
        // result ? console.log(result) : console.log(result);
      })();
    }
  }, [autoMinedDataState]);

  // useEffect to auto open the modal if the auto-bot is activated and is up to 5 minutes (60sec * 5)
  useEffect(() => {
    if (autoBotActivated && autoMinedDataState >= 300) {
      // console.log("isAutoBotTime is activated", autoMinedDataState);
      onOpenModal();
    } else {
      // console.log("Not Time Yet", autoMinedDataState);
      onCloseModal();
    }
  }, [autoBotActivated, autoMinedDataState]);

  const ClaimHandler = async () => {
    const now = new Date();
    const formData = new FormData();
    let mineData = coinData.quantity_mined;
    formData.append("quantity_mined", Number(mineData) + autoMinedDataState);
    const result = await claimNow({ formData, id: telegram_id }).unwrap();
    result && onCloseModal();
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
      animationDuration={500}
    >
      <div className=" flex px-12 justify-center text-center m-0 flex-col gap-4 ">
        <img src={AutoBotPng} alt="AutoBot" className="w-2/3 mx-auto" />
        <span className=" text-base text-gray-700 font-bold">
          Your ToyBot is working for you
        </span>

        <span className="p-0 m-0 text-3xl font-bold text-gray-800">
          ${autoMinedDataState && autoMinedDataState} TOY
        </span>
        <button onClick={() => ClaimHandler()} className="primary-btn">
          Claim
        </button>
      </div>
    </Modal>
  );
};

export default FreeAutoBotComp;

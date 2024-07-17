import React, { useState, useEffect } from "react";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";

import { useAddTaskByIdMutation } from "../api/taskApi";

const EachTask = ({ tsk, telegram_id, claimNow, data, taskData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [myWindow, setMyWindow] = useState(null);
  const [addTaskResult, setAddTaskResult] = useState(null);
  const [registered, setRegistered] = useState();
  let checkResult = tsk.user.find((a) => a == data.user);

  // Perform Task
  const [addTask] = useAddTaskByIdMutation();

  //   let regist = tsk.user.find((a) => a == data.user);
  let now = new Date();
  useEffect(() => {
    let reg = tsk.user.find((a) => a == data.user);
    setRegistered(reg);
  }, [data, taskData, now]);

  const [counter, setCounter] = useState(0);
  let intervalId = null;
  let count = 0;

  const CheckHandler = async (task) => {
    // if (task.group_id.startsWith("twitter")) {
    //   // If the group Id starts with twitter
    //   console.log("starts with twitter");
    //   let userResult = tsk.user.find((a) => a == data.user);
    //   // setAdded(true);

    //   // if (userResult) {
    //   //   const toyFormData = new FormData();
    //   //   let mineData = data.quantity_mined;
    //   //   let quantity = task.quantity;
    //   //   toyFormData.append("quantity_mined", Number(mineData) + quantity);
    //   //   let toyResult = await claimNow({
    //   //     formData: toyFormData,
    //   //     id: telegram_id,
    //   //   }).unwrap();
    //   //   if (toyResult) {
    //   //     console.log(toyResult);
    //   //   }
    //   // }
    // } else {
    //   console.log("Does not start with twitter");
    // }

    window.location.reload();

    // const increment = () => {
    //   if (count < 5) {
    //     // setCount(count + 1);
    //     count = count + 1;
    //     console.log("counting: ", count);
    //     setCounter(count);
    //   }
    //   // else {
    //   //   clearInterval(intervalId);
    //   //   console.log("stopping count", count);
    //   // }
    // };

    // intervalId = setInterval(increment, 1000);
    // let myIntel = setTimeout(() => {
    //   clearInterval(intervalId);
    //   setCounter(0);
    // }, 3000);
    // return () => clearTimeout(myIntel);
  };

  const TaskHandler = async (task) => {
    let user = data.user; // Current User
    let id = task.group_id; // Current Task

    const newWindow = window.open(task.url, "_blank");
    setMyWindow(newWindow);
    if (newWindow || task.group_id.startsWith("twitter")) {
      console.log("visited");
      if (!checkResult) {
        console.log("checking");
        const formData = new FormData();
        // adding users telegram id with formdata
        formData.append("telegram_id", telegram_id);
        let result = await addTask({ id, formData });
        setAddTaskResult(result);
        if (result) {
          const toyFormData = new FormData();
          let mineData = data.quantity_mined;
          let quantity = task.quantity;
          toyFormData.append("quantity_mined", Number(mineData) + quantity);
          let toyResult = await claimNow({
            formData: toyFormData,
            id: telegram_id,
          }).unwrap();
        }
      }
    }
  };

  return (
    <div
      className={`${tsk.completed ? "hidden" : "flex"} justify-center gap-2 text-left bg-blue-200  p-4 rounded-xl `}
    >
      <div
        onClick={() => TaskHandler(tsk)}
        className="flex flex-1 flex-col w-10"
      >
        <h3 className="text-lg font-bold">{tsk.task}</h3>
        <div className="flex pt-1 items-start justify-cente  gap-1">
          <div className="flex gap-1 pt-1">
            <div className="w-5 h-4 bg-green-500 rounded-full"></div>
            <div className="w-5 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-5 h-4 bg-pink-500 rounded-full"></div>
          </div>
          <div className="w-full p-0 m-0 font-bold">({tsk.quantity} TOY)</div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between items-end ">
        <FaArrowRightLong className="pt-1 " size={20} />
        <button
          onClick={() => CheckHandler(tsk)}
          disabled={registered || isLoading}
          className={` py-0 m-0 font-bold primary-btn ${(registered || isLoading) && "opacity-40"}`}
        >
          Check
          {/* {counter} */}
        </button>
      </div>
    </div>
  );
};

export default EachTask;

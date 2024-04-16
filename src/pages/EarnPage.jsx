import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
} from "../api/toyCoinApi";
import { useGetAllTaskQuery, useAddTaskByIdMutation } from "../api/taskApi";

const Task = ({ tsk, hasClicked, onClick }) => {
  return (
    <button
      onClick={() => onClick(hasClicked)}
      disabled={hasClicked}
      className={`flex justify-center gap-2 text-left bg-blue-200 ${hasClicked && "opacity-40"} p-4 rounded-xl `}
    >
      <img src={CheckImg} className="icon-img " alt="Check Image" />

      <div className="flex flex-1 flex-col w-10">
        <h3 className="text-lg font-bold">{tsk.task}</h3>
        <div className="flex pt-1 gap-1">
          <div className="w-5 h-4 bg-green-500 rounded-full"></div>
          <div className="w-5 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-5 h-4 bg-pink-500 rounded-full"></div>
        </div>
      </div>
      <FaArrowRightLong className="pt-1" size={20} />
    </button>
  );
};

const EarnPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  const navigate = useNavigate();

  // Getting Each Users coin by the telegram ID
  const { data, isSuccess } = useGetToyCoinByIdQuery(telegram_id, {
    skip: !telegram_id, // Skipping the get query if the telegram_id is not present
  });
  const [myData, setMyData] = useState();

  // Task for all Users
  const { data: taskData, isSuccess: taskIsSuccess } = useGetAllTaskQuery();
  const [myTaskData, setMyTaskData] = useState();

  // Perform Task
  const [addTask] = useAddTaskByIdMutation();

  // Claim extra TOY from task
  const [claimNow] = useClaimToyByIdMutation();

  //   From Local Storage
  let a;
  useEffect(() => {
    a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, a, telegram_id]);

  // For reflection of data's
  useEffect(() => {
    isSuccess && setMyData(data);
    taskIsSuccess && setMyTaskData(taskData);
  }, [data, taskData]);

  const TaskHandler = async (hasClicked, tsk) => {
    if (hasClicked) {
      console.log("Task already Completed");
    } else if (!hasClicked) {
      console.log("Task Just Clicked");
      let user = myData.user; // Current User
      let id = tsk.id; // Current Task
      const formData = new FormData();
      formData.append("telegram_id", telegram_id);
      let result = await addTask({ id, formData });
      if (result) {
        console.log(result.data.url);
        const toyFormData = new FormData();
        let mineData = data.quantity_mined;
        let quantity = result.data.quantity;
        toyFormData.append("quantity_mined", Number(mineData) + quantity);
        let toyResult = await claimNow({
          formData: toyFormData,
          id: telegram_id,
        }).unwrap();
        if (toyResult) {
          // navigate(0);
          window.location.href = result.data.url;
        }
      }
    }

    // console.log(hasClicked);
  };

  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <HeaderComp visible={true} />
      <div>
        <p className="text-center font-semibold text-gray-400">Your Balance</p>
        <p className="text-center font-bold text-3xl">
          {isSuccess && data.quantity_mined} TOY
        </p>
        <p className="text-center text-blue-500 font-semibold">How it works</p>
      </div>
      {myTaskData &&
        myData &&
        myTaskData.map((tsk, idx) => {
          const hasClicked = tsk.user.find((a) => a == myData.user);
          // console.log(hasClicked);
          return (
            // <button key={idx} onClick={() => TaskHandler()}>
            <Task
              key={idx}
              onClick={() => TaskHandler(hasClicked, tsk)}
              tsk={tsk}
              hasClicked={hasClicked}
            />
            // {/* {tsk.task} */}
            // </button>
          );
        })}
      <Footer2 />
    </div>
  );
};

export default EarnPage;

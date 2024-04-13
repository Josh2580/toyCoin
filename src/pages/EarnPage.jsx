import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
} from "../api/toyCoinApi";
import { useGetAllTaskQuery } from "../api/taskApi";

const Task = ({ tsk }) => {
  return (
    <button
      className={`flex justify-center gap-2 text-left ${tsk.color} p-4 rounded-xl`}
    >
      <div className=" w-max">
        <img src={CheckImg} className="icon-img " alt="Check Image" />
      </div>
      <div className="flex flex-1 flex-col  w-10">
        <h3 className="text-xl font-bold">Task {tsk.id}</h3>
        <p className="text-lg leading-5 text-gray-600">{tsk.task}</p>
        <div className="flex pt-1 gap-1">
          <div className="w-5 h-4 bg-green-500 rounded-full"></div>
          <div className="w-5 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-5 h-4 bg-pink-500 rounded-full"></div>
        </div>
      </div>
      <FaArrowRightLong size={30} />
    </button>
  );
};

const EarnPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  const [task_visible, set_task_visible] = useState();

  // console.log(telegram_id);

  const { data, isError, error, isLoading, isSuccess } =
    useGetToyCoinByIdQuery(telegram_id);

  const {
    data: taskData,
    isError: taskIsError,
    error: taskError,
    isLoading: taskIsLoading,
    isSuccess: taskIsSuccess,
  } = useGetAllTaskQuery();

  useEffect(() => {
    taskIsSuccess &&
      isSuccess &&
      taskData.map((tsk) => {
        console.log(data.user);
        let b = tsk.user.find((a) => a == data.user);
        b && set_task_visible(true);
      });

    // return () => {
    //   console.log("running");
    // };
  }, [taskData, data]);

  //   From Local Storage
  useEffect(() => {
    let a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, telegram_id]);

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
      {taskIsSuccess &&
        taskData.map((tsk, idx) => <Task key={idx} tsk={tsk} />)}

      {/* <Task color="bg-violet-100" /> */}
      {/* <Task color="bg-pink-100" /> */}
      <Footer2 />
    </div>
  );
};

export default EarnPage;

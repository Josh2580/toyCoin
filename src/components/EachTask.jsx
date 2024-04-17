import React, { useState, useEffect } from "react";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";

import { useAddTaskByIdMutation } from "../api/taskApi";

const EachTask = ({ tsk, telegram_id, claimNow, data, taskData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [registered, setRegistered] = useState();

  // Perform Task
  const [addTask] = useAddTaskByIdMutation();

  //   let regist = tsk.user.find((a) => a == data.user);
  let now = new Date();
  useEffect(() => {
    let reg = tsk.user.find((a) => a == data.user);
    setRegistered(reg);
    // console.log(registered);
    // console.log(reg);
    // console.log(regist);
    // console.log(now);
    // console.log(tsk);
  }, [data, taskData, now]);

  const Handler = async (task) => {
    console.log(task);
    if (registered) {
      console.log("Task already Completed");
    } else if (!registered) {
      console.log("Task Just Clicked");
      setIsLoading(true);
      let user = data.user; // Current User
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
          window.location.href = result.data.url;
        }
      }
    }
  };
  console.log(tsk);
  return (
    <button
      onClick={() => Handler(tsk)}
      disabled={registered || isLoading}
      className={`flex justify-center gap-2 text-left bg-blue-200 ${(registered || isLoading) && "opacity-40"} p-4 rounded-xl `}
    >
      <img src={CheckImg} className="icon-img " alt="Check Image" />

      <div className="flex flex-1 flex-col w-10">
        <h3 className="text-lg font-bold">{tsk.task}</h3>
        <div className="flex pt-1 items-start justify-cente  gap-1">
          <div className="w-5 h-4 bg-green-500 rounded-full"></div>
          <div className="w-5 h-4 bg-blue-500 rounded-full"></div>
          <div className="w-5 h-4 bg-pink-500 rounded-full"></div>
          {/* <div className="w-max p-0 m-0  rounded-full">
            {" "}
            ({tsk.quantity} TOY)
          </div> */}
        </div>
      </div>
      <FaArrowRightLong className="pt-1" size={20} />
    </button>
  );
};

export default EachTask;

import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import { useNavigate } from "react-router-dom";

import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
} from "../api/toyCoinApi";
import { useGetAllTaskQuery, useAddTaskByIdMutation } from "../api/taskApi";
import EachTask from "../components/EachTask";

const EarnPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  const navigate = useNavigate();

  // Getting Each Users coin by the telegram ID
  const { data, isSuccess } = useGetToyCoinByIdQuery(telegram_id, {
    skip: !telegram_id, // Skipping the get query if the telegram_id is not present
  });

  // Task for all Users
  const { data: taskData, isSuccess: taskIsSuccess } = useGetAllTaskQuery();

  // Claim extra TOY from task
  const [claimNow] = useClaimToyByIdMutation();

  //   From Local Storage
  let a;
  useEffect(() => {
    a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, a, telegram_id]);

  return (
    <div className=" h-screen flex flex-col gap-12 px-6 pt-2 justify-between bg-gray-100">
      <div className="flex flex-col gap-4">
        <HeaderComp visible={true} />
        <div>
          <p className="text-center font-semibold text-gray-400">
            Your Balance
          </p>
          <p className="text-center font-bold text-3xl">
            {isSuccess && data.quantity_mined} TOY
          </p>
          <p className="text-center text-blue-500 font-semibold">
            How it works
          </p>
        </div>
        {taskData &&
          data &&
          taskData.map((tsk, idx) => {
            const hasClicked = tsk.user.find((a) => a == data.user);
            // Javascript code here
            // console.log(tsk);
            return (
              <EachTask
                key={idx}
                tsk={tsk}
                hasClicked={hasClicked}
                telegram_id={telegram_id}
                claimNow={claimNow}
                data={data}
                taskData={taskData}
              />
            );
          })}
      </div>
      <Footer2 />
    </div>
  );
};

export default EarnPage;

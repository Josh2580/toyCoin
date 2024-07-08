import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";
import CheckImg from "../assets/home3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  useCreateFreeAutoBotMutation,
  useGetFreeAutoBotByIdQuery,
} from "../api/autoBotApi";
import {
  useGetToyCoinByIdQuery,
  useClaimToyByIdMutation,
} from "../api/toyCoinApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BotPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  const notify = (msg) => toast(msg);

  const { data: coinData, isSuccess: coinIsSuccess } = useGetToyCoinByIdQuery(
    telegram_id,
    {
      skip: !telegram_id,
    }
  );

  const [payWithToycoin] = useClaimToyByIdMutation();

  // Query to get AutoBot with the users telegram-id
  const { data, isError, error, isLoading, isSuccess } =
    useGetFreeAutoBotByIdQuery(telegram_id, {
      skip: !telegram_id,
    });

  // Mutation to create autobot
  const costOfBot = 50000;
  const [createFreeAutoBot] = useCreateFreeAutoBotMutation();

  // Function for POST Request for New AutoBot
  const CreateAutoBotHandler = async () => {
    const payFormData = new FormData();
    let payMineData = coinData.quantity_mined;
    payFormData.append("quantity_mined", Number(payMineData) - costOfBot);
    const payResult = await payWithToycoin({
      formData: payFormData,
      id: telegram_id,
    }).unwrap();
    if (payResult) {
      // console.log(payResult);
      // console.log("Auto bot Activated", data);
      const now = new Date();
      const formData = new FormData();
      let nowTimeCLick = now.toISOString();
      formData.append("time", nowTimeCLick);
      formData.append("activated", true);
      formData.append("telegram_id", telegram_id);
      // console.log("its now");
      const result = await createFreeAutoBot({ formData }).unwrap();
      if (result) {
        notify("Congatulations..! You just activated ToyBot");
      }
    }
  };

  // Function to Check if auto bot is activate or not from the database
  const AutoBotHandler = () => {
    // If auto bot is not activated
    if (!data) {
      CreateAutoBotHandler();
      // else if auto bot is activated
    }
    // else if (data.activated) {

    // }
  };

  useEffect(() => {
    // Getting and Setting Telegram ID from the Local Storage
    let a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, telegram_id]);
  // coinIsSuccess && console.log(coinData.quantity_mined);
  // console.log(data);
  return (
    // <div className=" h-screen flex flex-col gap-12  justify-between bg-gray-100">
    <div className="flex h-screen flex-col gap-4 px-6 pt-2 justify-between bg-gray-100">
      <HeaderComp visible={true} />
      <ToastContainer />

      <div
        className={`flex justify-center gap-2 text-left bg-blue-200  p-4 rounded-xl`}
      >
        <div
          onClick={() => AutoBotHandler()}
          className="flex flex-1 flex-col w-10"
        >
          <h3 className="text-lg font-bold">Toy Bot</h3>
          <div className="flex pt-1 items-start justify-cente  gap-1">
            <div className="flex gap-1 pt-1">
              <div className="w-5 h-4 bg-green-500 rounded-full"></div>
              <div className="w-5 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-4 bg-pink-500 rounded-full"></div>
            </div>
            <div className="w-full p-0 m-0 font-bold">
              {parseFloat(costOfBot).toLocaleString("en-US")}
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between items-end ">
          <FaArrowRightLong className="pt-1 " size={20} />
          {coinData && !data ? (
            <button
              onClick={() => AutoBotHandler()}
              disabled={coinData.quantity_mined < costOfBot}
              className={` py-0 m-0 font-bold primary-btn ${coinData.quantity_mined < costOfBot && "opacity-40"}`}
            >
              Activate
            </button>
          ) : (
            <button
              disabled
              className={` py-0 m-0 font-bold primary-btn opacity-40`}
            >
              Activated
            </button>
          )}
        </div>
      </div>
      <Footer2 />
      {/* </div> */}
    </div>
  );
};

export default BotPage;

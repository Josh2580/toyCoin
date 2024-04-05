import React, { useState, useEffect } from "react";
import HeaderComp from "../components/HeaderComp";
import Footer2 from "../components/Footer2";

import CheckImg from "../assets/home3.png";
import SampleImg from "../assets/sample.png";
import MyTimer from "./../components/MyTimer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetToyCoinByIdQuery, useSpinByIdMutation } from "../api/toyCoinApi";
import { useNavigate } from "react-router-dom";

const ClaimPage = () => {
  const navigate = useNavigate();
  const notify = () => toast("In Progress");
  const time = new Date();

  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const { data, error, isLoading, isSuccess } = useGetToyCoinByIdQuery(1);
  //   isSuccess && console.log(data);

  const [
    spinNow,
    {
      data: spinData,
      error: spinError,
      isLoading: spinIsLoading,
      isSuccess: spinIsSuccess,
    },
  ] = useSpinByIdMutation();

  const [mineData, setMineData] = useState({});
  const [lastClickedTime, setLastClickedTime] = useState();
  const [firstClicked, setFirstClicked] = useState();
  const [isMyTime, setIsMyTime] = useState(true);
  const [isFull, setIsFull] = useState(false);

  let remainTime;
  const maxTime = 60;

  const PageNow = new Date();
  const PageSecondsDiff = (PageNow - new Date(lastClickedTime)) / (1000 * 1);
  let PageIsTime = Math.floor(Math.min(PageSecondsDiff, 60));
  let PageMyTime = maxTime - PageIsTime;

  PageIsTime && time.setSeconds(time.getSeconds() + PageMyTime); // 10 minutes timer

  //   PageIsTime && console.log(PageMyTime);
  //   console.log(firstClicked);
  //   console.log(lastClickedTime);

  const SpinHandler = async () => {
    console.log("time");
  };

  useEffect(() => {
    remainTime = PageMyTime;
  }, [PageMyTime, PageSecondsDiff, PageNow, PageIsTime]);
  //
  useEffect(() => {
    isSuccess && setFirstClicked(data.first_click);
    isSuccess && setLastClickedTime(data.time_clicked);
    isSuccess && setMineData(data.quantity_mined);
  }, [data, isSuccess, PageIsTime]);

  return (
    <div className=" h-screen flex flex-col gap-4 p-6 justify-between bg-gray-100">
      <div>
        <HeaderComp />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
      <div className=" flex items-center justify-center">
        <img src={SampleImg} className="rounded-full" alt="icon" />
      </div>
      <div className="flex gap-2 items-center bg-pink-100 p-4 rounded-xl">
        <div className=" w-max">
          <img src={CheckImg} className="icon-img " alt="Check Image" />
        </div>
        <div className="flex flex-1 flex-col  w-10">
          {data && <MyTimer expiryTimestamp={time} />}
        </div>
        <button onClick={() => SpinHandler()} className="primary-btn">
          Claim Toy
        </button>
      </div>
      <Footer2 />
    </div>
  );
};

export default ClaimPage;

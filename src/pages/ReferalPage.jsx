import React, { useState, useEffect } from "react";
import HeaderComp from "./../components/HeaderComp";
import Footer2 from "./../components/Footer2";
import { useGetTelegramUserQuery } from "../api/usersApi";
import EachUser from "./../components/EachUser";
import RefLink from "./../components/RefLink";

const ReferalPage = () => {
  const [telegram_id, set_telegram_id] = useState();
  const { data, error, isLoading, isSuccess } = useGetTelegramUserQuery(
    telegram_id,
    {
      skip: !telegram_id,
    }
  );

  // From Local Storage
  useEffect(() => {
    let a = localStorage.getItem("telegram-id");
    set_telegram_id(a);
  }, [data, telegram_id]);
  //   console.log(data);

  return (
    <div className=" h-full min-h-screen relative flex flex-col gap-4 p-6 justify-between w-full bg-gray-100">
      <div className="">
        <HeaderComp visible={true} />

        <div className="mb-3 mt-5">
          <RefLink telegram_id={telegram_id} />
          <h3 className="font-bold text-gray-600 italic my-2 flex justify-between">
            <span> {isSuccess && data.referred_users.length} FRENS</span>
            <span>1000 $TOY per referral</span>
          </h3>
          {isSuccess &&
            data.referred_users.map((ref, idx) => (
              <EachUser key={idx} telegram_id={ref} />
            ))}
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default ReferalPage;

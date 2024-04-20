import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { useGetTelegramUserQuery } from "../api/usersApi";

const EachUser = ({ telegram_id }) => {
  const { data, error, isLoading, isSuccess } = useGetTelegramUserQuery(
    telegram_id,
    {
      skip: !telegram_id,
    }
  );
  //   console.log(data);
  return (
    <div
      className={`flex justify-center items-center gap-2 text-left bg-yellow-100 p-4 mb-2 rounded-xl `}
    >
      <BiSolidUser color="#f07330" size={20} />

      <div className="flex flex-1 flex-col w-10">
        <h3 className="text-base font-semibold">
          {isSuccess && (data.username || data.first_name)}
        </h3>
      </div>
      {/* <FaArrowRightLong className="pt-1" size={20} /> */}
    </div>
  );
};

export default EachUser;

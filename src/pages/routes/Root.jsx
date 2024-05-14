import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="p-0 m-0">
      <Outlet />
    </div>
  );
};

export default Root;

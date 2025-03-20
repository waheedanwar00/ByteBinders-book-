import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"; // Assuming SideBar is in the same directory

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row  bg-green-50">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;

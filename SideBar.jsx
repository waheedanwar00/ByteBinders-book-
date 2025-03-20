import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";

import userImg from "../assets/dprofile.jpeg";
import { useNavigate } from "react-router-dom";

const SideBar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" }); // Optional backend call
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      navigate("/logout");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div className="h-screen w-[280px] bg-gray-800 text-white flex flex-col">
      <div className="flex items-center p-4">
        <img
          src={user?.photoURL || userImg}
          alt="User Image"
          className="w-10 h-10 rounded-full mr-2"
        />
        <p>{user?.displayName || "Demo User"}</p>
      </div>
      <div className="flex-1">
        <div className="px-4 py-2">
          <a
            href="/admin/dashboard"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <FontAwesomeIcon icon={faHouse} className="w-5 h-5 mr-2" />
            <p>Dashboard</p>
          </a>
          <a
            href="/admin/dashboard/manage"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiInbox className="w-5 h-5 mr-2" />
            <p>Manage Books</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Novels</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>History</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Sufism</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Business</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Trading</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Children</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Fiction</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiShoppingBag className="w-5 h-5 mr-2" />
            <p>Programming</p>
          </a>
          <a
            href="/login"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiArrowSmRight className="w-5 h-5 mr-2" />
            <p>Sign In</p>
          </a>
          <a
            onClick={handleLogout}
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            <HiTable className="w-5 h-5 mr-2" />
            <p>Log Out</p>
          </a>
        </div>
        <div className="px-4 py-2 border-t border-gray-700 mt-4">
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiChartPie className="w-5 h-5 mr-2" />
            <p>Upgrade to Pro</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiViewBoards className="w-5 h-5 mr-2" />
            <p>Documentation</p>
          </a>
          <a
            href="#"
            className="flex items-center p-2 hover:bg-gray-700 rounded"
          >
            <HiSupport className="w-5 h-5 mr-2" />
            <p>Help</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="p-4 md:w-[1180px]">
      <div className="mt-8 bg-white rounded-xl flex border-2 h-20 px-4 w-full font-medium my-2">
        <div className="flex items-center font-semibold w-full">
          <h1>Welcome!</h1>
        </div>
      </div>
      
     
      <div className="mt-10 flex  justify-center gap-x-4 gap-y-5 p-5">
        <div className="flex flex-col bg-white px-4 border-2 rounded-xl w-full sm:w-[calc(50%-1rem)] h-[170px] justify-around py-5">
          <div className="flex justify-between items-center">
            <p>Total Categories</p>
            <FontAwesomeIcon
              icon={faImage}
              className="w-5 h-5 mr-2 bg-teal-600 rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-4xl">12{"  "}</p>
            <a href="" className="text-teal-600">View All {"->"}</a>

          </div>
        </div>
        <div className="flex flex-col bg-white px-4 border-2 rounded-xl w-full sm:w-[calc(50%-1rem)] h-[170px] justify-around py-5">
          <div className="flex justify-between items-center">
            <p>Total Novels</p>
            <FontAwesomeIcon
              icon={faImage}
              className="w-5 h-5 mr-2 bg-blue-700 rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-4xl">6</p>
            <a href="" className="text-teal-600">View All {"->"}</a>

          </div>
        </div>
      </div>
      <div className="mt-10 flex  justify-center gap-x-4 gap-y-2 p-5">
        <div className="flex flex-col bg-white px-4 border-2 rounded-xl w-full sm:w-[calc(50%-1rem)] h-[170px] justify-around py-5">
          <div className="flex justify-between items-center">
            <p>Total Services</p>
            <FontAwesomeIcon
              icon={faImage}
              className="w-5 h-5 mr-2 bg-red-400 rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-4xl">24{"  "}</p>
            <a href="" className="text-teal-600">View All {"->"}</a>
          </div>
        </div>
        <div className="flex flex-col bg-white px-4 border-2 rounded-xl w-full sm:w-[calc(50%-1rem)] h-[170px] justify-around py-5">
          <div className="flex justify-between items-center">
            <p>Total Specialities</p>
            <FontAwesomeIcon
              icon={faImage}
              className="w-5 h-5 mr-2 bg-red-900 rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-4xl">44{"  "}</p>
            <a href="" className="text-teal-600">View All {"->"}</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Charts from "../../../components/Charts";

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <div className="p-3">
          <div className="flex flex-col content-center rounded shadow-lg h-44 w-72 bg-indigo-600 hover:bg-indigo-500 p-5">
            <div className="font-bold text-xl text-yellow-300 text-center">Orders</div>
            <div className="font-bold text-2xl text-center text-white">last 30 days</div>
            <div className="flex items-center justify-center">
              <div className="rounded-full py-3 w-20 text-center bg-white text-2xl text-indigo-600 my-5">1000</div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-col content-center rounded shadow-lg h-44 w-72 bg-red-600 hover:bg-red-500 p-5">
            <div className="font-bold text-xl text-yellow-300 text-center">Orders</div>
            <div className="font-bold text-2xl text-center text-white">last 7 days</div>
            <div className="flex items-center justify-center">
              <div className="rounded-full py-3 w-20 text-center bg-white text-2xl text-red-500 my-5">145</div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-col content-center rounded shadow-lg h-44 w-72 bg-green-600 hover:bg-green-500 p-5">
            <div className="font-bold text-xl text-yellow-300 text-center">Orders</div>
            <div className="font-bold text-2xl text-center text-white">last one day</div>
            <div className="flex items-center justify-center">
              <div className="rounded-full py-3 w-20 text-center bg-white text-2xl text-green-500 my-5">34</div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex flex-col content-center rounded shadow-lg h-44 w-72 bg-pink-600 hover:bg-pink-500 p-5">
            <div className="font-bold text-xl text-yellow-300 text-center">Orders</div>
            <div className="font-bold text-2xl text-center text-white">all transition</div>
            <div className="flex items-center justify-center">
              <div className="rounded-full py-3 w-20 text-center bg-white text-2xl text-pink-500 my-5">9328</div>
            </div>
          </div>
        </div>
      </div>
      
      <Charts />
    </>
  );
};

export default DashboardPage;
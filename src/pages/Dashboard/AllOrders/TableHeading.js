import React from "react";
import Checkbox from "rc-checkbox";

const TableHeading = () => {
  return (
    <div
      className="uppercase grid grid-cols-7 gap-x-6 mt-5 py-5 text-gray-400 font-bold font-open-sans"
      
    >
      <div className="flex gap-x-3">
        <Checkbox className="ml-9" />
        <p className="">id</p>
      </div>
      <p>order date</p>
      <p>customer</p>
      <p>items</p>
      <p>delivery date</p>
      <p>price</p>
      <p>status</p>
    </div>
  );
};

export default TableHeading;

import React from "react";


const TableHeading = () => {
  return (
    <div className="uppercase grid grid-cols-12 gap-x-6 mt-5 py-5 text-gray-400 font-bold font-open-sans">
      <p className={'col-span-2'}>image</p>
      <p className={'col-span-3'}>name</p>
      <p className={'col-span-1'}>stock</p>
      <p className={'col-span-2'}>status</p>
      <p className={'col-span-1'}>price</p>
      <p className={'col-span-3 text-center'}>Action</p>
    </div>
  );
};

export default TableHeading;

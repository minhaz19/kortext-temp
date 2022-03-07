import React from "react";


const CatTableHeading = () => {
  return (
    <div className="uppercase grid grid-cols-5 gap-x-6 mt-5 py-5 text-gray-400 font-bold font-open-sans">
      <p className="flex justify-center items-center">image</p>
      <p className="flex justify-center items-center">Category name</p>
      <p className="flex justify-center items-center">Slug</p>
      <p className="flex justify-center items-center">Total Product</p>
      <p className="flex justify-center items-center">Option</p>
    </div>
  );
};

export default CatTableHeading;
import React from "react";
import "./style.css"

const SubSimple = () => {
  return (
    <div className="SubSimple-wrapper">
      <div>
        <p className="text-2xl md:text-5xl lg:mt-10 font-bold mb-5">
          Simple to set up. Impossible to mess up.
        </p>
        <p className="md:text-lg text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          voluptates soluta minus cumque non eveniet dolor aut a sint illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          temporibus suscipit.
        </p>
      </div>
      <div className="SubSimple-img-container ">
        <img src="/assets/images/Dashborad.webp" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SubSimple;

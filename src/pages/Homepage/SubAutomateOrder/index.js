import React from "react";
import "./style.css"

const SubAutomateOrder = () => {
  return (
    <div className="subAutomateOrder-wrapper">
      <div className="subAutomateOrder-img-container ">
        <img
          src="/assets/images/social_media.JPG"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div>
        <p className="text-2xl md:text-5xl lg:mt-20 font-bold mb-5">
          Automate orders from social media
        </p>
        <p className="md:text-lg text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
          voluptates soluta minus cumque non eveniet dolor aut a sint illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          temporibus suscipit molestiae pariatur ratione minus impedit et,
          officiis consectetur labore.
        </p>
      </div>
    </div>
  );
};

export default SubAutomateOrder;

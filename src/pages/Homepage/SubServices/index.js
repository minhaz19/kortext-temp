import React from "react";
import ServiceCard from "./ServiceCard";


const data = [
  {
    title: "Customizable shop",
    content:
      "Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec tempor finibus ante ac luctus.  Fusce facilisis nisi tempor finibus ante ac luctus facilisi.",
    logoBg: "rgb(141, 114, 252,0.2)",
    logo: "/assets/svgs/designing.svg",
    style: "",
  },
  {
    title: "24/7 Days Support",
    content:
      "Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec tempor finibus ante ac luctus.  Fusce facilisis nisi tempor finibus ante ac luctus facilisi.",
    logoBg: "rgb(255, 224, 20,0.2)",
    logo: "/assets/svgs/circle_icon.svg",
  },
  {
    title: "Customizable shop",
    content:
      "Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec tempor finibus ante ac luctus.  Fusce facilisis nisi tempor finibus ante ac luctus facilisi.",
    logoBg: "rgb(145, 228, 196,0.2)",
    logo: "/assets/svgs/pc_growth_icon.svg",
    style: "md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full mx-auto",
  },
];

const SubServices = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 px-5 lg:px-32 mt-10 mb-10 col">
      {data.map((item, index) => {
        return <ServiceCard key={index} logo={item.logo} title={item.title} content={item.content} logoBg={item.logoBg} style={item.style}/>;
      })}
    </div>
  );
};

export default SubServices;

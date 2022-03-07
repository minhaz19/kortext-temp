import React from 'react'
import Logo from "./Logo"

const data = [
  {
    src: "/assets/images/company_logo/1.png",
  },
  {
    src: "/assets/images/company_logo/2.png",
  },
  {
    src: "/assets/images/company_logo/3.png",
  },
  {
    src: "/assets/images/company_logo/4.png",
  },
  {
    src: "/assets/images/company_logo/7.png",
  },
  {
    src: "/assets/images/company_logo/8.png",
  },
  {
    src: "/assets/images/company_logo/5.png",
  },
  {
    src: "/assets/images/company_logo/6.png",
  },
];

const SubCompanyLogos = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-x-20 sm:gap-y-10 px-10 sm:px-24 lg:px-32">
        {
            data.map((item,index)=>{
                return <Logo key={index} image={item.src}/>
            })
        }
      </div>
    );
}

export default SubCompanyLogos

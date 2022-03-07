import React from 'react'
import "./style.css"

const SubLocalBusiness = () => {
    return (
      <div className="mt-10 sm:mt-16 lg:mt-32 flex flex-col items-center font-open-sans">
        <p className="subLocalBusiness-title">
          Kortex is made for local business
        </p>
        <p className="w-2/3 md:w-1/2 text-center text-gray-500 text-sm md:text-xl mt-5">
          Proin rhoncus, neque sed congue commodo, orci magna tristique ipsum,
          vel egestas risus augue quis justo.
        </p>
        <button className="uppercase bg-primary text-white px-5 py-2 mt-5 rounded-md">
          see example
        </button>
      </div>
    );
}

export default SubLocalBusiness

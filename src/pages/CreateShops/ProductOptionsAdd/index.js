import React from 'react';
import Option from "./Option"
import { useSelector, useDispatch } from "react-redux";
import {addOption} from "../../../store/slices/menuCreationSlice"

const ProductOptionsAdd = props => {
    const menuOptions = useSelector((state) => state.menuCreation.menuOptions);
    const dispatch = useDispatch();
    const [error, setError] = React.useState('')
    
   
    const continueProcess = e => {
      e.preventDefault();
      let err = false;
      menuOptions.forEach(item => {
        if(!item?.img || !item?.name || !item?.price){
          err = true
        }
      })
      if(err){
        setError('Please fill all input!')
      }else{
        props.nextStep();
      }


    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };


    return (
      <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-4 md:px-0">
        <div className="flex-col grid md:grid-cols-2 gap-10 lg:ml-32 mt-24">
          <div className="md:pl-4 pt-10 mt-32 md:mt-0">
            <p className="text-yellow-400 text-xs">5.1 of 10</p>
            <div className="mt-5 md:mt-0 grid items-center mb-10">
              <div>
                <div className="mb-3 md:px-0 pt-0 relative">
                  <div className="w-4 max-h-10 absolute -left-7 top-2 ml-6">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex justify-center items-center">
                      <p className="text-white">5.1</p>
                    </div>
                  </div>
                  <h3 className="py-2 ml-6">What are the different options?</h3>

                  <div className="border-l-2 border-dotted border-gray-400 ml-2 pl-3">
                    {menuOptions.map((item, index) => {
                      return <Option id={index} img={item.img} name={item.name} key={index} price={item.price}/>;
                    })}
                  </div>
                  <p className="text-xs font-bold text-red-600 pt-3 pl-12">{error}</p>
                </div>

                <div className="flex flex-row justify-end pl-8 pr-6">

                  <button
                    className="bg-gray-800 text-white text-xs
                                    py-2 rounded hover:bg-gray-600 w-24"
                    onClick={()=>dispatch(addOption())}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between md:px-5 pt-5 md:pt-0">
              <button onClick={back}
                      className="bg-gray-700 text-white text-xs
                                        py-2 rounded hover:bg-gray-600 w-24"
              >Back
              </button>
              <button
                  className="bg-button text-white text-xs
                                        py-2 rounded hover:bg-blue-600 w-24"
                  onClick={continueProcess}
              >NEXT
              </button>
            </div>
          </div>
          <div className="max-w-sm px-5 md:mx-10">
            <p className="text-yellow-400 text-sm py-2 md:py-5">Preview</p>
            <div
              className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white  mb-5 shadow-lg py-5 px-5"
            >
              <div className="flex flex-row">
                <p className="max-w-xs text-black text-md mb-2 text-center">
                  Which options of Chocolate cookies would you like?
                </p>
              </div>
              <div className="flex flex-row">
                <div className="w-28 max-h-34 rounded-md mr-4 shadow-lg">
                  <img
                    className="w-full rounded"
                    src="https://picsum.photos/200/200?random"
                    alt=""
                  />
                  <p className="text-xs py-2 px-1">Product Name</p>
                </div>
                <div className="w-28 max-h-34 rounded-md shadow-lg">
                  <img
                    className="w-full rounded"
                    src="https://picsum.photos/200/200?random"
                    alt=""
                  />
                  <p className="text-xs py-2 px-1">Product Name</p>
                </div>
              </div>
              <div className="flex flex-row mt-4">
                <div className="w-28 max-h-34 rounded-md mr-4 shadow-lg">
                  <img
                    className="w-full rounded"
                    src="https://picsum.photos/200/200?random"
                    alt=""
                  />
                  <p className="text-xs py-2 px-1">Product Name</p>
                </div>
                <div className="w-28 max-h-34 rounded-md shadow-lg">
                  <img
                    className="w-full rounded"
                    src="https://picsum.photos/200/200?random"
                    alt=""
                  />
                  <p className="text-xs py-2 px-1">Product Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductOptionsAdd

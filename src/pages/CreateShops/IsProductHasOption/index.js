import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeFormValueAction, formValueSelector } from "../../../store/slices/createNewShopFormValueSlice";


const IsProductHasOption = props => {
    const dispatch = useDispatch();
    const formValues = useSelector(formValueSelector)


    const continueProcess = e => {
        e.preventDefault();
        props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <p className="text-yellow-400 text-xs">5 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div >
                        <div className="mb-3 md:px-5 pt-0 relative">
                            <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                <div className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                    <p className="text-white">5</p>
                                </div>
                                <img className="h-28 w-4 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                            </div>
                            <h3 className="py-2 ml-2">Does your product come with different options?</h3>
                            <div className={`form-control px-3 py-2 mb-3 placeholder-blueGray-300 
                                text-blueGray-600 max-w-md relative ${formValues.hasVariants === true ? 'bg-gray-400' : 'bg-white'} rounded 
                                text-sm border border-gray-200
                                outline-none cursor-pointer sm:w-screen w-full`}
                                onClick={() => dispatch(changeFormValueAction({name: 'hasVariants', value: true}))}
                            >
                                <p>Yes</p>
                            </div>
                            <div className={`form-control px-3 py-2 placeholder-blueGray-300 
                                text-blueGray-600 max-w-md relative ${formValues.hasVariants === false ? 'bg-gray-400' : 'bg-white'} rounded 
                                text-sm border border-gray-200
                                outline-none focus:outline-none cursor-pointer focus:ring sm:w-screen w-full`}
                                 onClick={() => dispatch(changeFormValueAction({name: 'hasVariants', value: false}))}
                            >
                                <p>No</p>
                            </div>

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
                <div className="max-w-sm px-5 md:mx-10 ">
                    <p className="text-yellow-400 text-sm py-2 md:py-5" >Preview</p>
                    <div className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white  mb-5 shadow-lg py-5 px-5">
                        <div className="w-full max-h-48 ">
                            <img className="h-full w-full rounded" src='https://picsum.photos/200/200?random' alt=""/>
                        </div>
                        <div className=" pt-5 flex flex-row">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                              Order our
                            </p>
                            <p className="font-medium max-w-xs text-yellow-400 text-md md:mb-20 pl-2">
                            Chocolate cookies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IsProductHasOption

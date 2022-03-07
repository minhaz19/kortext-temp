import React from 'react'

const index = props => {
    
    const continueProcess = e => {
        e.preventDefault();
        props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const { values, handleChange } = props;
    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <p className="text-yellow-400 text-xs">8 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div >
                        <div className="mb-3 md:px-5 pt-0 relative">
                            <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                <div className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                    <p className="text-white">8</p>
                                </div>
                                <img className="h-24 w-10 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                            </div>
                            <h3 className="py-2">What are the instructions for pickup orders?</h3>
                            <p className="text-xs text-gray-500 pb-2">You can also add this later.</p>
                            <input
                                type="text" 
                                name="instructions"
                                value={values.instructions}
                                placeholder="Locations, hours etc"
                                onChange={handleChange('instructions')}
                                defaultValue={values.instructions}
                                className="form-control px-3 py-2 placeholder-blueGray-300 
                                text-blueGray-600 max-w-md relative bg-white rounded 
                                text-sm border border-gray-300
                                outline-none focus:outline-none shadow sm:w-screen w-full"
                            />
                            <div className="mt-4">
                                <button 
                                    className="bg-button text-white text-xs
                                    py-2 rounded hover:bg-blue-600 w-24" 
                                    onClick={continueProcess}
                                >NEXT</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="h-8 w-8" onClick={continueProcess}>
                            <img src="/assets/svgs/createshop/arrow-right.svg" alt="" />
                        </div>
                        <div className="h-8 w-8  mr-2" onClick={back}>
                            <img src="/assets/svgs/createshop/arrow-left.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="max-w-sm px-5 md:mx-10  pb-5">
                    <p className="text-yellow-400 text-sm py-2 md:py-5" >Preview</p>
                    <div className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white shadow-lg mb-5 py-20 px-5">
                        <div className="h-36 w-36 bg-white rounded-full
                            shadow-lg transition-colors grid justify-items-center place-items-center">
                            <img className="h-20 w-20 rounded-3xl" src='/assets/svgs/createshop/shop.svg' alt=""/>
                        </div>
                        <div className=" pt-5 flex flex-row">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                              Welcome to
                            </p>
                            <p className="font-medium max-w-xs text-yellow-400 text-md md:mb-2 pl-2">
                            Kortex Shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index

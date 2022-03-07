import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa';
import Switch from "react-switch";

const Promotions = () => {
    //switch button
    const [checked, setChecked] = useState({
        minPurchase: false,
        allowedDelivery: false,
        redemptionLimit: false,
        activateDates: false,
    });
    const switchChange = input => e => {
        setChecked({...checked, [input]: e});
      }

    //input
    const [inputData, setInputData] = useState({
        cuponCode: '',
        discount: '',
        onAppliedDiscount: ''
    });
    const handleChange = input => e => {
        setInputData({...inputData, [input]: e.target.value});
    };

    //checkbox
    const onChangeValue = input => e => {
        setInputData({...inputData, [input]: e.target.value});
      }
    
    return (
        <div className="ml-5 mt-5 h-full mb-20">
            {/* Create Promotion */}
            <h1 className="text-2xl font-medium py-5">Create Promotion</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">When a customer enters the code at checkout, the discount will be applied.</p>
            <div className="max-w-3xl sm:w-auto w-72 bg-white my-5 pb-5 shadow-md px-5">
                <div className="flex flex-row pt-5">
                    <div className="flex flex-row bg-gray-300 h-6 justify-center items-center px-3 rounded-xl">
                        <FaStar color="gray" />
                        <p className="pl-4 text-sm">Upgrade to Startup plan</p>
                    </div>
                </div>
                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/1499.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm">Cupon code</p>
                </div>
                <input
                    type="text"
                    name="cuponCode"
                    className="border-b ml-9 pt-1"
                    placeholder="avcd"
                    value={inputData.cuponCode}
                    onChange={handleChange('cuponCode')}
                />

                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/coupon.svg" alt="" className="h-4 mt-1"/>
                    <p className="pl-4 text-sm">Discount applies to</p>
                </div>
                    <div id="onAppliedDiscount" onChange={onChangeValue("onAppliedDiscount")}>
                        <div className="pt-2 pl-9 text-sm">
                            <input 
                                type="radio" 
                                value="entireOrder"
                                name="discount" 
                            /> Entire order
                        </div>
                        <div className="pt-2 pl-9 text-sm">
                            <input 
                                type="radio" 
                                value="specificProduct"
                                name="discount" 
                            /> Specific products
                        </div>
                    </div>

                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/awesome-dollar-sign.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm">Discount</p>
                </div>
                <input
                    type="text"
                    name="discount"
                    className="border-b ml-9 pt-1"
                    placeholder="$"
                    value={inputData.discount}
                    onChange={handleChange('discount')}
                />
            </div>

            {/* Requirements */}
            <h1 className="text-2xl font-medium py-5">Requirements</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">Set the requirements for this promotion.</p>
            <div className="max-w-3xl sm:w-auto w-72 bg-white my-5 pb-5 shadow-md px-5">
                <div className="flex flex-row pt-5">
                    <div className="flex flex-row bg-gray-300 h-6 justify-center items-center px-3 rounded-xl">
                        <FaStar color="gray" />
                        <p className="pl-4 text-sm">Upgrade to Startup plan</p>
                    </div>
                </div>
                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/ionic-ios-list.svg" alt="" className="h-3 pt-1"/>
                    <p className="pl-4 text-sm w-full">Minimum purchase amount</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="minPurchase"
                            onChange={switchChange("minPurchase")} 
                            checked={checked.minPurchase} 
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offColor="#e8e9ec"
                            offHandleColor="#a4a4a4"
                            onHandleColor="#e8e9e7"
                            height={12}
                            width={32}
                            handleDiameter={16}
                        />
                    </div>
                </div>

                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/awesome-truck-moving.svg" alt="" className="h-3 mt-1"/>
                    <p className="pl-4 text-sm w-full">Allowed delivery dates</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="allowedDelivery"
                            onChange={switchChange("allowedDelivery")} 
                            checked={checked.allowedDelivery} 
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offColor="#e8e9ec"
                            offHandleColor="#a4a4a4"
                            onHandleColor="#e8e9e7"
                            height={12}
                            width={32}
                            handleDiameter={16}
                        />
                    </div>
                </div>
            </div>

            {/* Limits */}
            <h1 className="text-2xl font-medium py-5">Limits</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">Set usage limits and duration for this promotion.</p>
            <div className="max-w-3xl sm:w-auto w-72 bg-white my-5 pb-5 shadow-md px-5">
                <div className="flex flex-row pt-5">
                    <div className="flex flex-row bg-gray-300 h-6 justify-center items-center px-3 rounded-xl">
                        <FaStar color="gray" />
                        <p className="pl-4 text-sm">Upgrade to Startup plan</p>
                    </div>
                </div>
                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/awesome-list-ul.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm w-full">Redemption limit</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="redemptionLimit"
                            onChange={switchChange("redemptionLimit")} 
                            checked={checked.redemptionLimit} 
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offColor="#e8e9ec"
                            offHandleColor="#a4a4a4"
                            onHandleColor="#e8e9e7"
                            height={12}
                            width={32}
                            handleDiameter={16}
                        />
                    </div>
                </div>

                <div className="flex flex-row my-4">
                    <img src="/assets/svgs/dashboard/ionic-ios-calendar.svg" alt="" className="h-3 mt-1"/>
                    <p className="pl-4 text-sm w-full">Activate dates</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="activateDates"
                            onChange={switchChange("activateDates")} 
                            checked={checked.activateDates} 
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offColor="#e8e9ec"
                            offHandleColor="#a4a4a4"
                            onHandleColor="#e8e9e7"
                            height={12}
                            width={32}
                            handleDiameter={16}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-10 pb-10">
                <button
                    className="bg-blue-600 text-white text-xs
                    py-2 mb-10 rounded hover:bg-blue-800 w-20"
                >Save
                </button>
            </div>
        </div>
    )
}

export default Promotions;

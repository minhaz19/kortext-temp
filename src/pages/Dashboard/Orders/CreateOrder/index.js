import React, {useState} from 'react'
import Switch from "react-switch";
import './style.css'
import DatePicker from "react-datepicker";
import { FaCalendar } from 'react-icons/fa';
import { BsQuestionSquare } from "react-icons/bs";
import Items from './Items';
import EmailVerifyNote from "../../../../components/EmailVerifyNote";

const CreateOrder = () => {
    //input
    const [inputData, setInputData] = useState({
        customer: '',
        phone: '',
        isPhone: false,
        email: '',
        status: '',
        deliveryDate: new Date(),
        deliveryOption: '',
        isDeliveryAddress: '',
        deliveryFeeOption: '',
        deliveryAmount: '',
        isSetPrice: false,
        discount: '',
        isDiscount: false,
        giftRecipent: '',
        giftRecipentPhone: '',
        specialRequest: '',
        isSpecialRequest: '',
    });
    const handleChange = input => e => {
        setInputData({...inputData, [input]: e.target.value});
    };
    const switchChange = input => e => {
        setInputData({...inputData, [input]: e});
    }
    const setDate = (e) => {
        setInputData({...inputData, deliveryDate: e});
    }
    //checkbox
    const onChangeValue = input => e => {
        setInputData({...inputData, [input]: e.target.value});
    }

    const [arr, setArr] = useState([{id:1}])
    const addMore = () => {
        setArr([...arr, {id: Math.random(100)}])
    }
    const removeArr = id => {
        setArr(arr.filter(item => item.id !== id));
    }

    return (
        <div className="ml-5 mt-5 h-full mb-20">
            <EmailVerifyNote/>
            {/* Create Product */}
            <h1 className="text-2xl font-medium py-5">Create Order</h1>
            <p className="text-xs">Set the order details</p>
            <hr/>
            <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto bg-white my-5 pb-5 shadow-md px-5">
                {/* Label 1*/}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-user-cog.svg" alt="" className="h-4 pt-1 w-4"/>
                    <p className="pl-4 text-sm">Customer</p>
                </div>
                {/* input */}
                <input
                    type="text"
                    name="customer"
                    className="input-general ml-9 pt-1"
                    placeholder="Enter customer name"
                    value={inputData.customer}
                    onChange={handleChange('customer')}
                />
                {/* 2 */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/metro-phone.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-5 text-sm">Phone</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="hideFromShop"
                            onChange={switchChange('isPhone')} 
                            checked={inputData.isPhone} 
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
                { inputData?.isPhone ? (
                    <div className="">
                        <input
                            type="text"
                            name="phone"
                            className="input-general ml-9 pt-1"
                            placeholder="Enter phone number"
                            value={inputData.phone}
                            onChange={handleChange('phone')}
                        />
                    </div>
                ): null}
                {/* 3 */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/material-email.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm">Email</p>
                </div>
                <div className="">
                    <input
                        type="email"
                        name="email"
                        className="input-general ml-9 pt-1"
                        placeholder="Enter email address"
                        value={inputData.price}
                        onChange={handleChange('email')}
                    />
                </div>

                {/* 4 */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/Icon_list.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm w-full">Status</p>
                </div>
                <div className="ml-7 mt-2 mb-2 text-xs" >
                    <select name="status" id="status" className="w-full" onChange={handleChange('status')}>
                        <option value="rejected">Rejected</option>
                        <option value="accepted">Accepted</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                {/* 5 inventory */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/ionic-ios-calendar.svg" alt="" className="h-4 pt-1 w-4"/>
                    <p className="pl-4 text-sm">Delivery Date</p>
                </div>
                <div className="flex flex-row">
                <DatePicker 
                    selected={inputData.deliveryDate} 
                    onChange={setDate} 
                    className="border-b border-gray-300 mt-2 mb-4 ml-8 w-1/2"
                />
                <FaCalendar 
                    color="black"
                    className=""/>
                </div>

                {/* 6 delivery option*/}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-truck-moving.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-3 text-sm w-full">Delivery Option</p>
                </div>
                <div className="ml-7 mt-2 mb-2 text-xs">
                    <select name="deliveryoption" id="deliveryoption" onChange={handleChange('deliveryoption')} className="w-full">
                        <option value="delivery">Delivery</option>
                        <option value="pickup">Pickup</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <div className="flex flex-row w-full ml-8">
                    <div className="pt-1">
                    <Switch 
                        id="isDeliveryAddress"
                        onChange={switchChange("isDeliveryAddress")} 
                        checked={inputData.isDeliveryAddress} 
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
                    <p className="pl-3">Address</p>
                </div>

                {/* Delivery fee */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-dollar-sign.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-5 text-sm">Delivery fee</p>
                </div>
                <div id="deliveryFeeOption"  >
                    <div className="pt-2 pl-9 text-sm">
                        <input 
                            type="radio" 
                            value="setprice"
                            name="deliveryFeeOption"
                            onChange={onChangeValue("deliveryFeeOption")}
                        /> Set price
                        {inputData?.deliveryFeeOption === 'setprice' ? (
                            <div className="">
                                <input
                                    type="text"
                                    name="deliveryAmount"
                                    className="input-general ml-15 pt-1"
                                    placeholder="$"
                                    value={inputData.deliveryAmount}
                                    onChange={handleChange('deliveryAmount')}
                                />
                            </div>
                        ) : null}
                    </div>
                    
                    <div className="pt-2 pl-9 text-sm">
                        <input 
                            type="radio" 
                            value="quoteafterorder"
                            name="deliveryFeeOption"
                            onChange={onChangeValue("deliveryFeeOption")}
                        /> Quote after order
                    </div>
                </div>
                <div className="ml-5">
                    <p className="pl-8 p-2 text-xs text-gray-500">You will collect the fee separately from the customer.</p>
                </div>


                {/* 7 order discount */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/coupon.svg" alt="" className="h-5 pt-1"/>
                    <p className="pl-3 text-sm w-full">Order discount</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="isDiscount"
                            onChange={switchChange("isDiscount")} 
                            checked={inputData.isDiscount} 
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
                {inputData?.isDiscount ? (
                    <input
                        type="text"
                        name="discount"
                        className="input-general ml-15 pt-1"
                        placeholder="$"
                        value={inputData.discount}
                        onChange={handleChange('discount')}
                    />
                ) : null}
                {/* Gift*/}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-gift.svg" alt="" className="h-4 pt-1 w-4"/>
                    <p className="pl-4 text-sm">Gift</p>
                </div>
                {/* input */}
                <input
                    type="text"
                    name="giftRecipent"
                    className="input-general"
                    placeholder="Recipient"
                    value={inputData.giftRecipent}
                    onChange={handleChange('giftRecipent')}
                />
                <div className="pt-2">
                    <input
                        type="text"
                        name="giftRecipentPhone"
                        className="input-general"
                        placeholder="Recipient Phone"
                        value={inputData.giftRecipentPhone}
                        onChange={handleChange('giftRecipentPhone')}
                    />
                </div>
                {/* 9 special req */}
                <div className="input-box">
                    <BsQuestionSquare className="w-8 pt-1" />
                    <p className="pl-3 text-sm w-full">Special Request</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="isSpecialRequest"
                            onChange={switchChange("isSpecialRequest")} 
                            checked={inputData.isSpecialRequest} 
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
                {inputData?.isSpecialRequest ? (
                    <input
                        type="text"
                        name="specialRequest"
                        className="input-general ml-15 pt-1"
                        placeholder="Note a special request"
                        value={inputData.specialRequest}
                        onChange={handleChange('specialRequest')}
                    />
                ) : null}
            </div>
            {/* Variants----------------------------------------------------------------------------- */}
            <h1 className="text-2xl font-medium py-5">Items</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">Add products to this order.</p>
            <hr/>
            <div className="max-w-3xl sm:w-auto bg-white md:ml-auto md:mr-5 mr-0 ml-0 my-5 shadow-md px-5 pt-5">
                {arr.map(i => (
                    <Items id={i.id} removeArr={removeArr} />
                ))}
                {/* add button */}
                <div className="py-5">
                    <button
                        className="bg-blue-600 text-white text-xs
                        py-2 rounded hover:bg-blue-800 w-full"
                        onClick={addMore}
                    >ADD MORE
                    </button>
                </div>
            </div>
            
            <div className="mb-10 pb-10 md:text-right mr-10">
                <button
                    className="bg-blue-600 text-white text-xs
                    py-2 mb-10 rounded hover:bg-blue-800 w-20"
                >Save
                </button>
            </div>
        </div>
    )
}

export default CreateOrder;

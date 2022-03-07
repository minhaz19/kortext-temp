import React from 'react';
import Switch from "react-switch";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const SubGeneral = props => {
    const {inputData, handleChange, switchChange, IncrementTime, DecrementTime, DecrementCurr} = props;
    return (
        <div>
            <h1 className="paragraph-heading">General</h1>
            <p className="text-xs">Update your store details</p>
            <div className="card-container">
                {/* store name*/}
                <div className="input-box">
                    <img src="/assets/svgs/setting/awesome-store.svg" alt="" className="h-4 pt-1 w-4"/>
                    <p className="pl-4 text-sm">Store name</p>
                </div>
                <input
                    type="text"
                    name="storename"
                    className="input-general ml-9 pt-1"
                    placeholder="website"
                    value={inputData.storename}
                    onChange={handleChange('storename')}
                />
                
                {/* link type */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/feather-link.svg" alt="" className="h-3 pt-1"/>
                    <p className="pl-4 text-sm">Link type</p>
                </div>
                <div className="">
                    <input
                        type="text"
                        name="link"
                        className="input-general ml-9 pt-1"
                        placeholder="website"
                        value={inputData.link}
                        onChange={handleChange('link')}
                    />
                </div>

                {/* timezone */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/timezone.svg" alt="" className="h-5 pt-1"/>
                    <p className="pl-4 text-sm">Timezone</p>
                </div>
                <div className="flex flex-row">
                    <input
                        type="text"
                        name="timezone"
                        className="input-general ml-4 pt-1"
                        placeholder="time"
                        value={`GMT${inputData.timezone > 0 ? ' +' : ''} ${inputData.timezone}`}
                        onChange={handleChange('timezone')}
                    />
                    <div className="-ml-4 mt-4">
                        <div className="w-4 hover:border-black" onClick={IncrementTime}>
                            <BiUpArrow  className="w-3 h-2 hover:bg-gray-300"/>
                        </div>
                        <div className="w-4 hover:border-black" onClick={DecrementTime}>
                            <BiDownArrow className="w-3 h-2 hover:bg-gray-300"/>
                        </div>
                    </div>
                </div>

                {/* currency */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-dollar-sign.svg" alt="" className="h-5 pt-1"/>
                    <p className="pl-5 text-sm">Currency</p>
                </div>
                <div className="flex flex-row">
                    <input
                        type="text"
                        name="currency"
                        className="input-general ml-4 pt-1"
                        placeholder="$40"
                        value={inputData.currency}
                        onChange={handleChange('currency')}
                    />
                    <div className="-ml-4 mt-6">
                        <div className="w-4 hover:border-black" onClick={DecrementCurr}>
                            <BiDownArrow className="w-3 h-2 hover:bg-gray-300"/>
                        </div>
                    </div>
                </div>

                {/* phone*/}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/metro-phone.svg" alt="" className="h-4 pt-1 w-4"/>
                    <p className="pl-4 text-sm">Phone</p>
                </div>
                <p className="paragraph-nonpadding">We will notify you of new orders via your browser</p>
                <input
                    type="number"
                    name="phone"
                    className="input-general ml-9 pt-1"
                    placeholder="454545454"
                    value={inputData.phone}
                    onChange={handleChange('phone')}
                />

                
                {/* browser notifications */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/awesome-bell.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Browser notifications</p>
                    <div className="switch-head">
                        <Switch 
                            id="isBrowserNotification"
                            onChange={switchChange("isBrowserNotification")} 
                            checked={inputData.isBrowserNotification} 
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
                <p className="paragraph-nonpadding">We will notify you of new orders via your browser</p>
            </div>
        </div>
    )
}

export default SubGeneral;

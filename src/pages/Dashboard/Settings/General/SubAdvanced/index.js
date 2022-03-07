import React from 'react';
import Switch from "react-switch";
import { FaStar } from 'react-icons/fa';

const SubAdvanced = props => {
    const {inputData, switchChange} = props;
    return (
        <div>
            <h1 className="paragraph-heading">Advanced</h1>
            <p className="text-xs">Additional setting for your shop</p>
            <div className="card-container">
                <div className="flex flex-row pt-5">
                    <div className="flex flex-row bg-gray-300 h-6 justify-center items-center px-3 rounded-xl">
                        <FaStar color="gray" />
                        <p className="pl-4 text-sm">Upgrade to Startup plan</p>
                    </div>
                </div>
                {/* Facebook */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/ionic-logo-facebook.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Facebook Pixel ID</p>
                    <div className="switch-head">
                        <Switch 
                            id="isFacebook"
                            onChange={switchChange("isFacebook")} 
                            checked={inputData.isFacebook} 
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
                <p className="paragraph">When a customer makes an order, you will need to manually approve their payment.</p>
                {/* Instagram */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/feather-instagram.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Instagram Shopping</p>
                    <div className="switch-head">
                        <Switch 
                            id="isInstagram"
                            onChange={switchChange("isInstagram")} 
                            checked={inputData.isInstagram} 
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
                <p className="paragraph">When a customer makes an order, you will need to manually approve their payment.</p>
                {/* Google */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/ionic-logo-google.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Google Tag Manager ID</p>
                    <div className="switch-head">
                        <Switch 
                            id="isGoogle"
                            onChange={switchChange("isGoogle")} 
                            checked={inputData.isGoogle} 
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
                <p className="paragraph">When a customer makes an order, you will need to manually approve their payment.</p>

            </div>
        </div>
    )
}

export default SubAdvanced;

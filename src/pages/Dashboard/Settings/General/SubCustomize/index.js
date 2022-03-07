import React from 'react';
import Switch from "react-switch";

const Customize = props => {
    const {inputData, handleChange, switchChange} = props;
    return (
        <div>
            <h1 className="paragraph-heading">Customize</h1>
            <p className="text-xs">Edit your order form</p>
            <div className="card-container">
                {/* Date selection  */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/awesome-calendar-day.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Date selection</p>
                    <div className="switch-head">
                        <Switch 
                            id="isDateSelection"
                            onChange={switchChange("isDateSelection")} 
                            checked={inputData.isDateSelection} 
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
                <p className="paragraph-nonpadding">Customers will order for a specific date. You can set your availability and order limits for each date.</p>

                {/* Gift recipient */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/awesome-gift1.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Gift recipient</p>
                    <div className="switch-head">
                        <Switch 
                            id="isGiftRecipient"
                            onChange={switchChange("isGiftRecipient")} 
                            checked={inputData.isGiftRecipient} 
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
                { inputData.isGiftRecipient ? (
                    <div>
                        <p className="paragraph">Customers can address their order to someone else. We will ask for the recipient's name and contact.</p>
                        <div className="switch-head2">
                            <Switch 
                                id="isGiftMessage"
                                onChange={switchChange("isGiftMessage")} 
                                checked={inputData.isGiftMessage} 
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#e8e9ec"
                                offHandleColor="#a4a4a4"
                                onHandleColor="#e8e9e7"
                                height={12} 
                                width={32}
                                handleDiameter={16}
                            />
                            <p className="pl-4 text-sm">Gift message</p>
                        </div>      
                        {inputData.isGiftMessage ? (
                            <div>
                                <p className="paragraph-bpadding">Allow customers to write a message to be included. You may add a prompt to guide them.</p>
                                <input
                                    type="text"
                                    name="unitPrice"
                                    className="input-general"
                                    placeholder="prompt (optional)"
                                    value={inputData.unitPrice}
                                    onChange={handleChange('unitPrice')}
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {/* Special requests */}
                <div className="input-box">
                    <img src="/assets/svgs/Subtraction.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Special requests</p>
                    <div className="switch-head">
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
                {inputData.isSpecialRequest ? (
                    <div>
                        <p className="paragraph">Customers can address their order to someone else. We will ask for the recipient's name and contact.</p>
                        <div className="switch-head2">
                            <Switch 
                                id="isCustomizePromt"
                                onChange={switchChange("isCustomizePromt")} 
                                checked={inputData.isCustomizePromt} 
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#e8e9ec"
                                offHandleColor="#a4a4a4"
                                onHandleColor="#e8e9e7"
                                height={12} 
                                width={32}
                                handleDiameter={16}
                            />
                            <p className="pl-4 text-sm">Customize prompt</p>
                        </div>      
                        {inputData.isCustomizePromt ? (
                            <div>
                                 <p className="paragraph-bpadding">Allow customers to write a message to be included. You may add a prompt to guide them.</p>
                                <p className="paragraph-bpadding">Type your special requests here, if any.</p>
                                <input
                                    type="text"
                                    name="customizePromt"
                                    className="input-general"
                                    placeholder="Flavors, gift message, allergies, etc."
                                    value={inputData.customizePromt}
                                    onChange={handleChange('customizePromt')}
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {/* Additional instructions */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/material-textsms.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Additional instructions</p>
                    <div className="switch-head">
                        <Switch 
                            id="isAdditionalInstructions"
                            onChange={switchChange("isAdditionalInstructions")} 
                            checked={inputData.isAdditionalInstructions} 
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
                {inputData.isAdditionalInstructions ? (
                    <div>
                        <p className="paragraph">Customers can address their order to someone else. We will ask for the recipient's name and contact.</p>
                        <input
                            type="text"
                            name="additionalInstructions"
                            className="input-general"
                            placeholder="Flavors, gift message, allergies, etc."
                            value={inputData.additionalInstructions}
                            onChange={handleChange('additionalInstructions')}
                        /> 
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Customize;

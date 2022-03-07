import React from 'react';
import Switch from "react-switch";

const SubPayments = props => {
    const {inputData, handleChange, switchChange} = props;
    return (
        <div>
            <h1 className="paragraph-heading">Payments</h1>
            <p className="text-xs">Choose how customers pay</p>
            <div className="card-container">
                {/* Credit/Debit Card */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/material-credit-card.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Credit/Debit Card</p>
                    <div className="switch-head">
                        <Switch 
                            id="isCreditCard"
                            onChange={switchChange("isCreditCard")} 
                            checked={inputData.isCreditCard} 
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
                {inputData.isCreditCard ? (
                    <div>
                        <p className="paragraph">Customers can address their order to someone else. We will ask for the recipient's name and contact.</p>
                        <div className="switch-head2">
                            <Switch 
                                id="isMinSpendReq"
                                onChange={switchChange("isMinSpendReq")} 
                                checked={inputData.isMinSpendReq} 
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#e8e9ec"
                                offHandleColor="#a4a4a4"
                                onHandleColor="#e8e9e7"
                                height={12} 
                                width={32}
                                handleDiameter={16}
                            />
                            <p className="pl-4 text-sm">Minimum spend required</p>
                        </div>      
                        {inputData.isMinSpendReq ? (
                            <div>
                                <p className="paragraph-bpadding">Allow payment with credit/debit cards only for orders over this amount, excluding delivery.</p>
                                <input
                                    type="text"
                                    name="minSpend"
                                    className="input-general ml-4 pt-1"
                                    placeholder="prompt (optional)"
                                    value={inputData.minSpend}
                                    onChange={handleChange('minSpend')}
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {/* Cash */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-dollar-sign.svg" alt="" className="h-5 pt-1 pr-2"/>
                    <p className="heading-title">Cash</p>
                    <div className="switch-head">
                        <Switch 
                            id="isCash"
                            onChange={switchChange("isCash")} 
                            checked={inputData.isCash} 
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
                {inputData.isCash ? (
                    <div>
                        <p className="paragraph">Collect cash from customers upon delivery or pickup.</p>
                        <p className="paragraph">Payment instructions.</p>
                        <input
                            type="text"
                            name="cashAmount"
                            className="input-general ml-4 pt-1"
                            placeholder="We will collect cash on delivery or pickup."
                            value={inputData.cashAmount}
                            onChange={handleChange('cashAmount')}
                        />
                    </div>
                ) : null}

                {/* Bank Transfer */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/bank.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Bank Transfer</p>
                    <div className="switch-head">
                        <Switch 
                            id="isBankTransfer"
                            onChange={switchChange("isBankTransfer")} 
                            checked={inputData.isBankTransfer} 
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
                {inputData.isBankTransfer ? (
                    <div>
                        <p className="paragraph">Receive payment via your bank account.</p>
                        <input
                            type="text"
                            name="accountName"
                            className="input-general"
                            placeholder="Account holder name"
                            value={inputData.accountName}
                            onChange={handleChange('accountName')}
                        />
                        <input
                            type="text"
                            name="bankName"
                            className="input-general ml-4 pt-1"
                            placeholder="Bank"
                            value={inputData.bankName}
                            onChange={handleChange('bankName')}
                        />
                        <input
                            type="text"
                            name="branchName"
                            className="input-general ml-4 pt-1"
                            placeholder="Branch"
                            value={inputData.branchName}
                            onChange={handleChange('branchName')}
                        />
                        <input
                            type="text"
                            name="accountNumber"
                            className="input-general ml-4 pt-1"
                            placeholder="Account number"
                            value={inputData.accountNumber}
                            onChange={handleChange('accountNumber')}
                        />
                        <p className="pl-8 pt-4 text-xs text-gray-600">Payment instructions.</p>
                        <input
                            type="text"
                            name="paymentInstruction"
                            className="input-general ml-4 pt-1"
                            placeholder="We will collect cash on delivery or pickup."
                            value={inputData.paymentInstruction}
                            onChange={handleChange('paymentInstruction')}
                        />
                    </div>
                ) : null}

                {/* Custom Payment */}
                <div className="input-box">
                    <img src="/assets/svgs/setting/awesome-hand-paper.svg" alt="" className="h-5 pt-1 w-4"/>
                    <p className="heading-title">Custom Payment</p>
                    <div className="switch-head">
                        <Switch 
                            id="isCustomPayment"
                            onChange={switchChange("isCustomPayment")} 
                            checked={inputData.isCustomPayment} 
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
                {inputData.isCustomPayment ? (
                    <div>
                        <p className="paragraph">When a customer makes an order, you will need to manually approve their payment.</p>
                        <input
                            type="text"
                            name="paymentName"
                            className="input-general"
                            placeholder="Payment name"
                            value={inputData.paymentName}
                            onChange={handleChange('paymentName')}
                        />
                        <input
                            type="text"
                            name="customInstruction"
                            className="input-general ml-4 pt-1"
                            placeholder="Payment instructions"
                            value={inputData.customInstruction}
                            onChange={handleChange('customInstruction')}
                        />
                    </div>
                ) : null}
                <div className="py-5">
                    <button
                        className="bg-blue-600 text-white text-xs
                        py-2 rounded hover:bg-blue-800 w-full"
                    >ADD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubPayments;

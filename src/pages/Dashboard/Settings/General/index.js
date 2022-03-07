import React, {useState} from 'react'
import './style.css'
import SubCustomize from './SubCustomize';
import SubPayments from './SubPayments';
import SubAdvanced from './SubAdvanced';
import SubGeneral from './SubGeneral';
import SubEarnings from './SubEarnings';

const General = () => {
    const [inputData, setInputData] = useState({
        //genral
        storename: '',
        link: '',
        timezone: 0,
        currency: '',
        phone: '',
        isBrowserNotification: false,
        //customize
        isDateSelection: false,
        isGiftRecipient: false,
        isGiftMessage: false,
        isSpecialRequest: false,
        isCustomizePromt: false,
        customizePromt: '',
        isAdditionalInstructions: false,
        additionalInstructions: '',
        //paymentdata
        isCreditCard: false,
        isMinSpendReq: false,
        minSpend: '',
        isCash: false,
        cashAmount: '',
        isBankTransfer: false,
        accountName: '',
        bankName: '',
        branchName: '',
        accountNumber: '',
        paymentInstruction: '',
        isCustomPayment: '',
        paymentName: '',
        customInstruction: '',
        //earnings
        paymentMethod: '',
        //advanced
        isFacebook: false,
        isInstagram: false,
        isGoogle: false,

    });
    const handleChange = input => e => {
        setInputData({...inputData, [input]: e.target.value});
    };
    const switchChange = input => e => {
        setInputData({...inputData, [input]: e});
    }

    const DecrementCurr = () => {
        const {timezone} = inputData;
        const num = -13;
        setInputData({
            ...inputData,
            timezone: timezone === parseFloat(num) ? 0 : timezone - 1
        });
    }
    const IncrementTime = () => {
        const {timezone} = inputData;
        setInputData({
            ...inputData,
            timezone: timezone >= 12 ? 0 : timezone + 1
        });
    }

    const DecrementTime = () => {
        const {timezone} = inputData;
        setInputData({
            ...inputData,
            timezone: timezone - 1
        });
    }
    
    return (
        <div className="ml-5 my-5 pb-5">
            <SubGeneral 
                handleChange={handleChange}
                inputData={inputData}
                switchChange={switchChange}
                IncrementTime={IncrementTime}
                DecrementTime={DecrementTime}
                DecrementCurr={DecrementCurr}
            />
            {/* Customize */}
            <SubCustomize 
                handleChange={handleChange}
                inputData={inputData}
                switchChange={switchChange}
            />
            {/* Payments */}
            <SubPayments 
                handleChange={handleChange}
                inputData={inputData}
                switchChange={switchChange}
            />
            {/* Earnings */}
            <SubEarnings 
                handleChange={handleChange}
            />
            {/* Advanced */}
            <SubAdvanced 
                inputData={inputData}
                switchChange={switchChange}
            />
            <div className="my-4">
                <button
                    className="bg-button text-white text-xs
                    py-2 rounded hover:bg-blue-600 w-24"
                >SAVE
                </button>
            </div>
        </div>
    )
}

export default General

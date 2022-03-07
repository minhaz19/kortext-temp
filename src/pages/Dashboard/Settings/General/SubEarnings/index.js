import React from 'react';

const SubEarnings = props => {
    const {handleChange} = props;
    return (
        <div>
            <h1 className="paragraph-heading">Earnings</h1>
            <p className="text-xs">Set the order details</p>
            <div className="card-container">
            {/* Delivery fee */}
                <div className="input-box">
                    <img src="/assets/svgs/dashboard/awesome-dollar-sign.svg" alt="" className="h-5 pt-1"/>
                    <p className="pl-6 text-sm">Payment method</p>
                </div>
                <p className="pl-8 p-2 text-xs text-gray-500">Payments made using credit/debit card will be paid out to you within 2 business days.</p>
                <div id="paymentMethod"  >
                    <div className="radio-container">
                        <input 
                            type="radio" 
                            value="setprice"
                            name="paymentMethod"
                            onChange={handleChange("paymentMethod")}
                        /> Paypal
                    </div>
                    
                    <div className="radio-container">
                        <input 
                            type="radio" 
                            value="quoteafterorder"
                            name="paymentMethod"
                            onChange={handleChange("paymentMethod")}
                        /> Stripe
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubEarnings;

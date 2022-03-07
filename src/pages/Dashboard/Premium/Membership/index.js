import React, {useState, useEffect} from 'react'
import SubPayAsYouGoCom from '../../../../components/LevelCard/SubPayAsyouGoCom';
import {RangeStepInput} from 'react-range-step-input';

const PayAsYouGo = () => {
    const [state, setState] = useState(100);
    const arr = 
    [{id:1, title: 'Buy Us A Coffee', details: "Chose a unique link for your shop", price: 0,}, 
    {id:2, title: 'Buy Us A Coffee', details: "Add your products, delivery & payment methods.", price: 25}, 
    {id:3, title: 'Buy Us A Coffee', details: "Share your URL on your social media and start receiving orders.", price: 80}];
    const [data, setData] = useState(arr);
    const onChange = (e) => {
        const newVal = e.target.value;
        setState(newVal);
    }
    useEffect(() => {
        const res = arr.filter(item => item.price < state);
        setData(res);
        //eslint-disable-next-line
    }, [state])
    return (
        <div>
            <div className="grid md:justify-items-center place-items-center p-4 text-center">
                <h1 className="text-3xl py-5">Pay As You Grow</h1>
                <h1 className="text-xs pb-5">Whats your sale per month?</h1>
                <RangeStepInput
                    min={0} max={100}
                    value={state.value} step={1}
                    onChange={onChange}
                />
                <h1 className="text-xs py-5">We Offer Simple Pricing Plan</h1>
                <div className="flex items-center px-4">
                    <div className="flex flex-row flex-wrap gap-4 mx-auto justify-center place-items-center">
                        {data.map(item => (
                            <SubPayAsYouGoCom key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
                <p className="py-10">Want a custom domain?</p>
            </div>
        </div>
    )
}

export default PayAsYouGo

import React, {useState} from 'react'
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import Switch from "react-switch";

const Items = props => {
    const [perItems, setPerItems] = useState({
        itemTitle: '',
        unitPrice: 0,
        quantity: 0,
        discount: 0,
        isDiscount: false,
    })
    const handleChange = input => e => {
        setPerItems({...perItems, [input]: e.target.value});
    };

    const switchChangeItems = input => e => {
        setPerItems({...perItems, [input]: e});
    }

    const itemsChange = input => e => {
        setPerItems({...perItems, [input]: e.target.value});
    };

    const Increment = () => {
        // const {unitPrice} = perItems;
        // setPerItems({
        //     ...perItems,
        //     unitPrice: unitPrice + 1
        // });
    }

    const Decrement= () => {
    }

    const items = [
        {id: 1, name:'kacchibiriyani', value: 'Kacchi Biriyani'},
        {id: 2, name:'nanna', value: 'Nanna Biriyani'},
        {id: 1, name:'pizza', value: 'Pizza'},
        {id: 2, name:'burger', value: 'Burger'}
    ]

    const { id, removeArr } = props;

    return (
        <div>
            <div className="border p-5 border-gray-400 rounded mt-5">
                    {/* 1 varient */}
                    <div className="flex flex-row">
                        <p className="pl-4 text-sm w-full">Variant 1</p>
                    </div>
                    <div className="ml-7 mt-2 mb-2 text-xs border-b w-9/12 sm:w-96">
                        <select name="deliveryoption" id="deliveryoption" onChange={handleChange('deliveryoption')} className="w-full">
                            {items.map(item => (
                                <option value={item.name}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                    {/* 2 price */}
                    <div className="flex flex-row mt-4">
                        <p className="pl-4 text-sm w-full">Price</p>
                    </div>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            name="unitPrice"
                            className="input-general ml-4 pt-1"
                            placeholder="$40"
                            value={perItems.unitPrice}
                            onChange={itemsChange('unitPrice')}
                        />
                        <div className="-ml-4 mt-4">
                            <div className="w-4 hover:border-black" onClick={Increment}>
                                <BiUpArrow  className="w-3 h-2 hover:bg-gray-300"/>
                            </div>
                            <div className="w-4 hover:border-black" onClick={Decrement}>
                                <BiDownArrow className="w-3 h-2 hover:bg-gray-300"/>
                            </div>
                        </div>
                    </div>
                    
                    {/* 3 quantity*/}
                    <div className="flex flex-row mt-4">
                        <p className="pl-4 text-sm w-full">Quantity</p>
                    </div>
                    <div className="flex flex-row">
                        <input
                            type="text"
                            name="unitPrice"
                            className="input-general ml-4 pt-1"
                            placeholder="quantity"
                            value={perItems.unitPrice}
                            onChange={itemsChange('unitPrice')}
                        />
                        <div className="-ml-4 mt-4">
                            <div className="w-4 hover:border-black" onClick={Increment('unitPrice')}>
                                <BiUpArrow  className="w-3 h-2 hover:bg-gray-300"/>
                            </div>
                            <div className="w-4 hover:border-black" onClick={Decrement}>
                                <BiDownArrow className="w-3 h-2 hover:bg-gray-300"/>
                            </div>
                        </div>
                    </div>

                    {/* 4 discount*/}
                    <div className="flex flex-row mt-4">
                        <p className="pl-4 text-sm w-full">Discount</p>
                        <div className="grid justify-end w-full">
                            <Switch 
                                id="isDiscount"
                                onChange={switchChangeItems("isDiscount")} 
                                checked={perItems.isDiscount} 
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
                    {perItems.isDiscount ? (
                        <div className="flex flex-row">
                            <input
                                type="text"
                                name="unitPrice"
                                className="input-general ml-4 pt-1"
                                placeholder="$40"
                                value={perItems.unitPrice}
                                onChange={itemsChange('unitPrice')}
                            />
                            <div className="-ml-4">
                                <div className="w-4 hover:border-black" onClick={Increment('unitPrice')}>
                                    <BiUpArrow  className="w-3 h-2 hover:bg-gray-300"/>
                                </div>
                                <div className="w-4 hover:border-black" onClick={Decrement}>
                                    <BiDownArrow className="w-3 h-2 hover:bg-gray-300"/>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    
                    {/* 5 delete*/}
                    <div className="input-box" onClick={() => removeArr(id)}>
                        <img src="/assets/svgs/dashboard/material-delete.svg" alt="" className="h-4 pt-1"/>
                        <p className="pl-4 text-sm">REMOVE</p>
                    </div>
                </div>
        </div>
    )
}

export default Items

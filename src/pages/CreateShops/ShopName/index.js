import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";

const ShopName = props => {
    const formValues = useSelector(formValueSelector)
    const dispatch = useDispatch();

    const [errors, setErrors] = React.useState({name: ''})

    const continueProcess = e => {
        e.preventDefault();
        if(!formValues?.shopName){
          return setErrors({...errors, name: "Shop Name is required!"})
        }else if(formValues?.shopName.length < 3 || formValues?.shopName.length > 24){
            return setErrors({...errors, name: 'Only 3 to 25 character allow!'})
        }else{
            return props.nextStep()
        }

    };

    const changeName = e => {
        if(e.target.value.length < 3 || e.target.value.length > 24){
            setErrors({...errors, name: 'Only 3 to 25 character allow!'})
        }else{
            setErrors({...errors, name: ''})
        }
        dispatch(changeFormValueAction({name: 'shopName',  value: e.target.value}))
    }

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="grid md:grid-cols-2 md:gap-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <p className="text-yellow-400 text-xs">1 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div>
                            <div className="mb-3 md:px-5 pt-0 relative">
                                <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                    <div
                                        className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                        <p className="text-white">1</p>
                                    </div>
                                    <img className="h-24 w-10 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                                </div>
                                <h3 className="py-2 ml-2">What is the name of the shop?</h3>
                                <input
                                    type="text"
                                    name="name"
                                    value={formValues?.shopName || ''}
                                    onChange={changeName}
                                    placeholder="Kortex Shop"
                                    className="form-control px-3 py-2 placeholder-blueGray-300 
                                    text-blueGray-600 max-w-md relative bg-white rounded 
                                    text-sm border border-gray-300
                                    outline-none focus:outline-none shadow sm:w-screen w-full"
                                />
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.name}</p>

                            </div>
                            
                        </div>
                    </div>
                    <div className="flex justify-between md:px-5 pt-5 md:pt-0">
                        <button
                            className="bg-button text-white opacity-50 text-xs
                                        py-2 rounded hover:bg-blue-600 w-24"
                        >Back
                        </button>
                        <button
                            className="bg-button text-white text-xs
                                        py-2 rounded hover:bg-blue-600 w-24"
                            onClick={continueProcess}
                        >NEXT
                        </button>
                    </div>
                </div>
                <div className="max-w-sm px-5 md:mx-10  pb-5">
                    <p className="text-yellow-400 text-sm py-2 md:py-5">Preview</p>
                    <div className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white shadow-lg py-8 md:py-20 px-5">
                        <div className="h-36 w-36 bg-white rounded-full
                            shadow-lg transition-colors grid justify-items-center place-items-center">
                            <img className="h-20 w-20 rounded-3xl" src='/assets/svgs/createshop/shop.svg' alt="shop"/>
                        </div>
                        <div className=" pt-5 flex flex-row">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                                Welcome to
                            </p>
                            <p className="font-medium max-w-xs text-yellow-400 text-md mb-2 pl-2">
                                Kortex Shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopName

import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";

const ProductName = props => {
    const formValues = useSelector(formValueSelector)
    const dispatch = useDispatch();
    const [errors, setErrors] = React.useState({name: ''})

    const continueProcess = e => {
        e.preventDefault();
        if(!formValues?.productName){
            return setErrors({...errors, name: "Product Name is required!"})
        }else if(formValues?.productName.length < 3 || formValues?.productName.length > 24){
            return setErrors({...errors, name: 'Only 3 to 25 character allow!'})
        }else{
            return props.nextStep()
        }
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };
    const changeName = e => {
        dispatch(changeFormValueAction({name: 'productName', value: e.target.value}))
        if(e.target.value < 4 || e.target.value > 15){
            setErrors({...errors, name: "Only 4 to 15 character allow!"})
        }else{
            setErrors({...errors, name: ''})
        }
    }

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="pl-4 pt-10 md:mt-0 mt-32">
                    <p className="text-yellow-400 text-xs">2 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div >
                        <div className="mb-3 md:px-5 pt-0 relative">
                            <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                <div className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                    <p className="text-white">2</p>
                                </div>
                                <img className="h-28 w-4 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                            </div>
                            <h3 className="py-2 ml-1">What are you selling?</h3>
                            <p className="text-xs text-gray-500 pb-2">Enter a product name.</p>
                            <input
                                type="text" 
                                name="productName"
                                value={formValues?.productName || ''}
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
                        <button onClick={back}
                            className="bg-gray-700 text-white text-xs
                                        py-2 rounded hover:bg-gray-600 w-24"
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
                <div className="max-w-sm px-5 md:mx-10 ">
                    <p className="text-yellow-400 text-sm py-2 md:py-5" >Preview</p>
                    <div className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white mb-5 shadow-lg py-5 px-5">
                        <div className="w-full max-h-48 ">
                            <img className="h-full w-full rounded" src='https://picsum.photos/200/200?random' alt=""/>
                        </div>
                        <div className=" pt-5 flex flex-row">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                              Order our
                            </p>
                            <p className="font-medium max-w-xs text-yellow-400 text-md md:mb-20 pl-2">
                            Chocolate cookies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductName

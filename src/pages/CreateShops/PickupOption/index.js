import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";

const PickupOption = props => {
    const dispatch = useDispatch();
    const formValues = useSelector(formValueSelector)

    const [errors, setErrors] = React.useState({
        city: '',
        fee: '',
        instruction: ''
    })


    const continueProcess = e => {
        e.preventDefault();
        if(errors.city || errors.fee || errors.instruction){
            return
        }
        if(!formValues.pickupOption?.city || !formValues.pickupOption?.fee || !formValues.pickupOption?.instruction){
            !formValues.pickupOption?.city && setErrors({...errors, city: 'City is required!'})
            !formValues.pickupOption?.fee && setErrors({...errors, fee: 'Price is required!'})
            !formValues.pickupOption?.instruction && setErrors({...errors, instruction: 'Instruction is required!'})

            return
        }



        props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const deliveryCityNameChange = e => {
        const value = e.target.value;
        if(value.length < 3 || value.length > 20){
            setErrors({...errors, city: 'Only 3 to 20 character allow!'})
        }else{
            setErrors({...errors, city: ''})
        }

        dispatch(changeFormValueAction({name: 'pickupOption', value: {...formValues.pickupOption, city: value}}))
    }

    const deliveryFeeChange = e => {
        const value = parseInt(e.target.value);
        if(value < 1){
            setErrors({...errors, fee: 'Minimum value is 1'})
        }else{
            setErrors({...errors, fee: ''})
        }

        dispatch(changeFormValueAction({name: 'pickupOption', value: {...formValues.pickupOption, fee: value}}))
    }

    const deliveryInstructionChange = e => {
        const value = e.target.value;
        if(value.length < 5 || value.length > 50){
            setErrors({...errors, instruction: 'Only 5 to 50 character allow!'})
        }else{
            setErrors({...errors, instruction: ''})
        }

        dispatch(changeFormValueAction({name: 'pickupOption', value: {...formValues.pickupOption, instruction: value}}))
    }

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <p className="text-yellow-400 text-xs">6.2 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div >
                            <div className="mb-3 md:px-5 pt-0 relative">
                                <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                        <p className="text-white text-xs">6.2</p>
                                    </div>
                                    <img className="h-28 w-4 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                                </div>
                                <h3 className="py-2 text-lg font-medium text-center">Add a Pickup option</h3>
                                <h3 className="py-2">City Name</h3>
                                <input
                                    type="text"
                                    value={formValues.pickupOption?.city || ''}
                                    onChange={deliveryCityNameChange}
                                    name="address"
                                    placeholder="Enter city name"
                                    className="form-control px-3 py-2 placeholder-blueGray-300
                                text-blueGray-600 max-w-md relative bg-white rounded
                                text-sm border border-gray-300
                                outline-none focus:outline-none shadow sm:w-screen w-full"
                                />
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.city}</p>

                                <h3 className="py-2">Delivery Fee</h3>
                                <input
                                    type="number"
                                    value={formValues?.pickupOption?.fee || ''}
                                    name="price"
                                    onChange={deliveryFeeChange}
                                    placeholder="ex: 17$"
                                    className="form-control px-3 py-2 placeholder-blueGray-300
                                text-blueGray-600 max-w-md relative bg-white rounded
                                text-sm border border-gray-300
                                outline-none focus:outline-none shadow sm:w-screen w-full"
                                />
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.fee}</p>

                                <h3 className="py-2">Instruction</h3>
                                <input
                                    type="text"
                                    name="instruction"
                                    value={formValues.pickupOption?.instruction || ''}
                                    onChange={deliveryInstructionChange}
                                    placeholder="ex: Delivery only inside this city"
                                    className="form-control px-3 py-2 placeholder-blueGray-300
                                text-blueGray-600 max-w-md relative bg-white rounded
                                text-sm border border-gray-300
                                outline-none focus:outline-none shadow sm:w-screen w-full"
                                />
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.instruction}</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between md:px-5 pt-5 md:pt-5">
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

export default PickupOption

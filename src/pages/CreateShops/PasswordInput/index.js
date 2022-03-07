import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";
import postNewUserShopService from '../../../services/shop/postNewUserShopService';
import { selectMenuCreationState } from '../../../store/slices/menuCreationSlice';

const PasswordInput = props => {

    const formValues = useSelector(formValueSelector)
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch();
    const [errors, setErrors] = React.useState({password: ''})
    const menuCreationState = useSelector(selectMenuCreationState);
    const continueProcess = e => {
        setLoading(true)
        e.preventDefault();
        if (!formValues?.password) {
            return setErrors({...errors, password: "Password is required!"})
        }
        postNewUserShopService(formValues, menuCreationState).then((res) => {
            setLoading(false)
            return props.nextStep();
        }).catch((err) => {
            setLoading(false)
            props.startOver()

        });
        
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const changePassword = e => {
        dispatch(changeFormValueAction({name: 'password', value: e.target.value}))

        if(e.target.value?.length < 8){
            setErrors({...errors, password: "Minimum 8 character allow!"})
        }else{
            setErrors({...errors, password: ''})
        }
    }

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <p className="text-yellow-400 text-xs">9 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div >
                            <div className="mb-3 md:px-6 pt-0 relative">
                                <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex justify-center items-center">
                                        <p className="text-white">9</p>
                                    </div>
                                    <img className="h-24 w-10 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                                </div>
                                <h3 className="py-2 ml-1">What is your password?</h3>
                                <input
                                    type="password"
                                    name="password"
                                    value={formValues?.password || ''}
                                    onChange={changePassword}
                                    placeholder={'Password'}
                                    className="form-control px-3 py-2 placeholder-blueGray-300
                                text-blueGray-600 max-w-md relative bg-white rounded
                                text-sm border border-gray-300
                                outline-none focus:outline-none shadow sm:w-screen w-full"
                                />
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.password}</p>
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
                            className="flex justify-center items-center bg-button text-white text-xs
                                        py-2 rounded hover:bg-blue-600 w-24"
                            onClick={continueProcess}
                        >
                            {
                                loading ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : ''
                            }
                            NEXT
                        </button>
                    </div>
                </div>
                <div className="max-w-sm px-5 md:mx-10  pb-5">
                    <p className="text-yellow-400 text-sm py-2 md:py-5" >Preview</p>
                    <div className="rounded-xl
                        overflow-hidden grid justify-items-center bg-white mb-5 shadow-lg py-20 px-5">
                        <div className="h-36 w-36 bg-white rounded-full
                            shadow-lg transition-colors grid justify-items-center place-items-center">
                            <img className="h-20 w-20 rounded-3xl" src='/assets/svgs/createshop/shop.svg' alt=""/>
                        </div>
                        <div className=" pt-5 flex flex-row">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                                Welcome to
                            </p>
                            <p className="font-medium max-w-xs text-yellow-400 text-md md:mb-2 pl-2">
                                Kortex Shop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordInput

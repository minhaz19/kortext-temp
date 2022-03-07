import React, {useState} from 'react';
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {useSelector, useDispatch} from "react-redux";
import {clearOptions} from "../../../store/slices/menuCreationSlice";

import ShopName from '../ShopName';
import ProductName from '../ProductName';
import ProductImage from '../ProductImage';
import ShopReady from '../ShopReady';
import ProductPrice from '../ProductPrice';
import IsProductHasOption from '../IsProductHasOption';
import ProductOptionsAdd from "../ProductOptionsAdd"
import FulfilmentType from '../FulfilmentType';
import DeliveryOption from "../DeliveryOption";
import PickupOption from "../PickupOption";
import ShopLink from "../ShopLink";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";

const Steps = () => {
    const dispatch = useDispatch();
    const formValues = useSelector(formValueSelector)
    const [state, setState] = useState({
        step: 1
    })


    // Proceed to next step
    const nextStep = (step) => {
        setState({
            step: step
        });
    };

    // Go back to prev step
    const prevStep = (step) => {
        setState({
            step: step
        });
    };


    function stepper(step) {
        switch (step) {
            case 1:
                return (
                    <ShopName
                        nextStep={() => {
                            formValues?.shopName && nextStep(2)

                        }}
                    />
                );
            case 2:
                return (
                    <ProductName
                        nextStep={() => {
                            formValues?.shopName && nextStep(3)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'productName', value: ''}))
                            prevStep(1)
                        }}
                    />
                );
            case 3:
                return (
                    <ProductImage
                        nextStep={() => {
                            formValues?.productImage && nextStep(4)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'productImage', value: ''}))
                            prevStep(2)
                        }}
                    />
                );
            case 4:
                return (
                    <ProductPrice
                        nextStep={() => {
                            formValues?.productPrice && nextStep(5)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({'name': 'productPrice', value: ''}))
                            prevStep(3)
                        }}
                    />
                );
            case 5:
                return (
                    <IsProductHasOption
                        nextStep={() => {
                            formValues?.hasVariants ? nextStep(6) : nextStep(7)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'hasVariants', value: false}))
                            prevStep(4)
                        }}
                    />
                );
            case 6:
                return (
                    <ProductOptionsAdd
                        nextStep={() => {
                            nextStep(7)
                        }}
                        prevStep={() => {
                            dispatch(clearOptions())
                            prevStep(5)
                        }}
                    />
                );
            case 7:
                return (
                    <FulfilmentType
                        nextStep={() => {
                            if (formValues.fulfilmentType === 0 || formValues.fulfilmentType === 2) {
                                nextStep(8)
                            } else {
                                nextStep(9)
                            }
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'fulfilmentType', value: 0}))

                            formValues?.hasVariants ? prevStep(6) : prevStep(5)

                        }}
                    />
                );
            case 8:
                return (
                    <DeliveryOption
                        nextStep={() => {

                            nextStep(formValues.fulfilmentType === 2 ? 9 : 10)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'deliveryOption', value: {}}))
                            prevStep(7)
                        }}
                    />
                )
            case 9:
                return (
                    <PickupOption
                        nextStep={() => {
                            nextStep( 10)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'pickupOption', value: {}}))
                            prevStep(formValues.fulfilmentType === 1 ? 8 : 8)
                        }}
                    />
                )
            case 10:
                return (
                    <ShopLink
                        nextStep={() => {
                            nextStep(11)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'slug', value: ''}))
                            prevStep(formValues.fulfilmentType === 0 ? 8 : 9)
                        }}
                    />
                )
            case 11:
                return (
                    <EmailInput
                        nextStep={() => {
                            nextStep(12)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'email', value: ''}))
                            prevStep(10)
                        }}

                    />
                )
            case 12:
                return (
                    <PasswordInput
                        nextStep={() => {
                            nextStep(13)
                        }}
                        prevStep={() => {
                            dispatch(changeFormValueAction({name: 'password', value: ''}))
                            prevStep(11)
                        }}
                        startOver={() => {
                            nextStep(1)
                        }}
                    />
                )
            case 13:
                return (
                    <ShopReady/>
                )
            default:
                console.log("This is a multi-step form built with React.");
        }
    }

    return (
        <div className="w-screen overflow-hidden">


            <SwitchTransition
                mode={'out-in'}
            >
                <CSSTransition
                    key={state.step}
                    classNames={'page'}
                    timeout={300}
                >


                    <div>
                        {
                            stepper(state.step)
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )


}


export default Steps;

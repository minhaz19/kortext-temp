import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {formValueSelector, changeFormValueAction} from "../../../store/slices/createNewShopFormValueSlice";

const ProductImage = props => {
    const dispatch = useDispatch();
    const formValues = useSelector(formValueSelector);

    const [errors, setErrors] = React.useState({image: ''})

    const continueProcess = e => {
        e.preventDefault();
        if(!formValues?.productImage){
            return setErrors({...errors, image: "Product Image is required!"})
        }else{
            return props.nextStep()
        }
    };


    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const dndContainer = React.useRef(null)
    const inputElem = React.useRef(null)


    const dragEnter = () => {
        dndContainer.current.classList.add('bg-gray-500')
        dndContainer.current.classList.add('shadow-inner')
        dndContainer.current.classList.add('border-2')
    }

    const dragEnd = () => {
        dndContainer.current.classList.remove('shadow-inner')
        dndContainer.current.classList.remove('bg-gray-500')
        dndContainer.current.classList.remove('border-2')
    }

    const uploadImage = e => {
        if (e.target.files[0]) {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                dispatch(changeFormValueAction({name: 'productImage', value: fileReader.result}));

            }

            fileReader.readAsDataURL(e.target.files[0]);
            setErrors({image: ''})

        }

    }


    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="flex-col grid md:grid-cols-2 gap-10">
                <div className="ml-2 pt-10 mt-32 md:mt-0 relative">

                    <p className="text-yellow-400 text-xs">3 of 10</p>
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div>
                            <div className="mb-3 md:px-5 pt-0 relative">
                                <div className="w-4 max-h-10 absolute md:-left-0 -left-7 top-2 ">
                                    <div
                                        className="w-5 h-5 bg-yellow-400 rounded-full flex justify-center items-center">
                                        <p className="text-white">3</p>
                                    </div>
                                    <img className="h-48 w-4 rounded" src='/assets/svgs/createshop/line.svg' alt=""/>
                                </div>
                                <h3 className="py-2 ml-1">Add an image for your product</h3>

                                <div ref={dndContainer} onDrop={dragEnd} onDragEnter={dragEnter} onDragLeave={dragEnd}
                                     className="rounded-xl w-full
                                    overflow-hidden cursor-pointer relative grid justify-items-center bg-white shadow-lg py-3 px-5">
                                    <input ref={inputElem} onChange={uploadImage} type="file"
                                           accept={'image/png, image/jpg, image/jpeg, image/svg, image/webp'}
                                           className={'w-full cursor-pointer h-full absolute opacity-0 -top-0 -left-0 z-10'}/>
                                    {
                                        formValues?.productImage ? (
                                            <>
                                                <button onClick={() => inputElem.current.click()}
                                                        className="bg-gray-700 focus:outline-none px-3 py-2 font-sans-pro text-white hover:opacity-100 opacity-70 absolute transform top-4 right-4 rounded z-30">Change
                                                </button>

                                                <img src={formValues?.productImage} alt="N"
                                                     className={'w-56 h-32 object-contain object-center'}/>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-full max-h-10 ">
                                                    <img className="h-full w-full rounded"
                                                         src='/assets/svgs/createshop/cloud-upload.svg' alt=""/>
                                                </div>
                                                <div className=" pt-3 text-center">
                                                    <p className="max-w-xl text-gray-400 text-xs">
                                                        Drag and drop here
                                                    </p>
                                                    <p className="max-w-xs text-gray-400 text-xs">
                                                        or
                                                    </p>
                                                    <div className="text-center">
                                                        <p className="font-medium max-w-xl text-blue-300 text-sm">
                                                            Browse
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }


                                </div>
                                <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.image}</p>
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
                <div className="w-screen-lg md:w-96 px-5 md:mx-10 ">
                    <p className="text-yellow-400 text-sm py-2 md:py-5">Preview</p>
                    <div className="rounded-xl
                        overflow-hidden grid justify-items-center mb-5 bg-white shadow-lg py-5 px-5">
                        <div className="w-full md:w-72 max-h-48 ">
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

export default ProductImage

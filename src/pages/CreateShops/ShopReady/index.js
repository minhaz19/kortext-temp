import React,{useRef,useState, useEffect} from 'react'

const ShopReady = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const [alert, setAlert] = useState(true);
    const textAreaRef = useRef(null);
    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
        setAlert(true);
      };

      useEffect(() => {
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }, [alert]);

    return (
        <div className="md:flex justify-center items-center min-h-screen bg-gray-100 px-8 md:px-0">
            <div className="grid md:grid-cols-2 gap-10 pr-10">
                <div className="pl-4 pt-10 mt-32 md:mt-0">
                    <div className="mt-5 md:mt-0 md:h-80 grid items-center">
                        <div>
                            <div className="mb-3 md:px-0 pt-0 relative max-w-xs sm:max-w-sm pr-8">
                                <h1 className="text-center text-xl md:text-4xl font-bold">Congratulations!</h1>
                                <p className="text-yellow-400 text-md text-center mt-2">Your shop is ready!</p>
                                <h3 className="py-2">Share your link</h3>
                                <div className="flex flex-row pb-5">
                                    <div className={`form-control px-3 pt-2 placeholder-blueGray-300 
                                        text-blueGray-600 max-w-sm relative ${'bg-white'} rounded 
                                        text-sm border border-gray-200
                                        outline-none cursor-pointer sm:w-screen w-full`}
                                    >
                                        <textarea 
                                            className="text-gray-500 text-xs w-full"
                                            value="https://kortex-shop.kortex.co"
                                            ref={textAreaRef}
                                        />
                                    </div>
                                    <button
                                        className="bg-yellow-400 text-white text-xs
                                        rounded hover:bg-blue-600 w-16 p-2"
                                        onClick={copyToClipboard}
                                    >COPY
                                    </button>
                                </div>
                                {alert && <div className={`alert opacity-50 text-blue-500`}>{copySuccess}</div>}
                                <p className="my-4">Share your link</p>
                                <div className="flex flex-row gap-4">
                                    <div className="rounded-xl px-5 md:w-1/2 w-52
                                        overflow-hidden grid justify-items-center bg-white shadow-lg py-8 md:py-5">
                                        <img className="h-8 w-16 rounded-3xl mt-3" src='/assets/svgs/createshop/cart.svg' alt="shop"/>
                                        <div className=" pt-5 text-center">
                                            <p className="max-w-xs text-black text-sm">
                                                Add more products
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl px-5 md:w-1/2 w-52
                                    overflow-hidden grid justify-items-center bg-white shadow-lg py-8 md:py-5">
                                    <img className="h-8 w-16 rounded-3xl mt-3" src='/assets/svgs/createshop/bxs-dollar-circle.svg' alt="shop"/>
                                    <div className=" pt-5 text-center">
                                        <p className="max-w-xs text-black text-sm">
                                            Set payment methods
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="max-w-xs sm:max-w-sm px-5 md:mx-10  pb-5 pr-8">
                    <p className="text-yellow-400 text-sm py-2 md:py-5">Preview</p>
                    <div className="rounded-xl 
                        overflow-hidden grid justify-items-center bg-white shadow-lg py-5 md:py-10">
                        <div className="h-36 w-36 bg-white rounded-full
                            shadow-lg transition-colors grid justify-items-center place-items-center">
                            <img className="h-20 w-20 rounded-3xl" src='/assets/svgs/createshop/shop.svg' alt="shop"/>
                        </div>
                        <div className=" pt-5 text-center">
                            <p className="font-medium max-w-xs text-black text-md mb-2">
                                Kortex
                            </p>
                            <button
                                className="bg-button text-white text-xs
                            py-2 rounded hover:bg-blue-600 w-24 mt-5"
                            >NEXT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopReady

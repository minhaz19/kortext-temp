import React from 'react';
import { useState } from 'react';
import updateProduct from '../../../services/ProductsStock/updateProduct';
import toast, { Toaster } from 'react-hot-toast';
import CloudinaryPublicIdToUrlMaker from '../../../helpers/cloudinaryPublicIdToUrlMaker';

const ProductDetails = ({ product, parentProductsName, loading }) => {
    const { product_images, name, stock, id, parentId, hasVariant } = product;
    const [inputData, setInputData] = useState({
        stock: stock || ''
    });

    const handleChange = input => (e) => {
        setInputData({ ...inputData, [input]: e.target.value });
    }

    const submit = () => {
        let temp = ({ ...product, "stock": inputData.stock })
        const loading = toast.loading('updating...');
        updateProduct(temp, id)
            .then(res => {
                toast.dismiss(loading);
                if (res) {
                    toast.success('stock has been updated successfully!');
                }
            })
            .catch(err => {
                toast.error('something went wrong plz try again!');
            })
    }

    return (
        <>
            <div className='capitalize grid grid-cols-12 gap-x-6 p-3 my-2 text-gray-600 font-open-sans bg-white border-b-2 border-blue-100'>
                <div className='col-span-12 md:col-span-1 flex justify-center md:justify-start'>
                    {product_images[0]?.source ? <img
                        src={CloudinaryPublicIdToUrlMaker(product_images[0]?.source, 50)}
                        alt=""
                        className="h-14 w-14 rounded-md overflow-hidden"
                    /> : <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>}
                </div>
                <div className='pt-4 px-2 col-span-12 md:col-span-3 text-sm text-center md:text-left py-1 md:py-0 flex items-center justify-center md:justify-start'>
                    <span className='font-bold md:hidden mr-2'>Product Name:</span>{name}
                </div>
                <div className='pt-4 px-2 col-span-12 md:col-span-3 text-sm text-center md:text-left py-1 md:py-0 flex items-center justify-center md:justify-start'>
                    <span className='font-bold md:hidden mr-2'>Parent Product: </span>{parentId ? parentProductsName[parentId] || "not-found": "not-applicable"}
                </div>
                <div className='col-span-12 md:col-span-2 flex justify-center items-center'>
                    {hasVariant ? "not-applicable" :
                        <><span className='font-bold md:hidden mr-2'>Stock:</span>
                            <input
                                type="number"
                                name="stock"
                                min="0"
                                className="py-1 shadow rounded border-2 border-blue-600 text-center w-20 font-bold text-xl"
                                placeholder="stock"
                                value={inputData.stock || ''}
                                onChange={handleChange('stock')}
                            />
                        </>}
                </div>
                <div className="col-span-12 md:col-span-3 flex md:justify-end justify-center items-center">
                    <button disabled={hasVariant || loading}
                        className={`bg-blue-600 text-white text-sm mt-2 md:mt-0
                                py-2 rounded hover:bg-blue-800 px-4 ${hasVariant || loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                            }`} onClick={submit}>save</button>
                </div>
                <Toaster />
            </div>
        </>

    );
};

export default ProductDetails;
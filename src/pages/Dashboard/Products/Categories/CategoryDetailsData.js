import React from 'react';
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io"
import CategorySubProducts from './CategorySubProducts';

const CategoryDetailsData = ({ products, open }) => {
    const [detailsTab, setDetailsTab] = useState(false);
    const [currentopenid, setcurrentopenid] = useState(null);

    const handleChange = (id) => {
        setDetailsTab(!detailsTab);
        setcurrentopenid(id);
    }
    const modifyProduct = products?.filter(p => p?.parentId === null);
    var data = [];
    modifyProduct?.forEach(product => {
        const subProducts = products?.filter(p => p?.parentId === product.id);
        data.push({ ...product, subProducts });
    });

    return (
        <div className={`${open ? "detailsTabOpen" : "deatilsTabClose "
            } pl-10 bg-white`}>
            <>
                <div className="uppercase grid grid-cols-4 gap-x-6 mt-5 py-5 text-gray-400 font-bold font-open-sans">
                    <p>products name</p>
                    <p>Slug</p>
                    <p>price</p>
                    <p>stock</p>
                </div>
                {data?.map((product, index) => {
                    return (
                        product?.hasVariant ? (
                            <React.Fragment>
                                <div key={index} className={`capitalize grid grid-cols-4 gap-x-6 py-2 text-gray-600 font-open-sans bg-white border-b-2 border-blue-100`}>
                                    <div className="flex">
                                        <IoIosArrowDroprightCircle className={`text-xl text-gray-500 transform ${(detailsTab && currentopenid===product.id) ? "rotate-90" : "rotate-0"} transition duration-700 cursor-pointer`} style={{ marginTop: "18px" }} onClick={() => handleChange(product?.id)} />
                                        <p className="mt-4 ml-3">{product?.name}</p>
                                    </div>
                                    <p className="mt-4">{product?.slug}</p>
                                    <p className="mt-4">{product?.hasVariant ? "N/A" : (product?.price)}</p>
                                    <p className="mt-4 ml-1">{product?.hasVariant ? "N/A" : product?.stock}</p>
                                </div>
                                {((detailsTab) && (currentopenid === product.id)) && <CategorySubProducts key={index} detailsTab={detailsTab} data={data} />}
                            </React.Fragment>
                        )
                            : (
                                <div key={index} className={`capitalize grid grid-cols-4 gap-x-6 py-2 text-gray-600 font-open-sans bg-white border-b-2 border-blue-100`}>
                                    <p className="mt-4 ml-3">{product?.name}</p>
                                    <p className="mt-4">{product?.slug}</p>
                                    <p className="mt-4">{product?.hasVariant ? "N/A" : (product?.price)}</p>
                                    <p className="mt-4 ml-1">{product?.hasVariant ? "N/A" : product?.stock}</p>
                                </div>
                            )
                    )
                }

                )}
            </>

        </div >
    );
};

export default CategoryDetailsData;
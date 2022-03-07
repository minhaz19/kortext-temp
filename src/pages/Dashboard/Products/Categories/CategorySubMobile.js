import React from 'react';

const CategorySubMobile = ({ open, data }) => {
    return (
        <>
            {data.map((p) => {
                return (
                    p.subProducts.map((product, index) => {
                        return (
                            <div key={index} className={`${open ? "detailsTabOpen" : "deatilsTabClose "
                                } pl-5 bg-white flex flex-col rounded h-auto w-auto border-b-2 border-blue-100`}>
                                <p className="mt-2"><span className="font-bold ">Product Name:</span>{product?.name}</p>
                                <p className="mt-2"><span className="font-bold ">Slug:</span>{product?.slug}</p>
                                <p className="mt-2"><span className="font-bold ">Price:</span>{product?.hasVariant ? "N/A" : (product?.price)}</p>
                                <p className="mt-2"><span className="font-bold ">Stock:</span>{product?.hasVariant ? "N/A" : product?.stock}</p>
                            </div>
                        )
                    }
                    )
                )

            })}
        </>
    );
};

export default CategorySubMobile;
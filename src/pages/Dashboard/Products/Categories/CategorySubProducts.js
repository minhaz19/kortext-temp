import React from 'react';

const CategorySubProducts = ({ data, detailsTab }) => {
    return (
        <>
            {data.map((p, index) => {
                return (
                    p.subProducts.map((product) => {
                        return (
                            <div key={index} className={`${detailsTab ? " detailsTabOpen" : "deatilsTabClose "
                                } capitalize grid grid-cols-4 gap-x-6 py-2 text-gray-600 font-open-sans  bg-white border-b-2 border-blue-100`}>
                                <p className="mt-4 ml-3">{product?.name}</p>
                                <p className="mt-4">{product?.slug}</p>
                                <p className="mt-4">{product?.hasVariant ? "N/A" : (product?.price)}</p>
                                <p className="mt-4 ml-1">{product?.hasVariant ? "N/A" : product?.stock}</p>
                            </div>
                        )
                    }
                    )
                )

            })}
        </>
    );
};

export default CategorySubProducts;
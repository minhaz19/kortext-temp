import React from 'react'

import ToggleSwitch from '../../../components/ToggleSwitch';
import CloudinaryPublicIdToUrlMaker from "../../../helpers/cloudinaryPublicIdToUrlMaker";
import { Link } from 'react-router-dom';
const TableData = ({product_images, price, name, stock, id, status, deleteRequest, hasVariant, parentId }) => {
    return (
        <section>
            <div
                className="capitalize grid grid-cols-12 gap-x-6 py-2 text-gray-600 font-open-sans border-b-2 border-blue-100 bg-white">
                <div className="h-14 w-14 rounded-md overflow-hidden col-span-2">
                    <img
                        src={product_images.length ? CloudinaryPublicIdToUrlMaker(product_images[0].source, 50) : '/assets/svgs/dashboard/product.svg'}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="mt-4 col-span-3">{name}</p>
                <p className="mt-4 ml-2 col-span-1">{
                    hasVariant
                    ?
                    "N/A"
                    :
                    (
                        <React.Fragment>
                            {stock}
                        </React.Fragment>
                    )
                }</p>
                <ToggleSwitch status={status} id={id} className="mt-4 ml-2 col-span-2"/>
                <p className="mt-4 ml-1 col-span-1">
                    {
                        hasVariant
                        ?
                        "N/A"
                        :
                        (
                            <React.Fragment>
                                ${price}
                            </React.Fragment>
                        )
                    }
                </p>
                <div className="flex justify-center gap-2 items-center col-span-3">
                    <Link to={`/dashboard/updateproduct/${id}`}><button  className={'bg-button text-white px-3 py-1 rounded shadow text-sm'}>Edit</button></Link>
                    <button onClick={() => deleteRequest && deleteRequest(id)} className={'bg-red-500 text-white px-3 py-1 rounded shadow text-sm'}>Delete</button>
                </div>
            </div>
        </section>
    );
}

export default React.memo(TableData)

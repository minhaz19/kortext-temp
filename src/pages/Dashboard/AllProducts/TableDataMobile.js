import React from 'react'
import ToggleSwitch from '../../../components/ToggleSwitch';
import CloudinaryPublicIdToUrlMaker from "../../../helpers/cloudinaryPublicIdToUrlMaker";
import { Link } from "react-router-dom";
const TableDataMobile = ({ product_images, price, name, stock, status, id, deleteRequest }) => {
  return (
    <div className="capitalize p-5 md:p-10 text-gray-500 font-bold rounded-md bg-white">
      <div className="h-14 w-14 mx-auto rounded-md overflow-hidden">
        <img src={product_images.length ? CloudinaryPublicIdToUrlMaker(product_images[0].source, 100): '/assets/svgs/dashboard/product.svg'} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mx-auto" style={{ width: "fit-content" }}>
        <p className="mt-2">Name: {name}</p>
        <p className="mt-2">Stock: {stock}</p>
        <p className="mt-2">Price: {price}</p>
        <div className="flex gap-x-2">
          <p style={{marginTop:"2px"}}>Active: </p>
          <ToggleSwitch status={status} id={id} className="mt-2" />
        </div>

          <div className="flex justify-between my-4 gap-2 items-center col-span-3">
          <Link to={`/dashboard/updateproduct/${id}`}><button  className={'bg-button text-white px-3 py-1 rounded shadow text-sm'}>Edit</button></Link>
              <button onClick={() => deleteRequest && deleteRequest(id)} className={'bg-red-500 text-white px-3 py-1 rounded shadow text-sm'}>Delete</button>
          </div>
      </div>
    </div>
  );
};

export default TableDataMobile

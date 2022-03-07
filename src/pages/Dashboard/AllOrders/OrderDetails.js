import React from 'react'
import "./style.css"
import { MdModeEdit, MdDelete } from "react-icons/md";

const OrderDetails = ({open}) => {
    return (
      <div
        className={`${
          open ? "detailsTabOpen" : "deatilsTabClose "
        } pl-10 bg-white `}
      >
        <p className="text-gray-500 mb-1 mt-3">Order time</p>
        <p className="text-gray-800 mb-3">03/08/2021,16:16:36</p>
        <p className="text-gray-500 mb-1">Payment method</p>
        <p className="text-gray-800 mb-3">Admin Added</p>
        <p className="text-gray-500 mb-1">Customer</p>
        <p className="text-gray-800 mb-3">add</p>
        <p className="text-gray-500 mb-1">Delivery method</p>
        <p className="text-gray-800 mb-3">pickup</p>
        <p className="text-gray-500 mb-1">Gift</p>
        <p className="text-gray-800 mb-3">No</p>
        <p className="text-gray-500 mb-1">item</p>
        <p className="text-gray-800 mb-3">1x Cookie products</p>
        <div className="flex gap-x-5">
          <div className="flex text-lg cursor-pointer">
            <MdModeEdit
              className="mr-1 text-blue-500"
              style={{ marginTop: "6px" }}
            />
            <p className="text-gray-600 mb-1">Edit</p>
          </div>

          <div className="flex text-lg cursor-pointer">
            <MdDelete
              className="mr-1 text-red-500"
              style={{ marginTop: "5px" }}
            />
            <p className="text-gray-600 mb-1">Delete</p>
          </div>
        </div>
      </div>
    );
}

export default OrderDetails

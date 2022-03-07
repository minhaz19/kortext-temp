/* eslint-disable*/

import {useState} from 'react'
import Checkbox from "rc-checkbox";
import OrderDetails from './OrderDetails';
import {IoIosArrowDroprightCircle} from "react-icons/io"

const TableData = ({id,price,orderDate,deliveryDate,customer,status,item}) => {
  const [detailsTab, setDetailsTab] = useState(false);
    return (
      <section>
        <div className="capitalize grid grid-cols-7 gap-x-6 py-5 text-gray-700 font-open-sans border-b-2 bg-white">
          <div className="flex gap-x-3">
            <IoIosArrowDroprightCircle className={`text-xl text-gray-500 ml-1 transform ${detailsTab ? "rotate-90":"rotate-0"} transition duration-700 cursor-pointer`} style={{marginTop:"2px"}} onClick={()=>setDetailsTab(!detailsTab)}/>
            <Checkbox />
            <p className="">{id}</p>
          </div>
          <p>{orderDate}</p>
          <p>{customer}</p>
          <p>{item}</p>
          <p>{deliveryDate}</p>
          <p>${price}</p>
          <div>
            <div
              className={`px-4 rounded-xl ${
                status === "paid"
                  ? "bg-green-400"
                  : status === "cancelled"
                  ? "bg-red-500"
                  : status === "delivered"
                  ? "bg-green-500"
                  : status === "ordered"
                  ? "bg-yellow-400"
                  : null
              } text-white`}
              style={{ width: "fit-content" }}
            >
              <p>{status}</p>
            </div>
          </div>
        </div>
        <OrderDetails open={detailsTab}/>
      </section>
    );
}

export default TableData

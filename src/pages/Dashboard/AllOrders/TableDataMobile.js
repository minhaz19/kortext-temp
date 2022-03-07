import React from 'react'

const TableDataMobile = ({
  id,
  price,
  orderDate,
  deliveryDate,
  customer,
  status,
  item,
}) => {
  return (
    <div className="capitalize p-5 md:p-10 text-gray-500 font-bold rounded-md bg-white">
      <p>ID:{id}</p>
      <p>ORDER DATE:{orderDate}</p>
      <p>CUSTOMER:{customer}</p>
      <p>ITEMS:{item}</p>
      <p>DELIVERY DATE:{deliveryDate}</p>
      <p>PRICE:{price}</p>
      <div className="flex gap-x-2">
        <p>STATUS:</p>
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
  );
};

export default TableDataMobile

import React from 'react'

const MobileView = ({item}) => {
  return (
    <div className="capitalize my-5 mr-5 p-5 text-gray-500 font-bold rounded-md bg-white">
      <p>Title: {item.title}</p>
      <p>Delivery: {item.delivery}</p>
      <p>Pickup: {item.pickup}</p>
      <p>Total: {item.total}</p>
    </div>
  );
};

export default MobileView;

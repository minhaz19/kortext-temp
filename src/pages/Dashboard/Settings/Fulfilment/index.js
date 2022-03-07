import React, { useEffect, useState } from "react";
import DeliveryDetailsCard from "./DeliveryDetailsCard";
import PickupDetailsCard from "./PickupDetailsCard";
import getFulFillmentService from "../../../../services/fulfillment/getFulFillmentService";
import DeliveryTitle from "./DeliveryTitle";
import PickupTitle from "./PickupTitle";

const Fulfilment = () => {
  const [deliveryData, setDeliveryData] = useState([{}]);
  const [pickupData, setPickupData] = useState([{}]);
  const [isFetch, setisFetch] = useState(false);

  useEffect(() => {
    getFulFillmentService()
      .then(res => {
        setDeliveryData(res.options.deliveryOptions);
        setPickupData(res.options.pickupOptions);
        setisFetch(true);
      })
      .catch(err => {
        setisFetch(true);
      })
  }
    , []);

  const filterDeliveryData = (id) => {
    setDeliveryData(deliveryData.filter(data => data.id !== id))
  }
  const filterPickupData = (id) => {
    setPickupData(pickupData.filter(data => data.id !== id))
  }
  return (

    <section className="md:ml-10 p-5 md:p-10 mb-10">
      {!isFetch ? (
        <div className="flex flex-row justify-center items-center">
          <span
            disabled={true}
            className="py-2 px-8 rounded text-black flex justify-center items-center flex-row">
            {
              <svg
                className="animate-spin -ml-1 mr-3 h-8 w-8 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            }
            Loading...
          </span>
        </div>
      ) : (
        <>
          <p className="text-3xl text-gray-700 mb-2">Delivery</p>
          {!deliveryData?.length ?
            (
              <p className="text-lg font-bold text-gray-500 mt-2 bg-white px-3 py-4 rounded ">You haven't added any Data yet</p>
            ) :
            (<div className="flex flex-col mb-5">
              {deliveryData.map((item, index) => {
                return (
                  <DeliveryTitle item={item} key={index} filterDeliveryData={filterDeliveryData} />
                );
              })}
            </div>)}
          <p className="text-gray-700 my-5">
            Create delivery options and set how much you charge for them
          </p>
          <div className="w-full md:w-1/2 border-2 bg-white rounded-md px-4">

            <DeliveryDetailsCard setDeliveryData={setDeliveryData} deliveryData={deliveryData} />
          </div>
          <div className="mt-5">
            <p className="text-3xl text-gray-700 mb-2">Pickup</p>
            {!pickupData?.length ? (
              <p className="text-lg font-bold text-gray-500 mt-2 bg-white px-3 py-4 rounded ">You haven't added any Data yet</p>
            ) :
              (<div className="flex flex-col mb-5">
                {pickupData.map((item, index) => {
                  return (
                    <PickupTitle item={item} key={index} filterPickupData={filterPickupData} />
                  );
                })}
              </div>)}
            <p className="text-gray-700 my-5">
              Allow customers to pick up their orders
            </p>
            <div className="md:w-1/2 border-2 bg-white rounded-md px-4">
              <PickupDetailsCard setPickupData={setPickupData} pickupData={pickupData} />
            </div>
          </div>
        </>
      )}

    </section>
  );
};

export default Fulfilment;

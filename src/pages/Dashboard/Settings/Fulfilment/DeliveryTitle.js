import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io"
import DeliveryData from './DeliveryData';

const DeliveryTitle = (props) => {
    const [detailsTab, setDetailsTab] = useState(false);
    return (
        <>
            <div className="flex gap-x-3 bg-white my-0.5 py-4 rounded cursor-pointer" onClick={() => setDetailsTab(!detailsTab)}>
                <IoIosArrowDroprightCircle className={`text-xl text-gray-500 ml-1 transform ${detailsTab ? "rotate-90" : "rotate-0"} transition duration-700 cursor-pointer`} style={{ marginTop: "2px"}} />
                <p className="font-bold text-logo text-gray-500">{props.item.title}</p>
            </div>
            <DeliveryData {...props} open={detailsTab} />
        </>
    );
};

export default DeliveryTitle;
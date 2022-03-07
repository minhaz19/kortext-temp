import React from 'react';
import deletePickupFulFillmentService from '../../../../services/fulfillment/deletePickupFulFillmentService';
import swal from 'sweetalert'

const PickupData = (props) => {
    const { cityName, price, description, id } = props.item;
    
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((result) => {
            if (result) {
                deletePickupFulFillmentService(id)
                    .then(res => {
                        if (res) {
                            swal("Data has been deleted!", {
                                icon: "success",
                            });
                            props.filterPickupData(id)
                        }
                    })
            }
        })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }
    return (
        <div className={`${props.open ? "detailsTabOpen" : "deatilsTabClose "
            } pl-5 bg-white flex flex-col rounded h-auto w-auto`}>
            <div className="mx-3 text-sm text-gray-500 py-3" style={{ width: "fit-content" }}>
                <p className="mt-2"><span className="font-bold ">Price:</span> ${price}</p>
                <p className="mt-2"><span className="font-bold ">City Name:</span> {cityName}</p>
                <p className="mt-2"><span className="font-bold ">Description:</span> {description}</p>
                <div className="mt-2">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PickupData;
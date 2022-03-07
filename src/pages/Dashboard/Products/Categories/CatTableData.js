import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io"
import CloudinaryPublicIdToUrlMaker from '../../../../helpers/cloudinaryPublicIdToUrlMaker';
import CategoryDetailsData from './CategoryDetailsData';

const CatTableData = ({ item, handleEdit, handleDelete }) => {
  const [detailsTab, setDetailsTab] = useState(false);
  const { name, image, products, slug } = item;
  return (
    <section className="my-2">
      <div className="capitalize grid grid-cols-5 gap-x-6 py-2 text-gray-600 font-open-sans bg-white border-b-2 border-red-200 shadow">
        <div className="flex">
          <IoIosArrowDroprightCircle className={`text-xl text-gray-500 ml-1 transform ${detailsTab ? "rotate-90" : "rotate-0"} transition duration-700 cursor-pointer`} style={{ marginTop: "18px" }} onClick={() => setDetailsTab(!detailsTab)} />
          <div className="h-14 w-14 rounded-md overflow-hidden ml-16">
            {image ? <img
              src={CloudinaryPublicIdToUrlMaker(image)}
              alt=""
              className="w-full h-full object-cover"
            />
              : <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>}
          </div>
        </div>
        <p className="mt-4 flex justify-center items-center">{name}</p>
        <p className="mt-4 flex justify-center items-center">{slug}</p>
        <p className="mt-4 flex justify-center items-center">{products?.length}</p>
        <div className="flex justify-center gap-2 items-center">
          <button className={'bg-button text-white px-3 py-1 rounded shadow text-sm'} onClick={() => handleEdit && handleEdit(item)}>Edit</button>
          <button className={'bg-red-500 text-white px-3 py-1 rounded shadow text-sm'} onClick={() => handleDelete && handleDelete(item.id)}>Delete</button>
        </div>
      </div>
      <CategoryDetailsData {...item} open={detailsTab} />
    </section>
  );
}

export default CatTableData
import React from 'react'
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io"
import CloudinaryPublicIdToUrlMaker from '../../../../helpers/cloudinaryPublicIdToUrlMaker';
import CategorySubMobile from './CategorySubMobile';

const TableDataMobile = ({ item, handleDelete, handleEdit }) => {
  const [detailsTab, setDetailsTab] = useState(false);
  const [currentopenid, setcurrentopenid] = useState(null);
  const handleChange = (id) => {
    setDetailsTab(!detailsTab);
    setcurrentopenid(id);
  }
  const { name, image, products, id } = item;
  const modifyProduct = products?.filter(p => p.parentId === null);
  var data = [];
  modifyProduct?.forEach(product => {
    const subProducts = products?.filter(p => p.parentId === product.id);
    data.push({ ...product, subProducts });
  });
  return (
    <div className="capitalize p-5 md:p-10 text-gray-500 rounded-md bg-white">
      <div className="h-14 w-14 mx-auto rounded-md overflow-hidden">
        <img
          src={CloudinaryPublicIdToUrlMaker(image)}
          alt=""
          className="w-full h-full object-cover" />
      </div>
      <div className="mx-auto" style={{ width: "fit-content" }}>
        <div className="flex flex-row gap-x-3 bg-white py-4 rounded">
          <IoIosArrowDroprightCircle className={`text-xl text-gray-500 ml-1 transform ${(detailsTab && currentopenid===id) ? "rotate-90" : "rotate-0"} transition duration-700 cursor-pointer mt-6`} style={{ marginTop: "2px" }} onClick={() => handleChange(id)} />
          <div className="flex flex-col">
            <p><span className="font-bold">Category Name: </span>{name}</p>
            <p><span className="font-bold">Total Products: </span>{products?.length}</p>
            <div className="flex justify-between my-4 gap-2 items-center col-span-3">
              <button className={'bg-button text-white px-3 py-1 rounded shadow text-sm'} onClick={() => handleEdit && handleEdit(item)}>Edit</button>
              <button className={'bg-red-500 text-white px-3 py-1 rounded shadow text-sm'} onClick={() => handleDelete && handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        </div>
        {
          data?.map((product, index) => {
            return (
              product?.hasVariant ? (
                <React.Fragment>
                  <div key={index} className={`${detailsTab? "detailsTabOpen" : "deatilsTabClose "
                    } pl-5 bg-white flex flex-col rounded h-auto w-auto border-b-2 border-blue-100`}>
                    <div className="flex">
                      <IoIosArrowDroprightCircle className={`text-xl text-gray-500 transform ${(detailsTab && currentopenid===product.id) ? "rotate-90" : "rotate-0"} transition duration-700 cursor-pointer`} style={{ marginTop: "18px" }} onClick={() => handleChange(product?.id)} />
                      <p className="mt-2"><span className="font-bold ">Product Name:</span>{product?.name}</p>
                    </div>
                    <p className="mt-2"><span className="font-bold ">Slug:</span>{product?.slug}</p>
                    <p className="mt-2"><span className="font-bold ">Price:</span>{product?.hasVariant ? "N/A" : (product?.price)}</p>
                    <p className="mt-2"><span className="font-bold ">Stock:</span>{product?.hasVariant ? "N/A" : product?.stock}</p>
                  </div>
                  {(detailsTab && (currentopenid === product.id)) && <CategorySubMobile open={detailsTab} data={data} />}
                </React.Fragment>
              )
                : (
                  <div key={index} className={`${detailsTab ? "detailsTabOpen" : "deatilsTabClose "
                    } pl-5 bg-white flex flex-col rounded h-auto w-auto border-b-2 border-blue-100`}>
                    <p className="mt-2"><span className="font-bold ">Product Name:</span>{product?.name}</p>
                    <p className="mt-2"><span className="font-bold ">Slug:</span>{product?.slug}</p>
                    <p className="mt-2"><span className="font-bold ">Price:</span>{product?.hasVariant ? "N/A" : (product?.price)}</p>
                    <p className="mt-2"><span className="font-bold ">Stock:</span>{product?.hasVariant ? "N/A" : product?.stock}</p>
                  </div>
                )
            )
          })
        }
      </div>
    </div>
  );
};

export default TableDataMobile
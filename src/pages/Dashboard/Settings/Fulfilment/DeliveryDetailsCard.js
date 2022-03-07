import React from 'react'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import postDeliveryFulFillmentService from '../../../../services/fulfillment/postDeliveryFulfillmentService';

const DeliveryDetailsCard = ({ setDeliveryData, deliveryData }) => {
  const { register, handleSubmit, reset } = useForm();
  const [errors, setErrors] = React.useState({
    title: "",
    description: "",
    cityName: "",
    price: "",
  });
  const onSubmit = data => {
    const loading = toast.loading('Uploading...');
    const deliveryDetails = {
      title: data.title,
      description: data.description,
      price: data.price,
      cityName: data.cityName
    }
    postDeliveryFulFillmentService(deliveryDetails)
      .then(res => {
        swal("Success!", "Congratulation your data inserted successfully", "success");
        toast.dismiss(loading);
        setDeliveryData([...deliveryData, res.option]);
        reset();
      })
      .catch(err => {
        swal("Oops", "Something went wrong! Please try again later :)", "error")
        toast.dismiss(loading);
      })
  }
  const changeTitle = (e) => {
    if (e.target.value.length < 5 || e.target.value.length > 50) {
      setErrors({ ...errors, title: 'Only 5 to 50 character allow!' })
    } else {
      setErrors({ ...errors, title: '' })
    }
  }
  const changePrice = (e) => {
    if (e.target.value.length < 0 || e.target.value.length > 10) {
      setErrors({ ...errors, price: 'minimum price can be 1 and maximum can be 10 digit ' })
    } else {
      setErrors({ ...errors, price: '' })
    }
  }
  const changeDescription = (e) => {
    if (e.target.value.length < 5 || e.target.value.length > 1000) {
      setErrors({ ...errors, description: 'Only 5 to 999 character allow!' })
    } else {
      setErrors({ ...errors, description: '' })
    }
  }
  const changeCityName = (e) => {
    if (e.target.value.length < 4 || e.target.value.length > 50) {
      setErrors({ ...errors, cityName: 'Only 4 to 49 character allow!' })
    } else {
      setErrors({ ...errors, cityName: '' })
    }
  }
  return (
    <div className="mt-5 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-sm">Title Name</p>
        <div className="pt-2 pb-3">
          <input
            type="text"
            {...register('title', { required: true })}
            placeholder="Title Name"
            onChange={changeTitle}
            className="form-control w-full h-6 py-4 px-2 text-xs rounded focus:bg-white focus:outline-none border border-blue-500 focus:ring focus:border-blue-700" />
          <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.title}</p>
        </div>
        <p className="text-sm">Price</p>
        <div className="pt-2 pb-3">
          <input
            type="number"
            {...register('price', { required: true })}
            placeholder="price"
            min="0"
            onChange={changePrice}
            className="form-control w-full h-6 py-4 px-2 text-xs rounded bg-white focus:bg-white focus:outline-none border border-blue-500 focus:ring focus:border-blue-700" />
          <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.price}</p>
        </div>
        <p className="text-sm">Description</p>
        <div className="pt-2 pb-3">
          <textarea
            type="text"
            {...register('description', { required: true })}
            placeholder="description"
            onChange={changeDescription}
            rows="3"
            cols="30"
            className="form-control w-full py-4 px-2 text-xs rounded bg-white focus:bg-white focus:outline-none border border-blue-500 focus:ring focus:border-blue-700" />
          <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.description}</p>
        </div>
        <p className="text-sm">City Name</p>
        <div className="pt-2 pb-3">
          <input
            type="text"
            {...register('cityName', { required: true })}
            onChange={changeCityName}
            placeholder="CityName"
            className="form-control w-full h-6 py-4 px-2 text-xs rounded bg-white focus:bg-white focus:outline-none border border-blue-500 focus:ring focus:border-blue-700" />
          <p className="text-xs font-bold text-red-600 pt-1 pl-2">{errors.cityName}</p>
        </div>
        <div className="form-group pb-3">
          <button type="submit" className="w-full py-4 px-6 rounded bg-blue-600 hover:bg-blue-500 text-white">Create</button>
        </div>
        <Toaster />
      </form>
    </div>
  );
};

export default DeliveryDetailsCard

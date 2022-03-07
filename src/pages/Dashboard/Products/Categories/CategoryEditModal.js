import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import { useState } from 'react';
import CloudinaryPublicIdToUrlMaker from '../../../../helpers/cloudinaryPublicIdToUrlMaker';
import updateCategoryById from '../../../../services/category/updateCategoryById';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: '#D3D3D3',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const CategoryEditModal = ({ editModalIsOpen, closeEditModal, editCategoryData, setEditCategoryData}) => {
    const { register, handleSubmit, reset } = useForm();
    const [inputData, setInputData] = useState({
        name: editCategoryData?.name || "",
        image: CloudinaryPublicIdToUrlMaker(editCategoryData?.image) || ""
    });
    const handleImgUpload = (e) => {
        const file = e.target?.files[0];
        const reader = new FileReader();
        try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setInputData({ ...inputData, "image": reader?.result })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleChange = input => e => {
        setInputData({ ...inputData, [input]: e.target.value });
    }

const onSubmit = () => {
        const loading = toast.loading('Uploading...');
        updateCategoryById(inputData, editCategoryData?.id)
            .then(res => {
                swal("Success!", "Congratulation your data inserted successfully", "success");
                toast.dismiss(loading);
                setEditCategoryData({...editCategoryData, ...res.data});
                closeEditModal();
                reset();
            })
            .catch(err => {
                swal("Oops", err?.message, "error")
                toast.dismiss(loading);
            })

    }
    return (
        <div>
            <Modal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-sm">Category Name</p>
                    <div className="pt-2 pb-3">
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            placeholder="Category Name"
                            value={inputData?.name || ""}
                            onChange={handleChange('name')}
                            className="form-control w-80 h-6 py-4 px-2 text-xs rounded bg-white focus:bg-white focus:outline-none focus:ring focus:border-blue-300" />
                        {/* {errors.categoryName && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="rounded-xl w-full overflow-hidden cursor-pointer relative grid justify-items-center bg-white shadow-lg py-3 px-5">
                        <input onChange={handleImgUpload} type="file"
                            accept={'image/png, image/jpg, image/jpeg, image/svg, image/webp'}
                            className={'w-full cursor-pointer h-full absolute opacity-0 -top-0 -left-0 z-10'} />
                        {
                            inputData?.image ? (
                                <>
                                    <img src={inputData?.image} alt="N"
                                        className={'w-auto h-32 object-contain object-center'} />
                                </>
                            ) : (
                                <>
                                    <div className="w-full max-h-10 ">
                                        <img className="h-full w-full rounded"
                                            src='/assets/svgs/createshop/cloud-upload.svg' alt="" />
                                    </div>
                                    <div className=" pt-3 text-center">
                                        <div className="text-center">
                                            <p className="font-medium max-w-xl text-blue-300 text-sm">
                                                Browse
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="form-group text-right pt-5 ">
                        <button type="submit" className="py-2 px-6 rounded bg-blue-600 hover:bg-blue-500 text-white">Send</button>
                    </div>
                </form>
            </Modal>
            <Toaster />
        </div >
    );
};

export default CategoryEditModal;
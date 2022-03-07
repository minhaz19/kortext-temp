import React, { useState } from 'react';
import Switch from "react-switch";
import updateAccount from '../../../../services/account/updateAccount';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

const Account = () => {
    const { handleSubmit, reset } = useForm();
    const userData = JSON.parse(localStorage.getItem('userDb')) || {};
    const [inputData, setInputData] = useState({
        fullName: userData.fullName || '',
        isChangePassword: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        fullName: '',
        isChangePassword: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [loading, setLoading] = useState(false);
    const isSaveButtonDisabled = () => {
        return loading;
    }

    const handleChange = input => e => {
        if (e.target.name === 'fullName') {
            if (e.target.value === userData.fullName) {
                //   setIsactive(false);
            }
            else {
                setErrors({
                    ...errors,
                    fullName: '',
                })
            }
        }
        if (e.target.name === 'oldPassword') {
            if (e.target.value.length < 8) {
                setErrors({ ...errors, oldPassword: 'must be 8 character long!' })
            }
            else {
                setErrors({ ...errors, oldPassword: '' })
            }
        }
        if (e.target.name === 'newPassword') {
            if (e.target.value.length < 8) {
                setErrors({ ...errors, newPassword: 'must be 8 character long!' })
            }
            else {
                setErrors({ ...errors, newPassword: '' })
            }
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value.length < 8) {
                setErrors({ ...errors, confirmPassword: 'must be 8 character long!' })
            }
            else {
                setErrors({ ...errors, confirmPassword: '' })
            }
        }
        setInputData({ ...inputData, [input]: e.target.value });
    };

    const switchChange = input => e => {
        setInputData({ ...inputData, [input]: e });
    }

    const onSubmit = () => {
        let temp = ({ ...userData, "fullName": inputData.fullName })
        const loading = toast.loading('Uploading...');
        setLoading(true);
        updateAccount(temp).then((res) => {
            swal("Success!", res.message, "success");
            toast.dismiss(loading);
            localStorage.setItem('userDb', JSON.stringify(temp));
            reset();
            setLoading(false);
        })
            .catch((err) => {
                swal("Oops", err.message, "error")
                toast.dismiss(loading);
                setLoading(false);
            })
    }
    return (
        <div className="ml-5 my-5 pb-5">
            <h1 className="paragraph-heading">Account</h1>
            <p className="text-xs">Update your store details</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-container">
                    {/* your name*/}
                    <div className="input-box">
                        <img src="/assets/svgs/dashboard/awesome-user-edit.svg" alt="" className="h-4 pt-1 w-4" />
                        <p className="pl-4 text-sm">Your name</p>
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        className="input-general ml-9 pt-1 bg-white"
                        placeholder="fullName"
                        value={inputData.fullName || ''}
                        onChange={handleChange('fullName')}
                    />
                    {/* Change password */}
                    <div className="input-box">
                        <img src="/assets/svgs/dashboard/padlock.svg" alt="" className="h-5 pt-1 w-4" />
                        <p className="heading-title">Change password</p>
                        <div className="switch-head">
                            <Switch
                                id="isChangePassword"
                                onChange={switchChange("isChangePassword")}
                                checked={inputData.isChangePassword}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#e8e9ec"
                                offHandleColor="#a4a4a4"
                                onHandleColor="#e8e9e7"
                                height={12}
                                width={32}
                                handleDiameter={16}
                            />
                        </div>
                    </div>
                    {inputData.isChangePassword ? (
                        <div>
                            <input
                                type="text"
                                name="oldPassword"
                                className="input-general"
                                placeholder="Old password"
                                onChange={handleChange('oldPassword')}
                            />
                            {errors.oldPassword.length !== 0 && <p className="text-xs font-bold text-red-600 pt-1 pl-8">{errors.oldPassword}</p>}
                            <input
                                type="text"
                                name="newPassword"
                                className="input-general"
                                placeholder="New password"
                                onChange={handleChange('newPassword')}
                            />
                            {errors.newPassword.length !== 0 && <p className="text-xs font-bold text-red-600 pt-1 pl-8">{errors.newPassword}</p>}
                            <input
                                type="text"
                                name="confirmPassword"
                                className="input-general"
                                placeholder="Confirm new password"
                                onChange={handleChange('confirmPassword')}
                            />
                            {errors.confirmPassword.length !== 0 && <p className="text-xs font-bold text-red-600 pt-1 pl-8">{errors.confirmPassword}</p>}
                        </div>
                    ) : null}
                </div>
                <div className="mt-4">
                    <button
                        disabled={isSaveButtonDisabled()}
                        className={`bg-blue-600 text-white text-xs
                        py-2 mb-10 rounded hover:bg-blue-800 w-20 ${isSaveButtonDisabled()
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                            }`} type="submit">SAVE
                    </button>
                </div>
                <Toaster />
            </form>

        </div>
    )
}

export default Account;

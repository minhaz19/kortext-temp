import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, withRouter } from 'react-router-dom';
import postRequest from '../../services/requests/postRequest'

const App = ({history}) => {


    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        setError('')
        if (!loading) {
            setLoading(true)
            postRequest('/v1/user/login', data, {})
                .then(res => {
                    setLoading(false)
                    localStorage.setItem('auth-token', res.data.token)
                    window.location = window.location.origin + '/dashboard';

                })
                .catch(err => {
                    setLoading(false)
                    setError('Unknown Credentials!')
                })

        }
    };

    return (
        <div className="grid place-items-center px-5" style={{height: "80vh"}}>
            <div
                className="w-full lg:w-1/2 p-5 sm:p-28 bg-white rounded-lg lg:mt-20"
                style={{boxShadow: "10px 10px 15px 2px rgb(204, 197, 197)"}}
            >
                <div>
                    <div className="w-8/12 sm:w-1/2 h-16 mx-auto mb-4">
                        <Link to={'/'}>
                            <img src="/logo.png" alt="" className="h-full w-full"/>
                        </Link>

                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <input
                            className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
                            placeholder="Please Enter your username or email"
                            {...register("email", {required: true})}
                        />

                        <p className="text-sm pl-1 font-open-sans text-red-400">{error}</p>
                        <p className="text-sm pl-1 font-open-sans text-red-400">{errors.email?.message}</p>

                        <input
                            className="border-2 focus:outline-none mt-5 h-10 rounded-lg pl-3"
                            type={'password'}
                            placeholder="Your password"
                            {...register("password", {required: true})}
                        />

                        <p className="text-sm pl-1 font-open-sans text-red-400">{errors.password?.message}</p>

                        <div className="mt-2 flex justify-between">


                            <p className="text-gray-500 mt-2 cursor-pointer hover:underline"
                               onClick={() => history.push("/forgetPassword")}>
                                Forget Password?
                            </p>
                        </div>

                        <button
                            className="bg-primary flex  justify-center items-center mt-5 h-10 rounded-lg text-white"
                            type="submit"
                        >
                            {
                                loading ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : ''
                            }
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default withRouter(App)
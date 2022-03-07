import {FaTelegramPlane, FaFacebookF, FaTumblr, FaLinkedinIn} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container mx-auto py-4 my-8 px-5 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="col-span-1 flex md:justify-center">
                        <div className={'inline'}>
                            <h2 className={'font-open-sans text-base font-semibold text-gray-800'}>About Kortex</h2>
                            <p className={'font-open-sans text-xs font-medium text-gray-500 py-3'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s.
                                <br/> <br/>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                                Ipsum
                                passages.
                            </p>
                        </div>

                    </div>

                    <div className="col-span-1 flex justify-end md:justify-center">
                        <div className="inline">
                            <h2 className={'font-open-sans text-base font-semibold text-gray-800'}>Quick Links</h2>
                            <br/>
                            <Link to={'/'} className={'font-open-sans text-xs font-medium text-gray-500'}>Home</Link>
                            <br/>
                            <Link to={'/career'} className={'font-open-sans text-xs font-medium text-gray-500'}>We Are Hiring!</Link>
                            <br/>
                            <Link to={'/404'} className={'font-open-sans text-xs font-medium text-gray-500'}>Teams</Link>
                            <br/>
                            <Link to={'/404'} className={'font-open-sans text-xs font-medium text-gray-500'}>Privacy</Link>
                        </div>
                    </div>


                    <div className="col-span-2 flex justify-center">
                        <div className="inline">
                            <h2 className={'font-open-sans text-base font-semibold text-gray-800 text-center'}>Subscribe
                                Our
                                Newsletter</h2>
                            <div className="md:mx-10 mx-4 my-5 overflow-none">
                                <div className="grid grid-cols-3">
                                    <div
                                        className="col-span-2 border-l-2 border-t-2 border-b-2 rounded-tl rounded-bl border-gray-400">
                                        <input type="text"
                                               className={'border-none outline-none rounded focus:outline-none w-full text-gray-600 font-sm px-2 py-2'}
                                               placeholder={'Enter email'}/>
                                    </div>
                                    <button
                                        className="bg-yellow-400 rounded-tr rounded-br text-xs uppercase text-white border border-yellow-400 font-open-sans focus:outline-none">
                                        Subscribe
                                        <FaTelegramPlane className={'inline pl-1'} size={20}/>
                                    </button>
                                </div>
                            </div>

                            <div className="flex my-2 justify-center md:justify-start items-center md:mx-10 mx-4">
                                <div
                                    className="inline text-white bg-blue-700 w-7 h-7 rounded-full flex justify-center items-center">
                                    <FaFacebookF/>
                                </div>

                                <div
                                    className="inline text-white mx-3 bg-blue-700 w-7 h-7 rounded-full flex justify-center items-center">
                                    <FaTumblr/>
                                </div>

                                <div
                                    className="inline text-white bg-blue-700 w-7 h-7 rounded-full flex justify-center items-center">
                                    <FaLinkedinIn/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-700 py-5">
                <div className="grid grid-cols-2">
                    <p className="text-center md:text-left md:pl-12 font-open-sans text-gray-300 text-xs md:text-sm">Kortex digital solution</p>
                    <p className="text-center md:text-right md:pr-12 font-open-sans text-gray-300 text-xs md:text-sm">All rights reserved 2021</p>
                </div>
            </div>
        </>
    )
}


export default Footer

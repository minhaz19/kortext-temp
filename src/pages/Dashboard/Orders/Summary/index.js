import React, { useState } from "react";
import { FaCalendar, FaStar, FaCross } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubOrderCom from '../SubOrderCom';
import Pagination from '../../../../components/Pagination';
import Modal from 'react-modal';
import EmailVerifyNote from '../../../../components/EmailVerifyNote';
import MobileView from "./MobileView";

const Summary = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    const [startDate, setStartDate] = useState(new Date());
    const data = [
        {
            id: 1, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 2, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 3, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 4, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 5, title: "Chicken", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 6, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 7, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 8, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 9, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
        {
            id: 10, title: "Pizza", delivery: 10, pickup: 15, total: 25
        },{
            id: 11, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 12, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 13, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 14, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 15, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 16, title: "Burger", delivery: 10, pickup: 15, total: 25
        },{
            id: 17, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 18, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 19, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },{
            id: 20, title: "Hotdog", delivery: 10, pickup: 15, total: 25
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="bg-gray-200 py-3 pl-3 md:p-10 mb-10 font-open-sans">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="text-center max-w-md relative">
                    <div className="absolute right-0 top-0" onClick={closeModal}>
                        <FaCross />
                    </div>
                    <div className="grid items-center justify-center my-4">
                    <img src="/assets/svgs/designing.svg" alt="" className="h-full"/>
                    </div>
                    <h1 className="font-bold">See your daily order summary</h1>
                    <p>A consolidation of your orders. Quickly tabulate the number of products you need to prepare for each day.</p>
                    <div>
                        <button
                            className="bg-blue-600 text-white text-xs
                            py-2 rounded-full hover:bg-blue-800 w-36 mr-4 my-4"
                        >Upgrade to Startup
                        </button>
                        <button
                            className="bg-blue-600 text-white text-xs
                            py-2 rounded-full hover:bg-blue-800 w-36"
                        >Preview
                        </button>
                    </div>
                </div>
            </Modal>
            <EmailVerifyNote />
            <div className="grid sm:grid-cols-2 justify-items-start pt-5">
                <h1 className="font-medium text-3xl">Summary</h1>
                <div className="flex flex-row bg-gray-300 h-6 m-2 justify-center items-center px-3 rounded-xl">
                    <FaStar color="gray" />
                    <p className="pl-2">Upgrade to Startup plan</p>
                </div>
            </div>
            <p className="pt-2 w-10/12">This is a feature preview using example data.</p>
            <p className="pt-2">Delivery date</p>
            <div className="flex justify-between ">
                <div className="flex flex-row relative">
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    className="bg-gray-200 border-b-2 border-black mt-2 mb-4"
                />
                <FaCalendar 
                    color="black"
                    className="absolute right-3 top-3"/>
                </div>
                <div className="max-w-44 w-7/12" onClick={openModal}>
                    <p className="text-blue-700">VIEW ORDER</p>
                </div>
            </div>
            <section className="pb-4 hidden sm:block ">
                <div className="bg-gray-300 grid grid-cols-4 p-2 pl-4">
                    <div>
                        <p>ITEM</p>
                    </div>
                    <div>
                        <p>DELIVERY</p>
                    </div>
                    <div>
                        <p>PICKUP</p>
                    </div>
                    <div>
                        <p>TOTAL</p>
                    </div>
                </div>
                {currentPosts?.map(item => (
                    <SubOrderCom key={item.id} item={item}/>
                ))}
            </section>
            <div className="sm:hidden">
                {currentPosts?.map(item => (
                    <MobileView key={item.id} item={item}/>
                ))}
            </div>
            <div className="grid justify-items-start lg:justify-items-end lg:mr-5">
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={data.length} 
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Summary

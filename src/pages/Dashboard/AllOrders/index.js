import { useState, useEffect, useRef } from "react";
import EmailVerifyNote from "../../../components/EmailVerifyNote";
import { AiOutlinePlus } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select, { components } from "react-select";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import TableDataMobile from "./TableDataMobile";
import Pagination from "../../../components/Pagination";
import { monthOption } from "../../../assets/Data/monthOption";
import { orderData } from "../../../assets/Data/orderData";
import { paginationOption } from "../../../assets/Data/paginationOption";
import { statusOption } from "../../../assets/Data/statusOption";
import {Link} from 'react-router-dom';


const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <BsFillCaretDownFill className="text-black" />
    </components.DropdownIndicator>
  );
};

const AllOrder = props => {
  const [showDeliveryCalender, setShowDeliveryCalender] = useState(false);
  const [showOrderCalender, setShowOrderCalender] = useState(false);
  // eslint-disable-next-line
  const [status, setStatus] = useState("Status");
  const [deliveryDate, setDeliveryDate] = useState("Delivery Date");
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(null);
  const [orderDate, setOrderDate] = useState("Order Date");
  const [selectedOrderDate, setSelectedOrderDate] = useState(null);
  const deliveryRef = useRef(null);
  const orderRef = useRef(null);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      borderRadius: "24px",
      boxShadow: "none",
      textAlign: "center",
      width: "100%",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      left: "45%",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      width: 0,
    }),

    placeholder: (provided, state) => ({
      ...provided,
      color: "black",
      left: "40%",
      top: "55%",
    }),
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (deliveryRef.current && !deliveryRef.current.contains(event.target)) {
        setShowDeliveryCalender(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [deliveryRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (orderRef.current && !orderRef.current.contains(event.target)) {
        setShowOrderCalender(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [orderRef]);

  const handleSelectDeliveryDay = (e) => {
    setSelectedDeliveryDate(e);
    setDeliveryDate(
      `${e.getDate() < 10 ? `0${e.getDate()}` : e.getDate()}/${
        e.getMonth() < 10 ? `0${e.getMonth()}` : e.getMonth()
      }/${e.getFullYear()}`
    );
    setShowDeliveryCalender(false);
  };

  const handleSelectOrderDay = (e) => {
    setSelectedOrderDate(e);
    setOrderDate(
      `${e.getDate() < 10 ? `0${e.getDate()}` : e.getDate()}/${
        e.getMonth() < 10 ? `0${e.getMonth()}` : e.getMonth()
      }/${e.getFullYear()}`
    );
    setShowOrderCalender(false);
  };

  const handleDeliveryDateClear = () => {
    setDeliveryDate("Delivery Date");
    setSelectedDeliveryDate(null);
  };

  const handleOrderDateClear = () => {
    setOrderDate("Order Date");
    setSelectedOrderDate(null);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = orderData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative font-open-sans p-5 md:p-10">
      <EmailVerifyNote />
      <p className="text-4xl">Orders</p>

      {/* search, create and export section starts  */}

      <section className="mt-5 gird gird-col-1 md:flex justify-between">
        {/* search field */}

        <input
          type="text"
          className="w-full md:w-3/4 border-gray-200 border-2 rounded-md px-5 py-1 focus:outline-none"
          placeholder="Search Here..."
        />

        {/* Create and export section starts*/}

        <section className="flex justify-center items-center gap-x-5 mt-5 mb-5 md:mt-0">
          <div className="flex mt-1" 
          >
            <AiOutlinePlus className="mt-1 mr-1 text-gray-600" />
            <Link
              to="/dashboard/createorder"
              className="text-base text-primary font-bold hover:text-purple-700"
            >Create</Link>
          </div>
          <div className="flex mt-1">
            <BiImport className="mt-1 mr-1 text-gray-500" />
            <p className="text-base text-primary font-bold">Export</p>
          </div>
        </section>

        {/* Create and export section ends*/}
      </section>

      <div className="grid grid-cols-4 gap-x-3">
        {/* filter by delivery date section starts*/}
        <section
          className="mt-3 cursor-pointer col-span-4 md:col-span-1"
          ref={deliveryRef}
        >
          <div className="border-2 py-2 px-4 rounded-3xl flex overflow-hidden bg-white justify-center">
            <input
              type="text"
              value={deliveryDate}
              onClick={() => setShowDeliveryCalender(!showDeliveryCalender)}
              className="focus:outline-none text-center cursor-pointer w-full"
              readOnly
            />
            {selectedDeliveryDate && (
              <FiDelete
                className="mt-1 text-lg"
                onClick={handleDeliveryDateClear}
              />
            )}
            {!selectedDeliveryDate && (
              <BsFillCaretDownFill
                className="mt-1 text-gray-700 text-lg"
                onClick={() => setShowDeliveryCalender(!showDeliveryCalender)}
              />
            )}
          </div>

          {showDeliveryCalender && (
            <Calendar
              className={`absolute z-10`}
              onChange={handleSelectDeliveryDay}
              value={selectedDeliveryDate}
            />
          )}
        </section>

        {/* filter by order date section starts*/}

        <section
          className="mt-3 cursor-pointer col-span-4 md:col-span-1"
          ref={orderRef}
        >
          <div className="border-2 py-2 px-4 rounded-3xl overflow-hidden flex bg-white justify-center">
            <input
              type="text"
              value={orderDate}
              onClick={() => setShowOrderCalender(!showOrderCalender)}
              className="focus:outline-none text-center cursor-pointer w-full"
              readOnly
            />
            {selectedOrderDate && (
              <FiDelete
                className="mt-1 text-lg"
                onClick={handleOrderDateClear}
              />
            )}

            {!selectedOrderDate && (
              <BsFillCaretDownFill
                className="mt-1 text-gray-700 text-lg"
                onClick={() => setShowOrderCalender(!showOrderCalender)}
              />
            )}
          </div>

          {showOrderCalender && (
            <Calendar
              className={`absolute z-10`}
              onChange={handleSelectOrderDay}
              value={selectedOrderDate}
            />
          )}
        </section>

        <section className="mt-3 px-2 col-span-4 md:col-span-1 border-2 rounded-3xl flex bg-white">
          <Select
            options={statusOption}
            isClearable
            className="w-full"
            styles={customStyles}
            placeholder="Status"
            onChange={(e) => setStatus(e?.value)}
            components={{ DropdownIndicator }}
          />
        </section>

        <section className="mt-3 px-2 col-span-4 md:col-span-1 border-2 rounded-3xl flex bg-white">
          <Select
            options={monthOption}
            isClearable
            className="w-full"
            styles={customStyles}
            placeholder="Month"
            onChange={(e) => setStatus(e?.value)}
            components={{ DropdownIndicator }}
          />
        </section>
      </div>

      <section className="hidden lg:block my-10">
        <TableHeading />
        {currentPosts.map((item, index) => {
          return <TableData {...item} key={index} />;
        })}
      </section>

      <section className="grid sm:grid-cols-2 lg:hidden">
        {currentPosts.map((item, index) => {
          return <TableDataMobile {...item} key={index} />;
        })}
      </section>
      <div className="flex justify-end mb-5">
        <Select
          options={paginationOption}
          placeholder="Orders per page"
          className="w-48"
          menuPlacement="top"
          onChange={(e) => setPostsPerPage(e.value)}
        />
      </div>

      <div className="flex justify-end mb-10">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={orderData.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllOrder;

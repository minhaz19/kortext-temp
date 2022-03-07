import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { verifyAuthToken, authSelector } from '../../store/slices/authSlice'
import { useHistory } from 'react-router-dom'
import getAuthKey from '../../services/getAuthKey'

import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaTimes,
  FaChessBoard,
  FaClipboardCheck,
  FaClipboardList,
  FaShoppingBag,
  FaTasks,
  FaBitbucket,
  FaRegCalendarAlt,
  FaTruckMoving,
  FaUser,
  FaEye,
  FaHdd
} from "react-icons/fa";

import { FcSettings } from "react-icons/fc";
import ListItemsWithChilds from "./ListItemsWithChilds";

const DashboardLayout = ({ children }) => {

  const history = useHistory();

  const {token, loading} = useSelector(authSelector)
  const dispatch = useDispatch();

  const miniMenu = useRef(null);
  const sidebar = useRef(null);

  const [down, setDown] = useState(true);


  useEffect(() => {
    if(!loading && !token){
      history.push('/login')
    }else{
      dispatch(verifyAuthToken(getAuthKey()))
    }
    // eslint-disable-next-line
  }, [])

const userData = JSON.parse(localStorage.getItem('userDb')) || {}
  useEffect(() => {
    if(!loading && !token){
      history.push('/login')
    }
    // eslint-disable-next-line
  }, [loading, token])

  const toggleNav = () => {
    if (sidebar.current.classList.contains("openNav")) {
      sidebar.current.classList.remove("openNav");
      sidebar.current.classList.add("closeNav");
    } else {
      sidebar.current.classList.remove("closeNav");
      sidebar.current.classList.add("openNav");
    }
  };

  const toggleMenu = () => {
    if (miniMenu.current.classList.contains("invisible")) {
      miniMenu.current.classList.remove("invisible");
      miniMenu.current.classList.add("visible");
      setDown(false);
    } else {
      miniMenu.current.classList.remove("visible");
      miniMenu.current.classList.add("invisible");
      setDown(true);
    }
  };

  if(loading){
    return (
        <div></div>
    )
  }


  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      <div
        id="sidebar"
        ref={sidebar}
        className="h-screen menu text-white closeNav absolute md:relative flex pt-16 font-open-sans static overflow-hidden  shadow"
        style={{ background: "#062237" }}
      >
        <span
          className="cursor-pointer absolute md:hidden right-5 top-3"
          onClick={toggleNav}
        >
          <FaTimes color={"white"} size={24} />
        </span>

        <ul className="list-reset w-full">
          <ListItemsWithChilds
            label={{
              text: "Orders",
              Icon: FaChessBoard,
            }}
            subLabel={[
              {
                text: "All Orders",
                Icon: FaClipboardCheck,
                path: "/dashboard/allOrder",
              },
              {
                text: "Summary",
                Icon: FaClipboardList,
                path: "/dashboard/summary",
              },
            ]}
          />

          <ListItemsWithChilds
            label={{
              text: "Products",
              Icon: FaShoppingBag,
            }}
            subLabel={[
              {
                text: "All Products",
                Icon: FaBitbucket,
                path: "/dashboard/allProducts",
              },
              {
                text: "Categories",
                Icon: FaTasks,
                path: "/dashboard/categories",
              },
              {
                text: "Stocks",
                Icon: FaHdd,
                path: "/dashboard/stocks",
              },
            ]}
          />

          <ListItemsWithChilds
            label={{
              text: "Calender",
              Icon: FaRegCalendarAlt,
              path: "/dashboard/calender",
            }}
          />

          <ListItemsWithChilds
            label={{
              text: "Settings",
              Icon: FcSettings,
            }}
            subLabel={[
              {
                text: "General",
                Icon: FcSettings,
                path: "/dashboard/general",
              },
              {
                text: "Fulfilment",
                Icon: FaTruckMoving,
                path: "/dashboard/fulfilment",
              },
              {
                text: "Account",
                Icon: FaUser,
                path: "/dashboard/account",
              },
            ]}
          />

          <li className="my-2 md:my-0 list-item-parent w-full">
            <a
              href="https://www.google.com"
              className="flex cursor-pointer justify-between w-full py-1 md:py-3 pl-1 align-middle text-gray-400 no-underline hover:text-gray-200"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className={"flex cursor-pointer"}>
                <FaEye className={"inline cursor-pointer"} />

                <span className="block font-open-sans cursor-pointer font-semibold pl-2 md:pb-0 text-sm left-10">
                  Visit Shop
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-0 ">
        <div className="w-full flex flex-wrap">
          <nav
            id="header1"
            className="w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2"
            style={{ background: "#062237" }}
          >
            <div className="flex h-full justify-between items-center">
              <button
                onClick={toggleNav}
                className={"focus:outline-none pl-2 text-white"}
              >
                <FaBars size={28} />
              </button>

              <div className="flex relative inline-block">
                <div className="relative text-sm py-4 px-2 text-white">
                  <button
                    onClick={toggleMenu}
                    className="flex items-center focus:outline-none mr-3"
                  >
                    <span className="block mr-2">{userData.fullName || 'user'}</span>
                    {down ? <FaAngleDown /> : <FaAngleUp />}
                  </button>
                  <div
                    id="userMenu"
                    ref={miniMenu}
                    className="bg-white font-open-sans rounded shadow-md absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
                  >
                    <ul className="list-reset">
                      <li>
                        <a
                          href="/dashboard"
                          className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div id="main-content" className="w-full flex-1 p-2 contain h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

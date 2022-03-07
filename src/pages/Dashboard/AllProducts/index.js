import {useState, useEffect} from "react";
import EmailVerifyNote from "../../../components/EmailVerifyNote";
import {AiOutlinePlus} from "react-icons/ai";
import {BiImport} from "react-icons/bi";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import TableDataMobile from "./TableDataMobile";
import ReactPaginate from 'react-paginate'
import getProductForDashboardProductPageWithFilter
    from "../../../services/product/getProductForDashboardProductPageWithFilter";
import Modal from 'react-modal';
import {Link, useHistory} from 'react-router-dom';
import {paginationOption} from "../../../assets/Data/paginationOption";
import useQuery from "../../../hooks/useQuery";
import deleteProductById from "../../../services/product/deleteProductById";
import {toast} from "react-hot-toast";


const AllOrder = () => {

    const q = useQuery();
    const [searchText, setSearchText] = useState('')
    const [loading, setLoading] = useState(true)

    const history = useHistory();
    const [query, setQuery] = useState({})
    const [products, setProducts]= useState({
        data: [],
        count: 0
    })

    useEffect(() => {


        const adjustedQuery = {
            page: 1,
            limit: 10,
            search: ''
        }
        if(!!q.get('page')){
            adjustedQuery.page = parseInt(q.get('page'))
        }
        if(!!q.get('limit')){
            adjustedQuery.limit = parseInt(q.get('limit'))
        }

        if(!!q.get('search')){
            adjustedQuery.search = q.get('search')
            setSearchText((v) => q.get('search'))
        }

        setQuery(v => adjustedQuery)

// eslint-disable-next-line
    }, [])

    useEffect(() => {
        // eslint-disable-next-line
        history.push(history.location.pathname + '?' + `page=${query.page}&limit=${query.limit}${query.search ? '&search=' + query.search: ''}`)
        setLoading(true)
        getProductForDashboardProductPageWithFilter(query)
            .then(res => {
                setProducts({data: res.products, count: res.counts})
                setLoading(false)
            })
            .catch(err => {
                setProducts({
                    data: [],
                    count: 0
                })
                setLoading(false)
            })
    }, [query, history])

    const [totalpage, setTotalPage] = useState(1)

    useEffect(() => {
        setTotalPage(Math.ceil(products.count / query.limit) || 1)
    }, [products.count, query.limit])

    const [modalIsOpen, setIsOpen] = useState(false);




    const paginate = (pageNumber) => {
        setQuery(currentValue => ({...currentValue, page: pageNumber.selected + 1}))
    };

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

    Modal.setAppElement('#root');

    const [toDeleteId, setToDeleteId] = useState('')

    const deleteRequest = id => {
        setToDeleteId(id)
        setIsOpen(true)
    }

    const deleteProductRequest = () => {
        setIsOpen(false);
        toast.promise(deleteProductById(toDeleteId),
            {
                loading: 'Deleting! Please wait...',
                success: data => {
                    setQuery({
                        limit: 10,
                        page: 1,
                        search: ''
                    })
                    setLoading(true)
                    getProductForDashboardProductPageWithFilter({
                        limit: 10,
                        page: 1,
                        search: ''
                    })
                        .then(res => {
                            setProducts({data: res.products, count: res.counts})
                            setLoading(false)
                        })
                        .catch(err => {
                            setProducts({
                                data: [],
                                count: 0
                            })
                            setLoading(false)
                        })
                    return 'Deleted successful!'
                },
                error: 'Something error happen!'
            }
            )

    }


    return (
        <div className="relative font-open-sans p-5 md:p-10">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >


                <div className="flex justify-center py-3">
                    <h2 className="text-red-500 font-bold text-center">Are you sure want to delete?</h2>
                </div>
                <div className="my-4 flex px-4 justify-between">
                    <button onClick={deleteProductRequest} className={'bg-red-400 text-sm font-medium px-2 py-1 rounded shadow text-white'}>Delete</button>
                    <button onClick={() => {
                        setIsOpen(false)
                        setToDeleteId('')
                    }} className={'bg-gray-700 text-sm font-medium px-2 py-1 rounded shadow text-white'}>Cancel</button>
                </div>
            </Modal>
            <EmailVerifyNote/>
            <p className="text-4xl">Products</p>

            {/* search, create and export section starts  */}

            <section className="mt-5 gird gird-col-1 md:flex justify-between">
                {/* search field */}

                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(v => e.target.value)}
                    className="w-full md:w-3/4 border-gray-200 border-2 rounded-md px-5 py-1 focus:outline-none"
                    onKeyPress={e => e.key === 'Enter' && setQuery(cu => ({...cu, search: e.target.value}))}
                    placeholder="Search Here..."
                />

                {/* Create and export section starts*/}

                <section className="flex justify-center items-center gap-x-5 mt-5 mb-5 md:mt-0">
                    <div className="flex mt-1">
                        <AiOutlinePlus className="mt-1 mr-1 text-gray-600"/>
                        <Link
                            to="/dashboard/createproduct"
                            className="text-base text-primary font-bold hover:text-purple-700"
                        >Create</Link>
                    </div>
                    <div className="flex mt-1">
                        <BiImport className="mt-1 mr-1 text-gray-500"/>
                        <p className="text-base text-primary font-bold">Export</p>
                    </div>
                </section>

                {/* Create and export section ends*/}
            </section>


            <section className={`hidden lg:block my-10 ${loading && 'opacity-50'}`} style={{minHeight: '10rem'}}>
                <TableHeading/>
                {
                    loading === false && products.data.length === 0 ? (
                        <div className="h-full justify-center items-center">
                            <p className="text-center">No Product found!</p>
                        </div>
                    ): (
                        products.data.map((item) => {
                            return <TableData
                                {...item}
                                key={item.id + Math.random()}
                                deleteRequest={deleteRequest}
                            />;
                        })
                    )
                }

            </section>

            <section className="grid sm:grid-cols-2 gap-5 md:gap-8 lg:hidden my-10" style={{minHeight: '10rem'}}>
                {
                    loading === false && products.data.length === 0 ? (
                        <div className="h-full justify-center items-center">
                            <p className="text-center">No Product found!</p>
                        </div>
                    ): (
                        products.data.map((item) => {
                            return <TableDataMobile
                                {...item}
                                key={item.id}
                                deleteRequest={deleteRequest}
                            />;
                        })
                    )
                }

            </section>

            <div className="flex justify-end mb-5">
                <Select
                    options={paginationOption}
                    placeholder="Orders per page"
                    className="w-48"
                    menuPlacement="top"
                    value={{value: query.limit, label: query.limit}}
                    onChange={(e) => setQuery((old) => ({...old, limit: e.value, page: 1}))}
                />
            </div>

            <div className="grid justify-items-end mb-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={paginate}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    forcePage={query.page - 1}
                    pageCount={totalpage}
                    previousLabel="<"
                    containerClassName={'flex gap-2 px-2 bg-white py-1'}
                    pageClassName={'text-sm cursor-pointer flex items-center justify-center h-6 w-6 rounded-full'}
                    nextClassName={'text-sm cursor-pointer flex items-center justify-center h-6 w-6  rounded-full'}
                    previousClassName={'text-sm cursor-pointer flex items-center justify-center h-6 w-6 rounded-full'}
                    renderOnZeroPageCount={null}
                    activeClassName={'bg-red-300 text-black'}
                />
            </div>
        </div>
    );
};

export default AllOrder;

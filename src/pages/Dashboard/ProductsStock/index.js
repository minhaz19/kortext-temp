import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { paginationOption } from "../../../assets/Data/paginationOption";
import Select from "react-select";
import useQuery from "../../../hooks/useQuery";
import ReactPaginate from "react-paginate";
import getProductForDashboardProductPageWithFilter from "../../../services/product/getProductForDashboardProductPageWithFilter";
import { useHistory } from 'react-router-dom';

const Stock = () => {
    const [parentProductsName, setParentProductsName] = useState({});
  
    const q = useQuery();
    const [loading, setLoading] = useState(true)

    const history = useHistory();
    const [query, setQuery] = useState({})
    const [products, setProducts] = useState({
        data: [],
        count: 0
    })

    useEffect(() => {
        const adjustedQuery = {
            page: 1,
            limit: 10,
            search: ''
        }
        if (!!q.get('page')) {
            adjustedQuery.page = parseInt(q.get('page'))
        }
        if (!!q.get('limit')) {
            adjustedQuery.limit = parseInt(q.get('limit'))
        }
        setQuery(v => adjustedQuery)

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        // eslint-disable-next-line
        history.push(history.location.pathname + '?' + `page=${query.page}&limit=${query.limit}`)
        setLoading(true)
        getProductForDashboardProductPageWithFilter(query)
            .then(res => {
                setProducts({ data: res.products, count: res.counts })
                res.products.forEach((product) => {
                    if (product.parentId === null) {
                        setParentProductsName({ ...parentProductsName, [product.id]: product.name })
                    }
                })
                setLoading(false)
            })
            .catch(err => {
                setProducts({
                    data: [],
                    count: 0
                })
                setLoading(false)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, history])

    const [totalpage, setTotalPage] = useState(1)

    useEffect(() => {
        setTotalPage(Math.ceil(products.count / query.limit) || 1)
    }, [products.count, query.limit])

    const paginate = (pageNumber) => {
        setQuery(currentValue => ({ ...currentValue, page: pageNumber.selected + 1 }))
    };
    return (
        <div className="mx-10">
            <div className={`mb-20 ${loading && 'opacity-50'}`} style={{minHeight: '10rem'}}>
                <h1 className="text-3xl py-10">Stocks</h1>
                <div className="mb-10">
                    <div className="uppercase md:grid grid-cols-12 px-3 hidden gap-x-6 py-5 text-gray-400 font-bold font-open-sans">
                        <p className="col-span-1">image</p>
                        <p className="col-span-3">Product Name</p>
                        <p className="col-span-3">Parent Product</p>
                        <p className="col-span-2 flex justify-center items-center">Stock</p>
                        <p className="col-span-3 flex justify-end items-center">options</p>
                    </div>
                    {
                        loading === false && products.data.length === 0 ? (
                            <div className="h-full justify-center items-center">
                                <p className="text-center">No Product found!</p>
                            </div>
                        ) : (
                            products.data.map((product, index) => {
                                return <ProductDetails key={index} product={product} parentProductsName={parentProductsName} loading={loading}/>
                            }))
                    }
                </div>

                <div className="flex justify-end mb-5">
                    <Select
                        options={paginationOption}
                        placeholder="Orders per page"
                        className="w-48"
                        menuPlacement="top"
                        value={{ value: query.limit, label: query.limit }}
                        onChange={(e) => setQuery((old) => ({ ...old, limit: e.value, page: 1 }))}
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
        </div>
    )
}

export default Stock;
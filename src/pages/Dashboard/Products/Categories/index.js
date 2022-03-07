import React, { useState, useEffect } from 'react'
import CategoriesModal from '../../../../components/CategoriesModal';
import CatTableData from './CatTableData';
import CatTableHeading from './CatTableHeading';
import CatTableDataMobile from './CatTableDataMobile';
import getAllCategoryService from '../../../../services/category/getAllCategoryService';
import CategoryEditModal from './CategoryEditModal';
import deleteCategoryById from '../../../../services/category/deleteCategoryById';
import swal from 'sweetalert'

const Categories = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [categoriesData, setCategoriesData] = useState([{}]);
    const [isFetch, setisFetch] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [editCategoryData, setEditCategoryData] = useState([{}]);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        getAllCategoryService()
            .then(res => {
                setCategoriesData(res?.data)
                setisFetch(true)
            })
            .catch(err => {
                setisFetch(true)
            })
    }, [])

    useEffect(() => {
        setCategoriesData(priviousValue => {
            const afterFilter = priviousValue.filter(p => p.id !== editCategoryData.id);
            return ([...afterFilter, editCategoryData])
        })
    }, [editCategoryData])

    function openEditModal() {
        setEditModalIsOpen(true);
    }
    function closeEditModal() {
        setEditModalIsOpen(false);
    }

    const handleEdit = (item) => {
        setEditCategoryData(item)
        openEditModal()
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((result) => {
            if (result) {
                deleteCategoryById(id)
                    .then(res => {
                        if (res) {
                            swal("category has been deleted!", {
                                icon: "success",
                            });
                            filterCategory(id)
                        }
                    })
            }
        })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }
    const filterCategory = (id) => {
        setCategoriesData(categoriesData?.filter(cat => cat?.id !== id))
    }
    return (
        <div className="ml-10 mr-10">
            {!isFetch ? (
                <div className="flex flex-row justify-center items-center">
                    <span
                        disabled={true}
                        className="py-2 px-8 rounded text-black flex justify-center items-center flex-row">
                        {
                            <svg
                                className="animate-spin -ml-1 mr-3 h-8 w-8 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                        Loading...
                    </span>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl py-10">Categories</h1>
                    <div className="bg-white max-w-2xl sm:w-96 w-72 rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4 grid md:justify-items-center place-items-center text-center">
                            <div className="grid justify-center">
                                <h1 className="text-sm mb-2">Create categories to organize your products.</h1>
                            </div>
                            <button className="bg-blue-600 text-white text-sm
                    px-5 py-2 mt-5 rounded hover:bg-blue-800" onClick={openModal} >CREATE</button>
                        </div>
                    </div>
                    <CategoriesModal modalIsOpen={modalIsOpen} closeModal={closeModal} categoriesData={categoriesData} setCategoriesData={setCategoriesData} />
                    <section className=" hidden lg:block mt-10 mb-20">
                        <CatTableHeading />
                        {categoriesData.map((item, index) => {
                            return <CatTableData item={item} key={index} handleEdit={handleEdit} handleDelete={handleDelete} />;
                        })}
                    </section>
                    <section className="grid sm:grid-cols-2 gap-5 md:gap-8 lg:hidden mt-10 mb-20">
                        {categoriesData.map((item, index) => {
                            return <CatTableDataMobile item={item} key={index} handleDelete={handleDelete} handleEdit={handleEdit} />
                        })}
                    </section>
                    {editModalIsOpen && <CategoryEditModal editModalIsOpen={editModalIsOpen} closeEditModal={closeEditModal} editCategoryData={editCategoryData} setEditCategoryData={setEditCategoryData} />}

                </>
            )}
        </div>
    )
}

export default Categories

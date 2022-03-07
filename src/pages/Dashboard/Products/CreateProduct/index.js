import React, { useState } from "react";
//import { FaStar } from "react-icons/fa";
import Switch from "react-switch";
import postNewProductService from "../../../../services/product/postNewProductService";
import swal from "sweetalert";
import Varients from "../Varients";
import toast, { Toaster } from "react-hot-toast";
import getAllCategoryService from "../../../../services/category/getAllCategoryService";
//import Customizations from "./Customizations";
const initialSubProductState = {
  name: "",
  price: "0",
  description: "",
  isVarientDes: false,
  image: "",
};
const initialState = {
  customer: "",
  productName: "",
  productPrice: "0",
  description: "",
  productImage: "",
  productDescription: "",
  //resQuality: "",
  inventory: false,
  isProductDes: false,
  //isResQualityChoices: false,
  //isHideFromShop: false,
  //isVolumeDiscounts: false,
  hasVariant: true,
  subProducts: [],
  categories: [],
};
const CreateProduct = () => {
  const [creation, setCreation] = useState({ inProgress: false, error: "" });
  //input
  const [inputData, setInputData] = useState({
    ...initialState,
  });
  const isSaveButtonDisabled = () => {
    let childIsInValid = false;
    if (inputData.hasVariant) {
      inputData.subProducts.forEach((obj) => {
        if (obj.name?.length < 4 || obj.name?.length > 30) {
          childIsInValid = true;
        }
      });
    }
    return (
      inputData.productName?.length < 4 ||
      inputData.productName?.length > 30 ||
      childIsInValid ||
      creation.inProgress
    );
  };
  const switchChange = (input) => (e) => {
    setInputData({
      ...inputData,
      [input]: e,
      productDescription:
        input === "isProductDes" ? "" : inputData.productDescription,
    });
  };

  const dndContainer = React.useRef(null);
  const inputElem = React.useRef(null);

  const dragEnter = () => {
    dndContainer.current.classList.add("bg-gray-500");
    dndContainer.current.classList.add("shadow-inner");
    dndContainer.current.classList.add("border-2");
  };

  const dragEnd = () => {
    dndContainer.current.classList.remove("shadow-inner");
    dndContainer.current.classList.remove("bg-gray-500");
    dndContainer.current.classList.remove("border-2");
  };

  const addCategories = (id) => {
    setInputData({
      ...inputData,
      categories: inputData.categories.includes(id)
        ? inputData.categories.filter((e) => e !== id)
        : [...inputData.categories, id],
    });
  };
  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setInputData({ ...inputData, productImage: fileReader.result });
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChange = (input) => (e) => {
    setInputData({ ...inputData, [input]: e.target.value });
    //console.log(inputData);
  };
  //varients
  const addMore = () => {
    setInputData({
      ...inputData,
      subProducts: [...inputData.subProducts, { ...initialSubProductState }],
    });
  };
  const removeArr = (id) => {
    setInputData({
      ...inputData,
      subProducts: inputData.subProducts.filter((_, index) => index !== id),
    });
  };
  const [categoriesInfo, setCategoriesInfo] = React.useState({
    loading: false,
    categories: [],
  });
  React.useEffect(() => {
    getAllCategoryService()
      .then((res) => {
        console.log(res.data);
        setCategoriesInfo({
          loading: false,
          categories: res.data,
        });
      })
      .catch((e) => {
        setCategoriesInfo({
          loading: false,
          categories: [],
        });
      });
  }, []);
  const handleSubmit = () => {
    const loading = toast.loading("Creating...Please wait");
    setCreation({ ...creation, inProgress: true, error: "" });
    postNewProductService(inputData)
      .then((res) => {
        setCreation({ ...creation, inProgress: false, error: "" });
        toast.dismiss(loading);
        swal("Success!", "Product successfully", "success");
        setInputData({ ...initialState });
        //console.log(res);
      })
      .catch((e) => {
        setCreation({
          ...creation,
          inProgress: false,
          error: "Something went wrong",
        });
        toast.dismiss(loading);
        swal(
          "Oops",
          "Something went wrong! Please try again later :)",
          "error"
        );
        console.error(e);
      });
  };
  const handleVarintInputChange = ({ id, name, value }) => {
    setInputData({
      ...inputData,
      subProducts: inputData.subProducts.map((obj, index) =>{
        if(name === "isVarientDes"){
          return index === id ? { ...obj, [name]: value, description: "" } : obj
        }
        return index === id ? { ...obj, [name]: value } : obj
      }
        
      ),
    });
  };
  //customizations
  //   const [cusArr, setCusArr] = useState([{ id: 1 }]);
  //   const addCus = () => {
  //     setCusArr([...cusArr, { id: Math.random(100) }]);
  //   };
  //   const removeCus = (id) => {
  //     setCusArr(cusArr.filter((item) => item.id !== id));
  //   };
  const handleConfirmation = () => {
    swal({
      title: "Are you sure?",
      text: "This product will be inserted under your shop",
      type: "warning",
      showCancelButton: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleSubmit();
      }
    });
  };
  return (
    <div className="ml-5 mt-5 h-full mb-20">
      <Toaster />
      {/* Create Product */}
      <h1 className="text-2xl font-medium py-5">Create Product</h1>
      <p className="text-xs">Set your product details</p>
      <hr />
      <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto w-72 bg-white my-5 pb-5 shadow-md px-5">
        {/* Label 1*/}
        <div className="flex flex-row pt-4">
          <img
            src="/assets/svgs/dashboard/product.svg"
            alt=""
            className="h-4 pt-1"
          />
          <p className="pl-4 text-sm">Product's Name</p>
        </div>
        {/* input */}
        {/* <input
                    type="text"
                    name="customer"
                    className="input-general ml-9 pt-1"
                    placeholder="avcd"
                    value={inputData.customer}
                    onChange={handleChange('customer')}
                /> */}
        <input
          type="text"
          name="productName"
          className="input-general ml-9 pt-1"
          placeholder="Name of the product"
          value={inputData.productName}
          onChange={handleChange("productName")}
        />
        <br />
        {(inputData.productName?.length < 4 ||
          inputData.productName?.length > 30) && (
          <span className="text-sm ml-6 mt-1 font-semibold text-red-700">
            Product name must be between 4 to 30 characters long
          </span>
        )}
        {/* 2 */}
        {!inputData.hasVariant && (
          <React.Fragment>
            <div className="flex flex-row pt-4">
              <img
                src="/assets/svgs/dashboard/awesome-dollar-sign.svg"
                alt=""
                className="h-4 pt-1"
              />
              <p className="pl-6 text-sm">Product's Price</p>
            </div>

            <div className="">
              <input
                type="number"
                name="productPrice"
                className="input-general"
                placeholder="$"
                value={
                  inputData.productPrice
                    ? Math.abs(+inputData.productPrice)
                    : ""
                }
                onChange={handleChange("productPrice")}
              />
            </div>
          </React.Fragment>
        )}
        {/* 3 */}
        <div className="flex flex-row pt-4">
          <img
            src="/assets/svgs/dashboard/awesome-image.svg"
            alt=""
            className="h-4 pt-1"
          />
          <p className="pl-4 text-sm">Product's Image</p>
        </div>
        <div
          ref={dndContainer}
          onDrop={dragEnd}
          onDragEnter={dragEnter}
          onDragLeave={dragEnd}
          className="rounded-xl w-full
                                    overflow-hidden cursor-pointer relative grid justify-items-center bg-white shadow-lg py-3 px-5">
          <input
            ref={inputElem}
            onChange={uploadImage}
            type="file"
            accept={"image/png, image/jpg, image/jpeg, image/svg, image/webp"}
            className={
              "w-full cursor-pointer h-full absolute opacity-0 -top-0 -left-0 z-10"
            }
          />
          {inputData?.productImage ? (
            <>
              <button
                onClick={() => inputElem.current.click()}
                className="bg-gray-700 focus:outline-none px-3 py-2 font-sans-pro text-white hover:opacity-100 opacity-70 absolute transform top-4 right-4 rounded z-30">
                Change
              </button>

              <img
                src={inputData?.productImage}
                alt="N"
                className={"w-56 h-32 object-contain object-center"}
              />
            </>
          ) : (
            <>
              <div className="w-full max-h-10 ">
                <img
                  className="h-full w-full rounded"
                  src="/assets/svgs/createshop/cloud-upload.svg"
                  alt=""
                />
              </div>
              <div className=" pt-3 text-center">
                <p className="max-w-xl text-gray-400 text-xs">
                  Drag and drop here
                </p>
                <p className="max-w-xs text-gray-400 text-xs">or</p>
                <div className="text-center">
                  <p className="font-medium max-w-xl text-blue-300 text-sm">
                    Browse
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 4 */}
        <div className="flex flex-row pt-4">
          <img
            src="/assets/svgs/dashboard/ionic-ios-list.svg"
            alt=""
            className="h-3 pt-1"
          />
          <p className="pl-3 text-sm w-full">Description</p>
          <div className="grid justify-end w-full">
            <Switch
              id="isProductDes"
              onChange={switchChange("isProductDes")}
              checked={inputData.isProductDes}
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
        <p className="pl-8 p-2 text-xs text-gray-500">
          Add descriptions of the product
        </p>
        {inputData.isProductDes ? (
          <textarea
            type="text"
            name="productDescription"
            className="input-general ml-8 px-1 text-xs p-1"
            placeholder="Description"
            value={inputData.productDescription}
            onChange={handleChange("productDescription")}
          />
        ) : null}
        <div className="flex flex-row pt-4">
          <img
            src="/assets/svgs/dashboard/list.svg"
            alt=""
            className="h-3 pt-1"
          />
          <p className="pl-3 text-sm w-full">Include variants</p>
          <div className="grid justify-end w-full">
            <Switch
              id="hasVariant"
              onChange={switchChange("hasVariant")}
              checked={inputData.hasVariant}
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
        <p className="pl-8 p-2 text-xs text-gray-500">
          Does this product come with different options?
        </p>

        {/* 5 */}
        {/* <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/inventory.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm">Inventory</p>
                </div>
                <p className="pl-8 p-2 text-xs text-gray-500">Limit the available quantity for each day in your Calendar.</p>
                <div id="inventory" onChange={handleChange("inventory")} >
                    <div className="pt-2 pl-9 text-sm">
                        <input 
                            type="radio" 
                            value="byProduct"
                            name="inventory" 
                        /> By product
                    </div>
                    <div className="pt-2 pl-9 text-sm">
                        <input 
                            type="radio" 
                            value="byVarient"
                            name="inventory" 
                        /> By variant
                    </div>
                </div>
                <p className="pl-8 p-2 text-xs text-gray-500">Limit available quantity of each variant.</p> */}

        {/* 6 */}
        {/* <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/zocial-cart.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-3 text-sm w-full">Restrict quality choices</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="isResQualityChoices"
                            onChange={switchChange('isResQualityChoices')} 
                            checked={inputData.isResQualityChoices} 
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
                <p className="pl-8 p-2 text-xs text-gray-500">List the quantities customers are allowed to buy. Example: 5,10,15</p>
                {inputData.isResQualityChoices ? (
                    <input
                        type="text"
                        name="resQuality"
                        className="input-general text-xs p-1"
                        placeholder="Contains nuts"
                        value={inputData.resQuality}
                        onChange={handleChange('resQuality')}
                    />
                ) : null} */}
        {/* 7 */}
        {/* <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/error.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-5 text-sm w-full">Hide from shop</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="isHideFromShop"
                            onChange={switchChange("isHideFromShop")} 
                            checked={inputData.isHideFromShop} 
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
                </div> */}
      </div>
      <h1 className="text-2xl font-medium py-5">Categories</h1>
      <p className="max-w-3xl sm:w-auto w-72 text-xs">
        Choose relevant categories to choose form
      </p>
      <hr />
      <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto w-72 bg-white my-5 shadow-md px-5 pt-5 pb-4">
        {categoriesInfo.loading ? (
          "Loading, Please wait..."
        ) : (
          <React.Fragment>
            {categoriesInfo.categories?.length === 0 ? (
              "No categories found"
            ) : (
              <React.Fragment>
                <span className="text-gray-700">Available Categories</span>
                {categoriesInfo.categories.map((obj) => (
                  <div className="mt-2" key={obj.id}>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          onChange={(e) => addCategories(e.target.value)}
                          type="checkbox"
                          class="form-checkbox"
                          checked={inputData.categories.includes(obj.id)}
                          value={obj.id}
                        />
                        <span class="ml-2">{obj.name}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      {/* Variants */}
      {inputData.hasVariant && (
        <React.Fragment>
          <h1 className="text-2xl font-medium py-5">Variants</h1>
          <p className="max-w-3xl sm:w-auto w-72 text-xs">
            Create product variants to show the different options that customers
            can choose from.
          </p>
          <hr />
          <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto w-72 bg-white my-5 shadow-md px-5 pt-5">
            {inputData.subProducts.map((obj, index) => (
              <Varients
                id={index}
                key={index}
                removeArr={removeArr}
                info={obj}
                handleVarintInputChange={handleVarintInputChange}
              />
            ))}
            {/* add button */}
            <div className="py-5">
              <button
                className="bg-blue-600 text-white text-xs
                        py-2 rounded hover:bg-blue-800 w-full"
                onClick={addMore}>
                ADD
              </button>
            </div>
          </div>
        </React.Fragment>
      )}

      {/* Customizations */}
      {/* <h1 className="text-2xl font-medium py-5">Customizations</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">Ask customers additional questions to customize their product order.</p>
            <hr/>
            <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto w-72 bg-white my-5 shadow-md px-5 pt-5">
                {cusArr.map(i => (
                    <Customizations id={i.id} removeCus={removeCus} />
                ))}
             
                <div className="py-5">
                    <button
                        className="bg-blue-600 text-white text-xs
                        py-2 rounded hover:bg-blue-800 w-full"
                        onClick={addCus}
                    >ADD
                    </button>
                </div>
            </div> */}
      {/* Limits */}
      {/* <h1 className="text-2xl font-medium py-5">Limits</h1>
            <p className="max-w-3xl sm:w-auto w-72 text-xs">Set usage limits and duration for this promotion.</p>
            <hr/>
            <div className="max-w-3xl sm:w-auto w-72 bg-white my-5 pb-5 md:ml-auto md:mr-5 mr-0 ml-0 shadow-md px-5">
                <div className="flex flex-row pt-5">
                    <div className="flex flex-row bg-gray-300 h-6 justify-center items-center px-3 rounded-xl">
                        <FaStar color="gray" />
                        <p className="pl-4 text-sm">Upgrade to Startup plan</p>
                    </div>
                </div>
                <div className="flex flex-row pt-4">
                    <img src="/assets/svgs/dashboard/awesome-list-ul.svg" alt="" className="h-4 pt-1"/>
                    <p className="pl-4 text-sm w-full">Volume discounts</p>
                    <div className="grid justify-end w-full">
                        <Switch 
                            id="isVolumeDiscounts"
                            onChange={switchChange("isVolumeDiscounts")} 
                            checked={inputData.isVolumeDiscounts} 
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
                <p className="pl-7 p-2 text-xs text-gray-500">Offer discounts based on the quantity ordered. Applies only if the customer orders the same product and same variant.</p>
            </div> */}

      <div className="mb-10 pb-10">
        <button
          disabled={isSaveButtonDisabled()}
          onClick={handleConfirmation}
          className={`bg-blue-600 text-white text-xs
                    py-2 mb-10 rounded hover:bg-blue-800 w-20 ${
                      isSaveButtonDisabled()
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;

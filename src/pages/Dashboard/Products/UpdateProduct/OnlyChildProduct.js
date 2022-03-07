import React from "react";
import Switch from "react-switch";
import swal from "sweetalert";
import CloudinaryPublicIdToUrlMaker from "../../../../helpers/cloudinaryPublicIdToUrlMaker";
import putChildProductService from "../../../../services/product/putChildProductService";
import toast from "react-hot-toast";
const OnlyChildProduct = ({ info: propsInfo }) => {
  const [inputData, setInputData] = React.useState({
    ...propsInfo,
    isVarientDes: !!propsInfo.description,
    image: ""
  });
  const [creation, setCreation] = React.useState({ inProgress: false, error: "" });
  //input
  const switchChange = (input) => (e) => {
    if (input === "isVarientDes") {
      setInputData({ ...inputData, [input]: e, description: "" });
    } else {
      setInputData({ ...inputData, [input]: e });
    }
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

  const handleSubmit = () => {
    const loading = toast.loading("Updating...Please wait");
    setCreation({ ...creation, inProgress: true, error: "" });
    putChildProductService(propsInfo.id, inputData)
      .then((res) => {
        setCreation({ ...creation, inProgress: false, error: "" });
        toast.dismiss(loading);
        swal("Success!", "Product updated successfully", "success").then(() => {
          window.location.reload()
        });
        //setInputData({ ...initialState });
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
  const handleConfirmation = () => {
    swal({
      title: "Are you sure?",
      text: "This product will be updated under your shop",
      type: "warning",
      showCancelButton: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleSubmit();
      }
    });
  };
  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        setInputData({ ...inputData, image: fileReader.result });
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <React.Fragment>
      <h1 className="text-2xl font-medium py-5">Update Product</h1>
      <p className="text-xs">Set your product details</p>
      <hr />
      <div className="max-w-3xl md:ml-auto md:mr-5 mr-0 ml-0 sm:w-auto w-72 bg-white my-5 pb-5 shadow-md px-5">
        <div className="p-5 pb-0 mr-auto rounded mt-5 mb-5">
          {/* 1 varient */}

          <div className="flex flex-row">
            <img
              src="/assets/svgs/dashboard/product.svg"
              alt=""
              className="h-4 pt-1"
            />
            <p className="pl-4 text-sm w-full">Name</p>
          </div>
          <input
            type="text"
            name="name"
            className="border-b ml-4 pt-1 sm:w-96 w-9/12 mt-1 px-1"
            placeholder="Name of the product"
            value={inputData.name}
            onChange={handleChange}
          />
          <br />
          {(inputData.name?.length < 4 || inputData.name?.length > 30) && (
            <span className="text-sm ml-3 mt-1 font-semibold text-red-700">
              Product name must be between 4 to 30 characters long
            </span>
          )}
          {/* 2 price */}
          <div className="flex flex-row mt-4">
            <img
              src="/assets/svgs/dashboard/awesome-dollar-sign.svg"
              alt=""
              className="h-4 pt-1"
            />
            <p className="pl-4 text-sm w-full">Price</p>
          </div>
          <input
            type="number"
            name="price"
            className="border-b ml-4 pt-1 sm:w-96 w-9/12 mt-1 px-1"
            placeholder="$40"
            value={inputData.price ? Math.abs(+inputData.price) : ""}
            onChange={handleChange}
          />
          {/* 3 image*/}
          <br />
          {inputData.product_images?.length !== 0 && (
            <div className="flex flex-col mb-2">
              <span className="text-sm">Current image:</span>
              {inputData.product_images?.map((obj) => {
                return (
                  <div
                    key={obj?.id}
                    class="w-auto h-auto container mt-3 object-contain">
                    <img
                      alt={`${obj.source}`}
                      src={`${CloudinaryPublicIdToUrlMaker(obj.source, 100, 200)}`}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex flex-row pt-4">
            <img
              src="/assets/svgs/dashboard/awesome-image.svg"
              alt=""
              className="h-4 pt-1"
            />
            <p className="pl-4 text-sm">Change Image</p>
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
            {inputData?.image ? (
              <>
                <button
                  onClick={() => inputElem.current.click()}
                  className="bg-gray-700 focus:outline-none px-3 py-2 font-sans-pro text-white hover:opacity-100 opacity-70 absolute transform top-4 right-4 rounded z-30">
                  Change
                </button>

                <img
                  src={inputData?.image}
                  alt="N"
                  className={"w-56 h-32 object-contain object-center"}
                />
              </>
            ) : (
              <>
                <div className="w-full max-h-10">
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

          {/* 4 description*/}
          <div className="flex flex-row pt-4">
            <img
              src="/assets/svgs/dashboard/ionic-ios-list.svg"
              alt=""
              className="h-3 pt-1"
            />
            <p className="pl-3 text-sm w-full">Description</p>
            <div className="grid justify-end w-full">
              <Switch
                id="isVarientDes"
                onChange={switchChange("isVarientDes")}
                checked={inputData.isVarientDes}
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
          {inputData.isVarientDes ? (
            <textarea
              type="text"
              name="description"
              className="border-b ml-8 px-2 text-xs p-1 sm:w-96 w-9/12"
              placeholder="Description of the product"
              value={inputData.description}
              onChange={handleChange}
            />
          ) : null}
          {/* 5 delete*/}
          <div
            className="flex flex-row py-2 cursor-pointer justify-center items-center h-auto w-full hover:bg-blue-900 hover:text-white text-blue-900"
            onClick={() => {
              let invalid = inputData.name?.length < 4 || inputData.name?.length > 30
              if(!invalid){
                handleConfirmation()
              }
            }}>
            {/* <img
          src="/assets/svgs/dashboard/material-delete.svg"
          alt=""
          className="h-4"
        /> */}
            <p className="pl-2 text-sm">Save</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OnlyChildProduct;

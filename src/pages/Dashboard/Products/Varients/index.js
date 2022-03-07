import React from "react";
import Switch from "react-switch";

const Varients = (props) => {
  const { info: inputData, handleVarintInputChange, id, removeArr } = props;
  //input
  const switchChange = (input) => (e) => {
    handleVarintInputChange({id, name: input, value: e});
    //setInputData({ ...inputData, [input]: e });
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

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        handleVarintInputChange({id, name: "image", value: fileReader.result});
        //setInputData({ ...inputData, image: fileReader.result });
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChange = (e) => {
    handleVarintInputChange({id, name: e.target.name, value: e.target.value + ""});
    //setInputData({ ...inputData, [input]: e.target.value });
  };
  return (
    <div className="border p-5 border-gray-400 rounded mt-5">
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
      <br/>
      {
        (inputData.name?.length < 4 || inputData.name?.length > 30)
        &&
        <span className="text-sm ml-3 mt-1 font-semibold text-red-700">Product name must be between 4 to 30 characters long</span>
      }
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
        value={inputData.price
          ? Math.abs(+inputData.price)
          : ""}
        onChange={handleChange}
      />
      {/* 3 image*/}
      <div className="flex flex-row pt-4">
        <img
          src="/assets/svgs/dashboard/awesome-image.svg"
          alt=""
          className="h-4 pt-1"
        />
        <p className="pl-4 text-sm">Image</p>
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
        className="flex flex-row py-2 cursor-pointer justify-center items-center h-auto w-full hover:bg-red-100 text-red-700"
        onClick={() => removeArr(id)}>
        <img
          src="/assets/svgs/dashboard/material-delete.svg"
          alt=""
          className="h-4"
        />
        <p className="pl-2 text-sm">REMOVE</p>
      </div>
    </div>
  );
};

export default Varients;

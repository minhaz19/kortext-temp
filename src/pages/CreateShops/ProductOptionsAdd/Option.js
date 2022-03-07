import { FaImages } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addImage,
  addName,
  addPrice,
  selectedFieldId,
  removeSelectedFieldId,
  removeOption,
} from "../../../store/slices/menuCreationSlice";
import { TiDeleteOutline } from "react-icons/ti";

const Options = ({ id, img, name, price }) => {
  const dispatch = useDispatch();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSelectFile = async (e) => {
    if (e.target.files[0]) {
      const base64 = await convertBase64(e.target.files[0]);
      if (base64 instanceof Error) {
        console.log("Error");
        return;
      }

      dispatch(addImage(base64));
    }
  };

  const handleSelectName = (e) => {
    dispatch(addName(e.target.value));
  };

  const handleSelectPrice = (e) => {
    dispatch(addPrice(e.target.value));
  };

  return (
    <div className="md:px-6 py-2 grid grid-cols-6 md:grid-cols-8 gap-x-3">
      <input
        accept="image/*"
        id="image-upload"
        input-id={id}
        type="file"
        hidden
        onChange={onSelectFile}
      />
      <label
        htmlFor="image-upload"
        onClick={() => dispatch(selectedFieldId(id))}
      >
        <div className="h-10 border-gray-400 p-2 rounded-md bg-white col-span-1 cursor-pointer">
          {img ? (
            <img src={img} alt="" className="h-full w-full object-cover" />
          ) : (
            <FaImages className="text-gray-400 h-full w-full" />
          )}
        </div>
      </label>

      <div className="rounded-md overflow-hidden col-span-3 md:col-span-5 ">
        <input
          type="text"
          className="w-full h-full p-2 border-none focus:outline-none"
          value={name}
          onChange={handleSelectName}
          onFocus={() => dispatch(selectedFieldId(id))}
          onBlur={() => dispatch(removeSelectedFieldId())}
        />
      </div>

      <div className="rounded-md overflow-hidden col-span-1">
        <input
          type="text"
          className="w-full h-full p-2 border-none focus:outline-none text-center"
          placeholder="$20"
          value={price}
          onChange={handleSelectPrice}
          onFocus={() => dispatch(selectedFieldId(id))}
          onBlur={() => dispatch(removeSelectedFieldId())}
        />
      </div>
      <div
        className="col-span-1 flex items-center"
        onClick={() => dispatch(removeOption(id))}
      >
        <TiDeleteOutline className="h-3/4 w-1/2 text-red-500" />
      </div>
    </div>
  );
};

export default Options;

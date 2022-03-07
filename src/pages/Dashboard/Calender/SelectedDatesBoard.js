import React from "react";
import putAvailabilitiesService from "../../../services/availability/putAvailabilitiesService";
import toast from "react-hot-toast";
import swal from "sweetalert";
const SelectedDatesBoard = ({
  selectedDatesCount,
  initialDate,
  selectedDate,
  handleClear
}) => {
  const handleSubmit = () => {
    const loading = toast.loading("Updating...Please wait");
    putAvailabilitiesService(selectedDate)
      .then((res) => {
        toast.dismiss(loading);
        swal("Success!", "Updated successfully", "success").then(() => {
          //window.location.reload();
          handleClear();
        });
        //setInputData({ ...initialState });
        //console.log(res);
      })
      .catch((e) => {
        toast.dismiss(loading);
        swal(
          "Oops",
          "Something went wrong! Please try again later :)",
          "error"
        );
        //console.error(e);
      });
  };
  const handleConfirmation = () => {
    swal({
      title: "Are you sure?",
      text: "Availability dates will be updated under your shop",
      type: "warning",
      showCancelButton: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleSubmit();
      }
    });
  };
 // console.log(selectedDate);
  return (
    <div className="mb-32 ml-10 mt-5">
      {selectedDatesCount ? (
        <>
          <div className="text-2xl font-open-sans font-bold md:flex gap-1">
            <p>{initialDate}</p>
            {selectedDatesCount > 1 ? (
              <p>+ {selectedDatesCount - 1} More days selected</p>
            ) : null}
          </div>
          <button
            onClick={handleConfirmation}
            className="bg-primary text-white p-2 rounded-lg mt-5">
            Update Availability
          </button>
        </>
      ) : null}
       
    </div>
  );
};

export default SelectedDatesBoard;

import React from "react";
import { useDispatch } from "react-redux";
import { changeCountryModal } from "../../features/locationModals/locationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessBtn = ({ icon, btnText }) => {
  const dispatch = useDispatch();

  const handleModal = (e) => {
    e.preventDefault();
    dispatch(changeCountryModal("param"));
  };

  return (
    <button
      className="text-sm bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
      onClick={handleModal}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {btnText}
    </button>
  );
};

export default SuccessBtn;

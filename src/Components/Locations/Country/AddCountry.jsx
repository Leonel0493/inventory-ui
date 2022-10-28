import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { changeCountryModal } from "../../../features/countries/countriesSlice";
import AddCountryFrom from "./AddCountryFrom";

const AddCountry = () => {
  const modalState = useSelector((state) => state.countries.showCountryModal);
  const dispatch = useDispatch();

  const handleModal = (e) => {
    e.preventDefault();
    dispatch(changeCountryModal("parameter"));
  };
  return (
    <div
      className={`w-screen h-screen ${
        modalState ? "fixed" : "hidden"
      } bg-black bg-opacity-50 flex items-center justify-center z-10`}
    >
      <div className="w-1/2 h-fit px-2 py-3 relative shadow-md bg-white border border-gray-300 rounded-lg">
        <div
          id="cardHeader"
          className="w-full py-2 px-4 flex flex-row justify-between items-center border-b border-gray-300"
        >
          <h1 className="text-xl">Add Country</h1>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="w-5 h-5 text-red-600"
            onClick={handleModal}
          />
        </div>
        <AddCountryFrom />
      </div>
    </div>
  );
};

export default AddCountry;

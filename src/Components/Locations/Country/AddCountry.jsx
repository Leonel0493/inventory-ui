import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import AddCountryFrom from "./AddCountryFrom";

const AddCountry = () => {
  return (
    <div className="w-full mt-4 px-5 flex flex-col">
      <div className="w-full shadow-md bg-white border border-gray-300 rounded-lg">
        <div
          id="cardHeader"
          className="w-full py-2 px-4 flex flex-row justify-between items-center border-b border-gray-300"
        >
          <h1 className="text-xl">Add Country</h1>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="w-5 h-5 text-red-600"
          />
        </div>
        <AddCountryFrom />
      </div>
    </div>
  );
};

export default AddCountry;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessBtn = ({ icon, btnText }) => {
  return (
    <button className="text-sm bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600">
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {btnText}
    </button>
  );
};

export default SuccessBtn;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";

function SideBarHeader() {
  return (
    <div
      id="brandLink"
      className="w-full h-14 flex flex-row justify-start items-center py-2 px-3 border-b border-sky-700"
    >
      <FontAwesomeIcon icon={faUncharted} className="w-7 h-7 mr-3" />
      <h1 className="text-xl font-light">Inventory</h1>
    </div>
  );
}

export default SideBarHeader;

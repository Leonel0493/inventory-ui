import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="w-1/5 h-full bg-sky-800 text-white">
      <div
        id="menuHeader"
        className="w-full py-3 pl-2 pr-5 flex flex-row justify-between items-center"
      >
        <h1 className="text-2xl">Inventory</h1>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default SideBar;

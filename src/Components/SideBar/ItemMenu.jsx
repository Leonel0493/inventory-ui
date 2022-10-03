import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ItemMenu({ icon, itemName }) {
  return (
    <li className="w-56 h-9 px-2 py-1 mt-2 flex flex-row justify-between items-center rounded-md hover:bg-sky-700">
      <div className="flex flex-row justify-start items-center">
        <FontAwesomeIcon icon={icon} className="mr-2 w-6 h-4" />
        <p className="text-sm">{itemName}</p>
      </div>
      <FontAwesomeIcon icon={faAngleLeft} />
    </li>
  );
}

export default ItemMenu;

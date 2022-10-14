import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import ItemMenu from "./ItemMenu";

const ItemTree = ({ icon, itemName, childItems }) => {
  const [show, setShow] = useState(false);

  return (
    <li
      className={`w-56 ease-in-out duration-300 ${
        show ? "h-auto" : "h-9 px-2 py-1 mt-2 rounded-md hover:bg-sky-700"
      }`}
    >
      {/*** Father item ***/}
      <div
        onClick={() => setShow(!show)}
        className={`w-full flex flex-row justify-between items-center ${
          show ? "h-9 px-2 py-1 mt-2 rounded-md hover:bg-sky-700" : "h-full"
        }`}
      >
        <div className="w-full h-full flex flex-row justify-start items-center">
          <FontAwesomeIcon icon={icon} className="mr-2 w-6 h-4" />
          <p className="text-sm">{itemName}</p>
        </div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`transform ease-in-out duration-500 ${
            show ? " rotate-[-90deg]" : "rotate-0"
          }`}
        />
      </div>
      {/*** ENd father item ***/}

      {/*** Child item ***/}
      <ul
        className={` 
          ${show ? "flex flex-col items-center justify-center" : "hidden"}`}
      >
        {childItems.map((item) => (
          <ItemMenu
            key={item.id}
            icon={faCircleNotch}
            itemName={item.itemName}
          />
        ))}
      </ul>
    </li>
  );
};

export default ItemTree;

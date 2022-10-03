import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeSidebar } from "../../features/sidebar/sidebarSlice";

function NavBar() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeSidebar("parameter"));
  };

  return (
    <nav className="w-full h-14 py-4 px-4 flex flex-row justify-start items-center border-b border-gray-400">
      <FontAwesomeIcon
        onClick={handleClick}
        icon={faBars}
        className="w-6 h-4 mr-3 text-sky-900"
      />
      <p className="text-xl">Inventory System</p>
    </nav>
  );
}

export default NavBar;
